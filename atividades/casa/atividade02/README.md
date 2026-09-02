# Atividade 02 - Estoque de Peças da Oficina

## Objetivo e contexto

```text
Tempo estimado: 25-40 minutos
Nível: 🟡 Básico+
Conceitos: objetos, arrays, destructuring, spread/rest, validação de dados, transformação de dados (map/filter/reduce)
```

Você foi contratado para desenvolver uma pequena parte do sistema interno de uma oficina mecânica: o controle de estoque de peças. O estoque é representado como um array de objetos, e você precisa implementar as operações básicas que o sistema vai precisar no dia a dia: cadastrar peças novas, reajustar preços por categoria e calcular o valor total parado em estoque.

---

## Situação-problema
A oficina guarda cada peça como um objeto com `nome`, `codigo`, `categoria`, `preco` e `quantidade`. Até agora, ninguém escreveu nenhuma lógica de verdade — o estoque inicial já existe (em `dados/pecas.js`), mas as funções que deveriam operar sobre ele estão todas incompletas.

O gerente pediu três coisas, nessa ordem de prioridade:

1. Poder cadastrar peças novas sem correr o risco de duplicar um código já existente ou salvar dados incompletos.
2. Poder reajustar o preço de todas as peças de uma categoria de uma vez (por exemplo, quando o fornecedor de peças de freio aumenta os preços).
3. Poder ver, rapidamente, quanto dinheiro está parado em estoque, separado por categoria.

Importante: o estoque antigo (o array original) **nunca pode ser alterado diretamente** por nenhuma dessas operações — cada função deve devolver uma nova versão dos dados, deixando a original intacta. Isso é proposital: em várias partes do sistema real, o mesmo array de estoque é reaproveitado em outros lugares, e alterá-lo por engano quebraria outras telas.

---

## Enunciado

Implemente, em `src/estoque.js`, as quatro funções abaixo (os cabeçalhos e a documentação já estão no arquivo):

- `validarPeca(peca)`
- `adicionarPeca(estoque, novaPeca)`
- `reajustarPrecos(estoque, categoria, percentual)`
- `calcularValorTotalPorCategoria(estoque)`

Não altere as assinaturas das funções nem o arquivo `dados/pecas.js`. Não é necessário usar `fs`, arquivos JSON ou `async/await` nesta atividade — todo o trabalho acontece em memória, sobre arrays e objetos.

---

## Tarefas

1. Implemente `validarPeca`, seguindo exatamente as regras descritas no comentário da função.
2. Implemente `adicionarPeca`, usando `validarPeca` internamente e tratando os dois cenários de erro (peça inválida e código duplicado).
3. Implemente `reajustarPrecos`, garantindo que apenas a categoria informada seja afetada.
4. Implemente `calcularValorTotalPorCategoria`, agrupando os valores corretamente.
5. Rode `npm test` e ajuste sua implementação até todos os testes passarem.
6. Rode `npm start` e `npm run exemplo-erro` e confira se a saída bate com o que está descrito abaixo.

---

## Regras

- Nenhuma função pode modificar o array `estoque` recebido como parâmetro, nem os objetos de peça dentro dele (imutabilidade).
- `preco` deve ser um número maior que zero; qualquer outro valor torna a peça inválida.
- `quantidade` deve ser um número inteiro maior ou igual a zero; qualquer outro valor torna a peça inválida.
- `nome`, `codigo` e `categoria` são obrigatórios e não podem ser strings vazias.
- Ao tentar adicionar uma peça inválida, a mensagem de erro deve ser exatamente: `Peça inválida.`
- Ao tentar adicionar uma peça com código já existente, a mensagem de erro deve ser exatamente: `Já existe uma peça cadastrada com este código.`

---

## Arquivos iniciais

```text
index.js
Script principal que usa suas funções para demonstrar o fluxo completo
(cadastro, reajuste e cálculo de totais). Já está pronto — não precisa mexer.

dados/pecas.js
Array com o estoque inicial da oficina. Não precisa (e não deve) ser alterado.

src/estoque.js
Onde você deve implementar as quatro funções pedidas.

test/index.test.cjs
Testes automatizados que validam seu código.
```

---

## Comandos

```cmd
npm install
npm run check
npm test
npm start
npm run exemplo-erro
```

Os scripts já estão configurados e devem funcionar sem nenhuma dependência externa.

---

## Saída esperada

Ao rodar `npm start` com a implementação correta, você deve ver algo como:

```text
--- Estoque inicial ---
[ ... 5 peças ... ]

--- Após cadastro de nova peça ---
[ ... 6 peças, incluindo "Correia dentada" ... ]

--- Após reajuste de +10% na categoria "freios" ---
[ ... peças de freios com preço maior, demais categorias iguais ... ]

--- Valor total em estoque por categoria ---
{ filtros: ..., freios: ..., ignicao: ..., motor: ... }

Processamento concluído com sucesso.
```

Ao rodar `npm run exemplo-erro`, o programa tenta cadastrar uma peça com preço negativo e deve encerrar assim:

```text
Erro: Peça inválida.
```

(e o processo deve terminar com código de saída diferente de zero)

---

## Critérios de conclusão

- [ ] `validarPeca` rejeita corretamente peças com campos ausentes, preço inválido ou quantidade inválida.
- [ ] `adicionarPeca` nunca modifica o array original.
- [ ] `adicionarPeca` lança os dois erros esperados, com as mensagens exatas.
- [ ] `reajustarPrecos` altera apenas a categoria informada, sem modificar o estoque original.
- [ ] `calcularValorTotalPorCategoria` retorna os totais corretos por categoria.
- [ ] `npm test` passa sem falhas.
- [ ] `npm start` e `npm run exemplo-erro` produzem a saída descrita acima.

---

## Dicas

> Dica 1: pense em `adicionarPeca` como duas verificações separadas antes de qualquer coisa — primeiro "essa peça é válida?", depois "esse código já existe?". Só depois disso você monta o novo array.

> Dica 2: para não alterar o array original, pense em como criar uma cópia dele já incluindo (ou já transformando) os elementos que você precisa, em vez de alterar o array recebido.

> Dica 3: em `calcularValorTotalPorCategoria`, pense no resultado final primeiro (um objeto com uma chave por categoria) e depois em como ir "acumulando" esse objeto conforme percorre o estoque.

---

## Desafio extra

Depois de concluir a atividade, tente adicionar uma quinta função a `src/estoque.js`:

- `listarPecasComEstoqueBaixo(estoque, limite)` — deve retornar um novo array apenas com as peças cuja `quantidade` seja menor que `limite`, ordenado da menor para a maior quantidade.

Esse desafio é opcional e não é exigido pelos testes atuais — mas, se quiser um teste extra, escreva o seu próprio em `test/index.test.cjs` antes de implementar a função.
