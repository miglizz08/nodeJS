# Atividade 04 — Tarefas da Oficina

## Aula base

Aula base: aula04 — JSON, `node:fs/promises` e `node:path`

## Objetivo

Praticar leitura e escrita de arquivos JSON com `fs/promises`, montagem de
caminhos com `node:path`, tratamento do erro `ENOENT` e `async/await` com
`try/catch` — os assuntos de `leitura.js`, `escrita.js` e `conversao.js` da
aula. A atividade também revisa `map`/spread (aula 02), usados para atualizar
uma tarefa sem alterar o array original.

## Conceitos praticados

- `JSON.stringify` / `JSON.parse`
- `node:fs/promises` (`readFile`, `writeFile`)
- `node:path` (`resolve`) e `import.meta.dirname`
- `async` / `await` e `try / catch`
- Tratamento do erro `ENOENT`
- `Array.isArray`
- Revisão: `map`, spread, cópia sem mutação (aula 02)

## Nível

🟠 Básico+

## Tempo estimado

25–40 minutos

## Contexto

Uma pequena lista de tarefas de uma oficina mecânica, guardada em
`data/tarefas.json`. O programa marca uma tarefa como concluída (pelo `id`)
e salva o resultado em um novo arquivo, `data/saida.json`.

## Enunciado

O arquivo `index.js` tem três funções incompletas: `lerTarefas`,
`concluirTarefa` e `salvarTarefas`. A função `main` já está pronta e usa as
três em sequência.

- `lerTarefas(caminho)` deve ler o arquivo indicado, converter o conteúdo
  (texto JSON) em array com `JSON.parse`, e tratar o caso do arquivo não
  existir.
- `concluirTarefa(tarefas, id)` deve devolver um novo array com a tarefa de
  `id` correspondente marcada como concluída, sem alterar o array recebido.
- `salvarTarefas(caminho, tarefas)` deve converter o array para texto JSON
  (com indentação de 2 espaços) e gravar esse texto no arquivo indicado.

## Requisitos

1. `lerTarefas` lança `TypeError` (mensagem `'Arquivo de tarefas inválido.'`)
   se o conteúdo lido não for um array.
2. `lerTarefas` devolve `[]` (em vez de lançar erro) quando o arquivo não
   existe (`erro.code === 'ENOENT'`); qualquer outro erro deve ser
   relançado.
3. `concluirTarefa` não modifica o array `tarefas` recebido como parâmetro.
4. `concluirTarefa` lança `Error` com a mensagem exata
   `` Tarefa <id> não encontrada. `` quando nenhuma tarefa tem aquele `id`.
5. `salvarTarefas` grava um JSON válido e legível (indentado) no caminho
   indicado.

## Como executar

```bash
npm ci
npm run check
npm test
npm start
npm run tarefa-ausente
npm run arquivo-ausente
```

## Saída esperada

```text
$ npm start
Tarefa 1 marcada como concluída.
Tarefas salvas: [
  { id: 1, titulo: 'Trocar óleo', concluida: true },
  { id: 2, titulo: 'Revisar freios', concluida: true }
]

$ npm run tarefa-ausente
Tarefa 99 não encontrada.

$ npm run arquivo-ausente
Tarefa 1 não encontrada.
```

(os comandos `tarefa-ausente` e `arquivo-ausente` terminam com código de
saída `1` — no segundo caso, o arquivo não existe, então a lista fica
vazia e a tarefa `1` não é encontrada nela.)

## Dicas

- `readFile` e `writeFile` de `node:fs/promises` já devolvem/recebem
  `Promise`, então funcionam bem com `await`.
- O objeto de erro capturado no `catch` tem uma propriedade `code`; compare
  com a string `'ENOENT'` para saber se o arquivo simplesmente não existe.

## Critérios de conclusão

- [ ] `npm run check` passa sem erros.
- [ ] `npm test` passa com os 3 testes verdes.
- [ ] `npm start` mostra a tarefa 1 concluída e o array salvo.
- [ ] `npm run tarefa-ausente` mostra o erro e sai com código `1`.
- [ ] `npm run arquivo-ausente` mostra o erro (sem quebrar o programa) e
      sai com código `1`.
