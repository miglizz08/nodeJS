const test = require('node:test');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const { resolve } = require('node:path');

const diretorio = resolve(__dirname, '..');
const executar = (...args) =>
  spawnSync(process.execPath, ['index.js', ...args], { cwd: diretorio, encoding: 'utf8' });

test('cria o ingresso e aplica um desconto de 10%', () => {
  const r = executar('10');
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.stdout, /Ingresso ING-001 \(Pista\): R\$\s*250,00/);
  assert.match(r.stdout, /Após desconto de 10%: R\$\s*225,00/);
});

test('recusa um percentual de desconto acima de 100', () => {
  const r = executar('150');
  assert.equal(r.status, 1);
  assert.match(r.stderr, /Percentual de desconto inválido\./);
});

test('caso limite: desconto de 100% zera o preço do ingresso', () => {
  const r = executar('100');
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.stdout, /Após desconto de 100%: R\$\s*0,00/);
});
