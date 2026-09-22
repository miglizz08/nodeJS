# Atividade 03 — Ingresso com Desconto

## Aula base

Aula base: aula03 — Módulos ES e Classes

## Objetivo

Praticar a divisão de responsabilidades entre módulos (`import`/`export`) e
a criação de uma classe com validação no `constructor` e um método que
altera o estado da instância — o mesmo padrão do exemplo `Produto.js` da
aula, combinado com o módulo `formatarMoeda.js` já pronto.

## Conceitos praticados

- Módulos ES (`import` / `export`, inclusive `export default`)
- Classes: `constructor`, propriedades da instância, métodos
- Validação com `if` e `throw` (`TypeError` / `RangeError`)
- Uso de uma função utilitária já pronta (`Intl.NumberFormat` via
  `formatarMoeda`)

## Nível

🔵 Intermediário inicial

## Tempo estimado

20–35 minutos

## Contexto

Um sistema simples de venda de ingressos para um evento. Cada ingresso tem
um código, um tipo e um preço — e pode receber um desconto percentual.

## Enunciado

O arquivo `formatarMoeda.js` já está pronto (igual ao da aula) e não precisa
ser alterado. Complete a classe `Ingresso`, em `Ingresso.js`:

- O `constructor` recebe `{ codigo, tipo, preco }`, valida os três dados e
  guarda cada um em uma propriedade da instância.
- `aplicarDesconto(percentual)` valida o percentual recebido e reduz
  `this.preco` proporcionalmente (por exemplo, preço `250` com desconto de
  `10%` deve virar `225`).

## Requisitos

1. `codigo` e `tipo` devem ser strings não vazias; caso contrário, lance
   `TypeError` com a mensagem indicada nos comentários do arquivo.
2. `preco` deve ser um número finito maior que zero; caso contrário, lance
   `TypeError`.
3. `aplicarDesconto` só aceita percentuais maiores que `0` e até `100`;
   fora disso, lance `RangeError`.
4. O `index.js` (já pronto) deve continuar funcionando sem alterações,
   mostrando o preço formatado em reais antes e depois do desconto.

## Como executar

```bash
npm ci
npm run check
npm test
npm start
npm run desconto-invalido
npm run desconto-total
```

## Saída esperada

```text
$ npm start
Ingresso ING-001 (Pista): R$ 250,00
Após desconto de 10%: R$ 225,00

$ npm run desconto-invalido
Percentual de desconto inválido.
```

(o comando `desconto-invalido` termina com código de saída `1`.)

## Dicas

- O `constructor` segue o mesmo raciocínio de validação que você já usou em
  outras atividades — só que agora guardando o resultado em `this` em vez
  de retornar um objeto novo.
- Você não precisa alterar `formatarMoeda.js` nem `index.js`: eles já
  fazem a parte deles.

## Critérios de conclusão

- [ ] `npm run check` passa sem erros.
- [ ] `npm test` passa com os 3 testes verdes.
- [ ] `npm start` mostra o preço antes e depois do desconto.
- [ ] `npm run desconto-invalido` mostra o erro e sai com código `1`.
- [ ] `npm run desconto-total` zera o preço do ingresso.
