'use strict';

const test = require('node:test');
const assert = require('node:assert');

const {
  validarPeca,
  adicionarPeca,
  reajustarPrecos,
  calcularValorTotalPorCategoria,
} = require('../src/estoque');

function criarEstoqueBase() {
  return [
    { nome: 'Filtro de óleo', codigo: 'FO-001', categoria: 'filtros', preco: 35.9, quantidade: 12 },
    { nome: 'Pastilha de freio', codigo: 'PF-010', categoria: 'freios', preco: 89.9, quantidade: 20 },
    { nome: 'Disco de freio', codigo: 'DF-011', categoria: 'freios', preco: 210.0, quantidade: 6 },
  ];
}

test('validarPeca aceita uma peça com todos os campos válidos', () => {
  const peca = { nome: 'Vela', codigo: 'V-01', categoria: 'ignicao', preco: 10, quantidade: 5 };
  assert.strictEqual(validarPeca(peca), true);
});

test('validarPeca rejeita peça sem nome', () => {
  const peca = { codigo: 'V-01', categoria: 'ignicao', preco: 10, quantidade: 5 };
  assert.strictEqual(validarPeca(peca), false);
});

test('validarPeca rejeita preço menor ou igual a zero', () => {
  const peca = { nome: 'Vela', codigo: 'V-01', categoria: 'ignicao', preco: 0, quantidade: 5 };
  assert.strictEqual(validarPeca(peca), false);
});

test('validarPeca rejeita quantidade negativa ou não inteira', () => {
  const pecaNegativa = { nome: 'Vela', codigo: 'V-01', categoria: 'ignicao', preco: 10, quantidade: -1 };
  const pecaFracionada = { nome: 'Vela', codigo: 'V-01', categoria: 'ignicao', preco: 10, quantidade: 2.5 };
  assert.strictEqual(validarPeca(pecaNegativa), false);
  assert.strictEqual(validarPeca(pecaFracionada), false);
});

test('adicionarPeca cadastra peça válida e retorna um novo array', () => {
  const estoque = criarEstoqueBase();
  const novaPeca = { nome: 'Vela', codigo: 'V-01', categoria: 'ignicao', preco: 10, quantidade: 5 };

  const resultado = adicionarPeca(estoque, novaPeca);

  assert.strictEqual(resultado.length, estoque.length + 1);
  assert.strictEqual(estoque.length, 3, 'o array original não deve ser modificado');
  assert.notStrictEqual(resultado, estoque, 'deve retornar um novo array, não o mesmo objeto');
});

test('adicionarPeca lança erro para peça inválida', () => {
  const estoque = criarEstoqueBase();
  const pecaInvalida = { nome: '', codigo: 'X-01', categoria: 'ignicao', preco: 10, quantidade: 5 };

  assert.throws(() => adicionarPeca(estoque, pecaInvalida), /Peça inválida\./);
});

test('adicionarPeca lança erro para código duplicado', () => {
  const estoque = criarEstoqueBase();
  const pecaDuplicada = { nome: 'Filtro repetido', codigo: 'FO-001', categoria: 'filtros', preco: 20, quantidade: 3 };

  assert.throws(() => adicionarPeca(estoque, pecaDuplicada), /já existe/i);
});

test('reajustarPrecos aumenta preços apenas da categoria informada', () => {
  const estoque = criarEstoqueBase();

  const resultado = reajustarPrecos(estoque, 'freios', 10);

  const pastilha = resultado.find((p) => p.codigo === 'PF-010');
  const disco = resultado.find((p) => p.codigo === 'DF-011');
  const filtro = resultado.find((p) => p.codigo === 'FO-001');

  assert.ok(Math.abs(pastilha.preco - 98.89) < 0.01);
  assert.ok(Math.abs(disco.preco - 231) < 0.01);
  assert.strictEqual(filtro.preco, 35.9, 'categorias diferentes não devem ser alteradas');
});

test('reajustarPrecos não modifica o array nem os objetos originais', () => {
  const estoque = criarEstoqueBase();
  const precoOriginal = estoque.find((p) => p.codigo === 'PF-010').preco;

  reajustarPrecos(estoque, 'freios', 10);

  const precoDepois = estoque.find((p) => p.codigo === 'PF-010').preco;
  assert.strictEqual(precoDepois, precoOriginal);
});

test('calcularValorTotalPorCategoria soma preco * quantidade agrupado por categoria', () => {
  const estoque = criarEstoqueBase();

  const totais = calcularValorTotalPorCategoria(estoque);

  assert.ok(Math.abs(totais.filtros - 430.8) < 0.01);
  assert.ok(Math.abs(totais.freios - (89.9 * 20 + 210 * 6)) < 0.01);
});
