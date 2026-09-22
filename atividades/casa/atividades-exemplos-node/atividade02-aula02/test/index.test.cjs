const test = require('node:test');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const { resolve } = require('node:path');

const diretorio = resolve(__dirname, '..');
const executar = (...args) =>
  spawnSync(process.execPath, ['index.js', ...args], { cwd: diretorio, encoding: 'utf8' });

test('calcula os itens do pedido, ignorando produtos com quantidade zero', () => {
  const r = executar('PED-01');
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.stdout, /nome: 'Mouse', subtotal: 160/);
  assert.match(r.stdout, /nome: 'Teclado', subtotal: 120/);
  assert.doesNotMatch(r.stdout, /Monitor/);
});

test('resolve a Promise para um código de pedido válido', () => {
  const r = executar('PED-01');
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.stdout, /status: 'Em preparo'/);
});

test('rejeita a Promise para um código de pedido inválido', () => {
  const r = executar('PED-99');
  assert.equal(r.status, 1);
  assert.match(r.stderr, /Pedido PED-99 não encontrado\./);
});
