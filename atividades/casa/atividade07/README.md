# Atividade 07 — Personagens de RPG

## 🎯 Objetivo

Praticar a criação de uma **classe** com validação no construtor (o mesmo
padrão do exemplo `Produto.js` da aula 03), combinando com validação
condicional e operadores já usados nas atividades anteriores (`if/else`,
comparações, `throw`). O foco não é aprender nada novo — é escrever, do zero,
a sintaxe de `class`, `constructor` e métodos de instância.

## 🧠 Conceitos praticados

- Classes, `constructor` e métodos de instância
- Validação de dados com `if / else` e `throw` (`TypeError` / `RangeError`)
- Operadores de comparação
- `process.argv`

## 🟢 Nível

🟡 Básico

## ⏱️ Tempo estimado

20–25 minutos

## 📖 Contexto

Você está montando a lógica básica de personagens para um pequeno jogo de
RPG. Cada personagem tem um nome, uma vida máxima, um nível — e uma vida
atual que muda conforme ele recebe dano ou é curado.

## 📋 Enunciado

O arquivo `index.js` contém a classe `Personagem` com o `constructor` e três
métodos incompletos: `receberDano`, `curar` e `estaDerrotado`. A função
`main` já está pronta e mostra o resultado de cada operação no terminal.

### O que você recebe?

Um objeto `{ nome, vidaMaxima, nivel }` passado para `new Personagem(...)`.

### O que precisa fazer?

- Validar os três dados recebidos no `constructor` e guardá-los na
  instância, junto com uma propriedade `vida` que começa igual a
  `vidaMaxima`.
- Implementar `receberDano(quantidade)`, que reduz a `vida` do personagem.
- Implementar `curar(quantidade)`, que aumenta a `vida` do personagem.
- Implementar `estaDerrotado()`, que informa se o personagem chegou a 0 de
  vida.

### O que precisa retornar?

- `receberDano` e `curar` não retornam nada — eles só alteram a `vida` da
  instância.
- `estaDerrotado()` retorna `true` ou `false`.

### O que acontece se algo estiver errado?

- Se `vidaMaxima` for inválida na criação (não for um número inteiro maior
  que zero), o `constructor` deve lançar um `TypeError`.
- Se a `quantidade` passada para `receberDano` ou `curar` for inválida (não
  for um número inteiro maior que zero), o método correspondente deve
  lançar um `RangeError`.
- As mensagens de erro exatas estão comentadas dentro de cada método no
  `index.js` — use exatamente essas mensagens.

## ✅ Requisitos

1. O `constructor` valida `nome`, `vidaMaxima` e `nivel`, e define `vida`
   igual a `vidaMaxima`.
2. `receberDano` valida a quantidade e nunca deixa a `vida` ficar negativa
   (o mínimo é `0`).
3. `curar` valida a quantidade e nunca deixa a `vida` ultrapassar
   `vidaMaxima`.
4. `estaDerrotado()` reflete corretamente o estado atual da `vida`.

## 💻 Como executar

```cmd
npm ci
npm run check
npm test
npm start
npm run vida-invalida
```

## 🧪 Testes

Rode `npm test`. São 3 testes: o fluxo principal (criação + dano),
a rejeição de uma vida máxima inválida, e um caso-limite (dano maior que a
vida restante, e cura além do máximo).

## 📤 Resultado esperado

```text
$ npm start
Guerreiro criado com 100/100 de vida.
Vida após receber 30 de dano: 70
Vida após receber 90 de dano: 0
Está derrotado? true
Vida após curar 1000: 100
Está derrotado agora? false

$ npm run vida-invalida
Erro: Vida máxima inválida.
```

(o comando `vida-invalida` termina com código de saída `1`.)

## 💡 Dicas

- `Math.max` e `Math.min` são bons aliados para "não deixar passar de um
  limite", mas você também pode resolver só com `if/else` — a escolha é
  sua.
- Pense no `constructor` como as validações que você já fez em outras
  atividades (tipo, string vazia, número inteiro), só que agora guardando
  o resultado em `this` em vez de retornar um objeto novo.

## 🏁 Critérios de conclusão

- [ ] `npm run check` passa sem erros.
- [ ] `npm test` passa com os 3 testes verdes.
- [ ] `npm start` mostra a sequência completa de vida do personagem.
- [ ] `npm run vida-invalida` mostra o erro e sai com código `1`.

---

## ✨ Desafio extra (opcional)

Implemente o método `atacar(alvo, quantidade)` (o esqueleto comentado já
está no `index.js`). Ele deve reaproveitar o `receberDano` do personagem
alvo — e, se quem está atacando já estiver derrotado, deve lançar um
`Error` em vez de aplicar o dano. Nenhum conceito novo é necessário: é o
mesmo `throw`, o mesmo `if`, e uma chamada de método em outra instância da
mesma classe.

---

## ✍️ Treino rápido de sintaxe

Sem solução — são só para aquecer a memória da sintaxe. 2 a 5 minutos cada.

1. Crie uma classe chamada `Contador`, cujo `constructor` recebe um valor
   inicial (número inteiro) e guarda em `this.valor`. Adicione um método
   `incrementar(quantidade)` que soma `quantidade` a `this.valor`.

2. Escreva uma função `verificarIdade(idade)` que lance um `RangeError`
   com a mensagem `'Idade inválida.'` quando `idade` for menor que `0`, e
   retorne `true` caso contrário.
