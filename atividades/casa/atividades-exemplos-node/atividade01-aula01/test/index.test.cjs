const test = require('node:test');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const { resolve } = require('node:path');

const diretorio = resolve(__dirname, '..');
const executar = (...args) =>
  spawnSync(process.execPath, ['index.js', ...args], { cwd: diretorio, encoding: 'utf8' });

test('confirma a inscrição e mostra o diagnóstico do ambiente', () => {
  const r = executar('Ana', '3DS-A');
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.stdout, /Bem-vindo\(a\), Ana! Turma: 3DS-A/);
  assert.match(r.stdout, /plataforma:/);
  assert.match(r.stdout, /diretorio:/);
});

test('recusa quando nome e turma não são informados', () => {
  const r = executar();
  assert.equal(r.status, 1);
  assert.match(r.stderr, /PENDENTE: informe nome e turma para continuar\./);
});

test('caso limite: nome contendo apenas espaços é tratado como inválido', () => {
  const r = executar('   ', '3DS-A');
  assert.equal(r.status, 1);
  assert.match(r.stderr, /PENDENTE: informe nome e turma para continuar\./);
});
