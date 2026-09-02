'use strict';

// Estoque inicial da oficina. Este arquivo é apenas dado de entrada —
// você não precisa (nem deve) alterá-lo para resolver a atividade.
const pecas = [
  { nome: 'Filtro de óleo', codigo: 'FO-001', categoria: 'filtros', preco: 35.9, quantidade: 12 },
  { nome: 'Filtro de ar', codigo: 'FA-002', categoria: 'filtros', preco: 42.5, quantidade: 8 },
  { nome: 'Pastilha de freio', codigo: 'PF-010', categoria: 'freios', preco: 89.9, quantidade: 20 },
  { nome: 'Disco de freio', codigo: 'DF-011', categoria: 'freios', preco: 210.0, quantidade: 6 },
  { nome: 'Vela de ignição', codigo: 'VI-005', categoria: 'ignicao', preco: 18.75, quantidade: 40 },
];

module.exports = pecas;
