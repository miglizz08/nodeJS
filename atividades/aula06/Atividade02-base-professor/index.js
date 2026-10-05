import express from 'express';

const produtos = [
  { id: 1, nome: 'Teclado', preco: 120 },
  { id: 2, nome: 'Mouse', preco: 80 }
];

export function criarAplicacao() {
  // TODO: crie o app e implemente GET /api/produtos retornando a coleção.
  throw new Error('PENDENTE: implemente a rota de listagem.');
}

const app = criarAplicacao();
const porta = Number(process.env.PORT || 3000);
app.listen(porta, '127.0.0.1', () => console.log(`Servidor iniciado na porta ${porta}.`));
