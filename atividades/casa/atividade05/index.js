const filmes = [
  { id: 1, titulo: 'Interestelar', genero: 'ficção científica', nota: 9.0 },
  { id: 2, titulo: 'O Poderoso Chefão', genero: 'drama', nota: 9.5 },
  { id: 3, titulo: 'Matrix', genero: 'ficção científica', nota: 8.8 },
  { id: 4, titulo: 'Toy Story', genero: 'animação', nota: 8.5 },
  { id: 5, titulo: 'Vingadores: Ultimato', genero: 'ficção científica', nota: 8.9 },
];

// Retorna o filme cujo título seja igual ao informado, sem diferenciar
// maiúsculas de minúsculas (ex: "matrix" deve encontrar "Matrix").
// Se nenhum filme corresponder, retorna undefined.
function buscarFilmePorTitulo(filmes, titulo) {
  // TODO: implementar
}

// Retorna um novo array contendo apenas os filmes do gênero informado.
// Não deve modificar o array original.
function listarFilmesPorGenero(filmes, genero) {
  // TODO: implementar
}

// Retorna a nota média de todos os filmes da lista.
function calcularNotaMedia(filmes) {
  // TODO: implementar
}

function main() {
  const tituloBuscado = process.argv[2] || 'Matrix';

  const filmeEncontrado = buscarFilmePorTitulo(filmes, tituloBuscado);

  if (filmeEncontrado) {
    console.log('Filme encontrado:', filmeEncontrado);
  } else {
    console.error(`Filme "${tituloBuscado}" não encontrado.`);
    process.exitCode = 1;
    return;
  }

  const filmesFiccao = listarFilmesPorGenero(filmes, 'ficção científica');
  console.log('Filmes de ficção científica:', filmesFiccao);

  const media = calcularNotaMedia(filmes);
  console.log('Nota média geral:', media);
}

main();
