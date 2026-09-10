const test = require('node:test');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const { resolve } = require('node:path');

const diretorio = resolve(__dirname, '..');
const executar = (...args) =>
  spawnSync(process.execPath, ['index.js', ...args], { cwd: diretorio, encoding: 'utf8' });

test('cria o personagem, aplica dano e mostra o status corretamente', () => {
  const r = executar();
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.stdout, /Guerreiro criado com 100\/100 de vida\./);
  assert.match(r.stdout, /Vida após receber 30 de dano: 70/);
  assert.match(r.stdout, /Está derrotado\? true/);
});

test('recusa a criação de um personagem com vida máxima inválida', () => {
  const r = executar('--erro');
  assert.equal(r.status, 1);
  assert.match(r.stderr, /Erro: Vida máxima inválida\./);
});

test('caso limite: dano maior que a vida restante não fica negativo, e cura não ultrapassa a vida máxima', () => {
  const r = executar();
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.stdout, /Vida após receber 90 de dano: 0/);
  assert.match(r.stdout, /Vida após curar 1000: 100/);
  assert.match(r.stdout, /Está derrotado agora\? false/);
});
