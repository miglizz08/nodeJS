import express from 'express';

export function criarAplicacao() {
  const app = express();

  app.get('/api/saude', (_req, res) => {
    res.status(200).json({ status: 'ok' });
  });

  return app;
}

const app = criarAplicacao();
const porta = Number(process.env.PORT || 3000);
app.listen(porta, '127.0.0.1', () => console.log(`Servidor iniciado na porta ${porta}.`));
