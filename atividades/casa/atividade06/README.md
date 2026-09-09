# Atividade 06 - Lista de Tarefas

## Objetivo

Praticar novamente funções, `if/else`, percorrer arrays de objetos e criar uma cópia imutável de uma lista — reforçando a mesma sintaxe das atividades anteriores.

## Contexto

Você tem uma pequena lista de tarefas (`id`, `titulo`, `prioridade`, `concluida`) guardada em `index.js`. O programa precisa contar quantas tarefas ainda estão pendentes, buscar uma tarefa pelo id e marcar essa tarefa como concluída.

## Conceitos praticados

- Funções, parâmetros e retorno
- Arrays e objetos
- Métodos de array (o mesmo espírito de `find` e `filter` já usados antes)
- `if / else`
- Spread (para criar uma nova lista sem alterar a original)
- `process.argv`

## Tempo estimado

- Tempo estimado: 20 minutos
- Nível: 🟡 Básico

## Enunciado

Três funções em `index.js` estão incompletas. A função `main` já está pronta e mostra o resultado de cada uma no terminal.

## Requisitos

1. Contar quantas tarefas da lista ainda não foram concluídas.
2. Buscar uma tarefa pelo id informado (retornando `undefined` quando não existir, para o programa tratar o erro).
3. Gerar uma **nova** lista de tarefas em que a tarefa buscada passe a ter `concluida: true`, sem alterar a lista original nem as demais tarefas.

## Como executar

```cmd
npm ci
npm run check
npm test
npm start
npm run tarefa-ausente
```

## Saída esperada

Com tudo implementado, `npm start` (que busca o id `1`) deve produzir algo como:

```text
Tarefas pendentes antes: 3
Tarefa encontrada: {
  id: 1,
  titulo: 'Estudar Node.js',
  prioridade: 'alta',
  concluida: false
}
Tarefas pendentes depois: 2
```

`npm run tarefa-ausente` (busca o id `999`, que não existe) deve terminar assim:

```text
Tarefa com id 999 não encontrada.
```

(e o processo deve terminar com código de saída `1`)

## Dicas

> Dica 1: para contar as tarefas pendentes, pense em como percorrer a lista e verificar, uma a uma, se `concluida` é `false`.

> Dica 2: para gerar a nova lista em `marcarComoConcluida`, pense em como criar uma cópia de cada tarefa — mudando `concluida` apenas na tarefa certa e mantendo as demais exatamente como estavam.

## Critérios de conclusão

- [ ] `contarTarefasPendentes` retorna o número correto de tarefas não concluídas;
- [ ] `buscarTarefaPorId` retorna a tarefa correta ou `undefined` quando o id não existe;
- [ ] `marcarComoConcluida` retorna uma nova lista com a tarefa certa marcada como concluída, sem alterar a lista original;
- [ ] `npm test` passa sem falhas;
- [ ] `npm run check` passa sem falhas.
