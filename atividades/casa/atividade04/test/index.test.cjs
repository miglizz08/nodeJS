const test = require('node:test');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const { resolve } = require('node:path');

const diretorio = resolve(__dirname, '..');
const executar = (...args) =>
  spawnSync(process.execPath, ['index.js', ...args], { cwd: diretorio, encoding: 'utf8' });

test('encontra o aluno pelo id e mostra seus dados', () => {
  const r = executar('2');
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.stdout, /Aluno encontrado:/);
  assert.match(r.stdout, /Julia/);
});

test('informa quando o aluno não é encontrado', () => {
  const r = executar('999');
  assert.equal(r.status, 1);
  assert.match(r.stderr, /Aluno com id 999 não encontrado\./);
});

test('calcula a média da turma 3DS-C corretamente', () => {
  const r = executar('2');
  const linha = r.stdout.match(/Média da turma 3DS-C:\s*([\d.,]+)/);
  assert.ok(linha, 'a linha da média não foi encontrada na saída');
  const media = parseFloat(linha[1].replace(',', '.'));
  const esperado = (8.5 + 5.2 + 4.8) / 3;
  assert.ok(Math.abs(media - esperado) < 0.01, `média calculada (${media}) diferente do esperado (${esperado})`);
});

test('gera lista de aprovados apenas com id e nome', () => {
  const r = executar('2');
  const inicio = r.stdout.indexOf('Aprovados:');
  const fim = r.stdout.indexOf('alunoValido');
  assert.ok(inicio !== -1 && fim !== -1, 'não encontrou o bloco de aprovados na saída');
  const trecho = r.stdout.slice(inicio, fim);
  assert.match(trecho, /Marcos/);
  assert.match(trecho, /Renata/);
  assert.match(trecho, /Aline/);
  assert.doesNotMatch(trecho, /Julia/);
  assert.doesNotMatch(trecho, /Pedro/);
  assert.doesNotMatch(trecho, /turma/);
  assert.doesNotMatch(trecho, /nota/);
});

test('valida corretamente aluno válido e aluno inválido', () => {
  const r = executar('2');
  assert.match(r.stdout, /alunoValido é válido\? true/);
  assert.match(r.stdout, /alunoInvalido é válido\? false/);
});
