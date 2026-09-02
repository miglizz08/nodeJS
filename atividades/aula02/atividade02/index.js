const catalogoDaBiblioteca = [
  { tombo: 'L-101', titulo: 'JavaScript Essencial', tipo: 'Livro', disponivel: true },
  { tombo: 'R-205', titulo: 'Tecnologia em Foco', tipo: 'Revista', disponivel: true },
  { tombo: 'L-309', titulo: 'Algoritmos na Prática', tipo: 'Livro', disponivel: false }
];

const tipoDesejado = process.argv[2] || 'Livro';

try {
  const resultados = catalogoDaBiblioteca
    .filter(item => item.tipo === tipoDesejado && item.disponivel)
    .map(({ tombo, titulo }) => ({ tombo, titulo }));

  if (resultados.length === 0) {
    throw new Error('Nenhum material disponível para Apostila.');
  }
  console.log(resultados);
} catch (erro) {
  console.error(erro.message);
  process.exitCode = 1;
}