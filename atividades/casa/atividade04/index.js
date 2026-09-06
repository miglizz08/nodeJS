process.env.NODE_DISABLE_COLORS = '1';
const util = require('util');
util.inspect.defaultOptions.colors = false;

const alunos = [
  { id: 1, nome: 'Marcos', turma: '3DS-C', nota: 8.5 },
  { id: 2, nome: 'Julia', turma: '3DS-C', nota: 5.2 },
  { id: 3, nome: 'Renata', turma: '3DS-B', nota: 9.1 },
  { id: 4, nome: 'Pedro', turma: '3DS-C', nota: 4.8 },
  { id: 5, nome: 'Aline', turma: '3DS-B', nota: 7.0 },
];

// Retorna o objeto do aluno cujo id seja igual ao informado, ou
// undefined caso nenhum aluno tenha esse id.
function encontrarAluno(alunos, id) {
  return alunos.find(aluno => aluno.id === id);
}
// Retorna a média das notas dos alunos de uma turma específica.
// Considere apenas os alunos cujo campo `turma` seja igual ao
// parâmetro `turma`.
function calcularMediaTurma(alunos, turma) {
  const alunosDaTurma = alunos.filter(aluno => aluno.turma === turma);
  const soma = alunosDaTurma.reduce((acumulador, aluno) => acumulador + aluno.nota, 0);
  if(alunosDaTurma.length === 0) return 0;

  const media = soma / alunosDaTurma.length;

return media;


}

// Retorna um novo array contendo apenas os alunos aprovados
// (nota maior ou igual a 6), com cada item contendo somente as
// propriedades `id` e `nome` (sem `turma` nem `nota`).
function gerarListaAprovados(alunos) {
  const aprovados = alunos.filter( aluno => aluno.nota >= 6);

  const listaAprovados = aprovados.map( aluno => {
    return{
      id: aluno.id,
      nome: aluno.nome
  }});

  return listaAprovados
  
}

// Retorna true se o aluno tiver um nome (string não vazia) e uma
// nota que seja um número entre 0 e 10 (inclusive). Caso contrário,
// retorna false.
function validarAluno(aluno) {
  if(typeof aluno.nome === 'string' && aluno.nome.trim() !=='' && 
     typeof aluno.nota === 'number' && aluno.nota >= 0 && aluno.nota <=10 ) {
    return true;
  } else {
    return false;
  }
}

function main() {
  const idBuscado = Number(process.argv[2] || '2');

  const alunoEncontrado = encontrarAluno(alunos, idBuscado);

  if (alunoEncontrado) {
    console.log('Aluno encontrado:', alunoEncontrado);
  } else {
    console.error(`Aluno com id ${idBuscado} não encontrado.`);
    process.exitCode = 1;
    return;
  }

  const mediaTurmaC = calcularMediaTurma(alunos, '3DS-C');
  console.log('Média da turma 3DS-C:', mediaTurmaC);

  const aprovados = gerarListaAprovados(alunos);
  console.log('Aprovados:', aprovados);

  const alunoValido = { id: 6, nome: 'Carla', turma: '3DS-B', nota: 7.5 };
  const alunoInvalido = { id: 7, nome: '', turma: '3DS-B', nota: 15 };

  console.log('alunoValido é válido?', validarAluno(alunoValido));
  console.log('alunoInvalido é válido?', validarAluno(alunoInvalido));
}

main();
