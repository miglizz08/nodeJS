tarefas = [
  { id: 1, titulo: 'Estudar Node.js', prioridade: 'alta', concluida: false },
  { id: 2, titulo: 'Revisar atividade da aula 2', prioridade: 'media', concluida: true },
  { id: 3, titulo: 'Organizar mesa de trabalho', prioridade: 'baixa', concluida: false },
  { id: 4, titulo: 'Enviar relatório do TCC', prioridade: 'alta', concluida: false },
  { id: 5, titulo: 'Testar atividade 05', prioridade: 'media', concluida: true },
];

// Retorna quantas tarefas da lista ainda não foram concluídas
// (concluida === false).
function contarTarefasPendentes(tarefas) {
  return tarefas.filter(tarefa => tarefa.concluida === false).length;
}

// Retorna a tarefa cujo id seja igual ao informado, ou undefined caso
// nenhuma tarefa tenha esse id.
function buscarTarefaPorId(tarefas, id) {
  return tarefas.find(tarefa => tarefa.id === id);
}

// Retorna uma NOVA lista de tarefas em que a tarefa com o id informado
// passa a ter concluida: true. As demais tarefas devem permanecer
// exatamente como estavam. A lista original não pode ser modificada.
function marcarComoConcluida(tarefas, id) {
  return tarefas.map(tarefa => {
    if ( tarefa.id === id) {
      return {...tarefa, concluida: true };
    } else {
      return tarefa;
    }
  }); 
}

function main() {
  const idParaConcluir = Number(process.argv[2] || '1');

  console.log('Tarefas pendentes antes:', contarTarefasPendentes(tarefas));

  const tarefaEncontrada = buscarTarefaPorId(tarefas, idParaConcluir);

  if (tarefaEncontrada) {
    console.log('Tarefa encontrada:', tarefaEncontrada);
  } else {
    console.error(`Tarefa com id ${idParaConcluir} não encontrada.`);
    process.exitCode = 1;
    return;
  }

  const tarefasAtualizadas = marcarComoConcluida(tarefas, idParaConcluir);
  console.log('Tarefas pendentes depois:', contarTarefasPendentes(tarefasAtualizadas));
}

main();
