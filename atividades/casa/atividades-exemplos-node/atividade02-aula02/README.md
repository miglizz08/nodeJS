# Atividade 02 — Painel de Pedidos

## Aula base

Aula base: aula02 — Coleções, cópias e assincronismo (Promises/async-await)

## Objetivo

Praticar transformação de arrays com `filter`/`map` (como em `colecoes.js`)
e a criação de uma `Promise` consumida com `async/await` e `try/catch` (como
em `promessa.js`), os dois principais assuntos da aula.

## Conceitos praticados

- Arrays de objetos e métodos de array (`filter`, `map`)
- `Promise` (`resolve` / `reject`) com `setTimeout`
- `async` / `await` e `try / catch`
- `process.argv`

## Nível

🟡 Básico

## Tempo estimado

15–30 minutos

## Contexto

Um pequeno painel de pedidos de uma loja: uma lista de produtos com preço e
quantidade, e uma consulta (simulada) ao status de um pedido pelo código.

## Enunciado

O arquivo `index.js` tem duas funções incompletas: `calcularItensDoPedido` e
`consultarStatusPedido`. A função `executar` já está pronta e usa as duas.

- `calcularItensDoPedido(produtos)` deve devolver um novo array só com os
  produtos que têm `quantidade` maior que zero, e cada item desse novo array
  deve ter somente `nome` e `subtotal` (`preco * quantidade`).
- `consultarStatusPedido(codigo)` deve devolver uma `Promise` que, depois de
  80 ms, resolve com o status do pedido quando o código for `'PED-01'`, e
  rejeita com um erro para qualquer outro código.

## Requisitos

1. `calcularItensDoPedido` não altera o array `produtos` recebido.
2. Produtos com `quantidade` igual a `0` não aparecem no resultado.
3. `consultarStatusPedido('PED-01')` resolve com
   `{ codigo: 'PED-01', status: 'Em preparo' }`.
4. Qualquer outro código rejeita com a mensagem exata
   `` Pedido <codigo> não encontrado. ``.
5. O programa principal usa `await` dentro de um `try/catch` para tratar os
   dois casos (sucesso e falha).

## Como executar

```bash
npm ci
npm run check
npm test
npm start
npm run pedido-ausente
```

## Saída esperada

```text
$ npm start
Itens do pedido: [ { nome: 'Mouse', subtotal: 160 }, { nome: 'Teclado', subtotal: 120 } ]
Status do pedido: { codigo: 'PED-01', status: 'Em preparo' }

$ npm run pedido-ausente
Pedido PED-99 não encontrado.
```

(o comando `pedido-ausente` termina com código de saída `1`.)

## Dicas

- Uma `Promise` recebe uma função com dois parâmetros: `resolve` e `reject`.
  Chame um dos dois lá dentro do `setTimeout`.
- Você pode encadear métodos de array um depois do outro, na ordem que fizer
  mais sentido para o problema.

## Critérios de conclusão

- [ ] `npm run check` passa sem erros.
- [ ] `npm test` passa com os 3 testes verdes.
- [ ] `npm start` mostra os itens do pedido e o status "Em preparo".
- [ ] `npm run pedido-ausente` mostra o erro e sai com código `1`.
