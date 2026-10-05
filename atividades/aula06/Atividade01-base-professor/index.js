import express from 'express';

export function criarAplicacao() {
  // TODO: crie o app e implemente GET /api/saude.
  throw new Error('PENDENTE: implemente o primeiro servidor Express.');
}

const app = criarAplicacao();
const porta = Number(process.env.PORT || 3000);
app.listen(porta, '127.0.0.1', () => console.log(`Servidor iniciado na porta ${porta}.`));
