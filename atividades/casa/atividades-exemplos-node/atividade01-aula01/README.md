# Atividade 01 — Painel de Boas-vindas do Terminal

## Aula base

Aula base: aula01 — Ambiente Node.js (`process`, `process.argv`, variáveis)

## Objetivo

Praticar a leitura de argumentos do terminal (`process.argv`), a montagem de
um objeto com dados do ambiente (`process`) e uma validação simples com
`if/else`, exatamente como nos exemplos `runtime.js` e `argumentos.js` da
aula.

## Conceitos praticados

- `const` / funções / `return`
- `process.argv`
- Objeto `process` (`version`, `platform`, `cwd()`)
- `if / else`
- Template literals
- `process.exitCode`

## Nível

🟢 Inicial

## Tempo estimado

10–20 minutos

## Contexto

Um pequeno painel de boas-vindas do terminal, usado no início de cada aula de
laboratório: o aluno informa nome e turma pela linha de comando, e o
programa confirma a inscrição e mostra um diagnóstico do ambiente Node.js.

## Enunciado

O arquivo `index.js` tem duas funções incompletas: `montarDiagnostico` e
`validarInscricao`. A função `main` já está pronta e usa as duas.

- `montarDiagnostico()` deve devolver um objeto com a versão do Node, a
  plataforma e o diretório atual do processo.
- `validarInscricao(nome, turma)` deve devolver `true` somente quando os
  dois parâmetros forem strings não vazias (ignorando espaços das pontas), e
  `false` caso contrário.

## Requisitos

1. `montarDiagnostico()` usa `process.version`, `process.platform` e
   `process.cwd()`.
2. `validarInscricao` rejeita valores que não sejam strings, strings vazias
   e strings só com espaços.
3. Quando a inscrição é inválida, o programa mostra
   `PENDENTE: informe nome e turma para continuar.` e encerra com código de
   saída `1`.
4. Quando a inscrição é válida, o programa mostra a mensagem de boas-vindas
   e o diagnóstico do ambiente.

## Como executar

```bash
npm ci
npm run check
npm test
npm start
npm run inscricao-invalida
```

## Saída esperada

```text
$ npm start
Bem-vindo(a), Ana! Turma: 3DS-A
Diagnóstico do ambiente: { node: 'v20.x.x', plataforma: 'linux', diretorio: '/caminho/...' }

$ npm run inscricao-invalida
PENDENTE: informe nome e turma para continuar.
```

(o comando `inscricao-invalida` termina com código de saída `1`.)

## Dicas

- `process.argv[2]` e `process.argv[3]` são os dois primeiros argumentos
  enviados por você; as duas posições anteriores são reservadas pelo Node.
- `.trim()` remove espaços do início e do fim de uma string.

## Critérios de conclusão

- [ ] `npm run check` passa sem erros.
- [ ] `npm test` passa com os 3 testes verdes.
- [ ] `npm start` mostra a mensagem de boas-vindas e o diagnóstico.
- [ ] `npm run inscricao-invalida` mostra o erro e sai com código `1`.
