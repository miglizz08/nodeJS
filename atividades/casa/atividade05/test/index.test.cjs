const test = require('node:test');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const { resolve } = require('node:path');

const diretorio = resolve(__dirname, '..');
const executar = (...args) =>
  spawnSync(process.execPath, ['index.js', ...args], { cwd: diretorio, encoding: 'utf8' });

test('encontra o filme por título, ignorando maiúsculas/minúsculas', () => {
  const r = executar('matrix');
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.stdout, /Filme encontrado:/);
  assert.match(r.stdout, /Matrix/);
});

test('informa quando o filme não é encontrado', () => {
  const r = executar('Titanic');
  assert.equal(r.status, 1);
  assert.match(r.stderr, /Filme "Titanic" não encontrado\./);
});

test('lista apenas os filmes do gênero informado', () => {
  const r = executar('Matrix');
  const inicio = r.stdout.indexOf('Filmes de ficção científica:');
  const fim = r.stdout.indexOf('Nota média geral:');
  assert.ok(inicio !== -1 && fim !== -1, 'não encontrou o bloco de filmes por gênero na saída');
  const trecho = r.stdout.slice(inicio, fim);

  assert.match(trecho, /Interestelar/);
  assert.match(trecho, /Matrix/);
  assert.match(trecho, /Vingadores/);
  assert.doesNotMatch(trecho, /Poderoso Chefão/);
  assert.doesNotMatch(trecho, /Toy Story/);
});

test('calcula a nota média geral corretamente', () => {
  const r = executar('Matrix');
  const linha = r.stdout.match(/Nota média geral:\s*([\d.,]+)/);
  assert.ok(linha, 'a linha da nota média não foi encontrada na saída');
  const media = parseFloat(linha[1].replace(',', '.'));
  const esperado = (9.0 + 9.5 + 8.8 + 8.5 + 8.9) / 5;
  assert.ok(Math.abs(media - esperado) < 0.01, `média calculada (${media}) diferente do esperado (${esperado})`);
});
