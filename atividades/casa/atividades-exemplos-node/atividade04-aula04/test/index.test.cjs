const test = require('node:test');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');

const diretorio = resolve(__dirname, '..');
const caminhoSaida = resolve(diretorio, 'data', 'saida.json');
const executar = (...args) =>
  spawnSync(process.execPath, ['index.js', ...args], { cwd: diretorio, encoding: 'utf8' });

test('lê tarefas.json, conclui a tarefa 1 e salva o resultado em saida.json', () => {
  const r = executar('1');
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.stdout, /Tarefa 1 marcada como concluída\./);

  const salvo = JSON.parse(readFileSync(caminhoSaida, 'utf8'));
  const tarefa1 = salvo.find((tarefa) => tarefa.id === 1);
  assert.ok(tarefa1, 'tarefa com id 1 deveria existir no arquivo salvo');
  assert.equal(tarefa1.concluida, true);
});

test('erro quando o id da tarefa não existe em tarefas.json', () => {
  const r = executar('99');
  assert.equal(r.status, 1);
  assert.match(r.stderr, /Tarefa 99 não encontrada\./);
});

test('caso limite: arquivo de tarefas ausente é tratado como lista vazia (ENOENT)', () => {
  const r = executar('1', '--arquivo-ausente');
  assert.equal(r.status, 1);
  assert.match(r.stderr, /Tarefa 1 não encontrada\./);
});
