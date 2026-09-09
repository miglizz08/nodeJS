const test = require('node:test');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const { resolve } = require('node:path');

const diretorio = resolve(__dirname, '..');
const executar = (...args) =>
  spawnSync(process.execPath, ['index.js', ...args], { cwd: diretorio, encoding: 'utf8' });

test('conta as tarefas pendentes e mostra a tarefa encontrada', () => {
  const r = executar('1');
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.stdout, /Tarefas pendentes antes: 3/);
  assert.match(r.stdout, /Tarefa encontrada:/);
  assert.match(r.stdout, /Estudar Node\.js/);
});

test('informa quando a tarefa não é encontrada', () => {
  const r = executar('999');
  assert.equal(r.status, 1);
  assert.match(r.stderr, /Tarefa com id 999 não encontrada\./);
});

test('marca a tarefa como concluída e reduz o total de pendentes, sem alterar a lista original', () => {
  const r = executar('1');
  assert.match(r.stdout, /Tarefas pendentes depois: 2/);
});

test('caso limite: marcar uma tarefa que já estava concluída não muda o total de pendentes', () => {
  const r = executar('2');
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.stdout, /Tarefas pendentes antes: 3/);
  assert.match(r.stdout, /Tarefas pendentes depois: 3/);
});
