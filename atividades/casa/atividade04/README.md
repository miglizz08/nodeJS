# Atividade 04 - Turma de Alunos do Laboratório

## Objetivo

Praticar a escrita de várias funções pequenas que operam sobre um mesmo array de objetos: buscar um item, calcular um valor agregado, filtrar e projetar dados, e validar um objeto com condicionais.

## Conceitos

- Funções, parâmetros e retorno
- Arrays e objetos
- Métodos de array (o mesmo espírito de `find`, `filter` e `map` já usados na aula 02)
- `if / else` e operadores de comparação
- `process.argv`

## Tempo estimado

- Tempo estimado: 20 minutos
- Nível: 🟡 Básico

## Enunciado

Você tem um array fixo de alunos (`id`, `nome`, `turma`, `nota`) em `index.js`. Quatro funções pequenas estão incompletas — cada uma pratica uma habilidade diferente sobre esse mesmo array. O fluxo principal (função `main`) já está pronto e mostra o resultado de cada uma no terminal.

## Tarefas

1. `encontrarAluno(alunos, id)` — percorra o array e retorne o aluno com o `id` informado (o mesmo tipo de busca usada para encontrar um item específico em uma lista). Se não existir, retorne `undefined`.
2. `calcularMediaTurma(alunos, turma)` — selecione apenas os alunos da turma informada e calcule a média das notas deles.
3. `gerarListaAprovados(alunos)` — selecione os alunos com nota maior ou igual a 6, e devolva um novo array em que cada item tenha somente `id` e `nome` (assim como foi feito na atividade da biblioteca, filtrando e depois projetando os dados).
4. `validarAluno(aluno)` — use `if / else` (ou operadores lógicos) para verificar se `nome` é uma string não vazia e se `nota` é um número entre 0 e 10.

## Como executar

```cmd
npm ci
npm run check
npm test
npm start
npm run aluno-ausente
```

## Saída esperada

Com tudo implementado, `npm start` (que busca o id `2`) deve produzir algo como:

```text
Aluno encontrado: { id: 2, nome: 'Julia', turma: '3DS-C', nota: 5.2 }
Média da turma 3DS-C: 6.166666666666667
Aprovados: [
  { id: 1, nome: 'Marcos' },
  { id: 3, nome: 'Renata' },
  { id: 5, nome: 'Aline' }
]
alunoValido é válido? true
alunoInvalido é válido? false
```

`npm run aluno-ausente` (busca o id `999`, que não existe) deve terminar assim:

```text
Aluno com id 999 não encontrado.
```

(e o processo deve terminar com código de saída `1`)

## Dicas

> Dica 1: para `encontrarAluno`, pense em como percorrer o array até achar o item cujo `id` bate com o que você procura.

> Dica 2: `gerarListaAprovados` é basicamente dois passos: primeiro decidir quem fica (nota >= 6), depois decidir o formato de cada item que sobra (só `id` e `nome`).

> Dica 3: em `validarAluno`, pense nas duas condições separadamente antes de juntar tudo em um único `if`.

## Critérios de conclusão

- [ ] `encontrarAluno` retorna o aluno correto ou `undefined` quando o id não existe;
- [ ] `calcularMediaTurma` calcula a média apenas dos alunos da turma pedida;
- [ ] `gerarListaAprovados` retorna somente alunos com nota >= 6, cada um com apenas `id` e `nome`;
- [ ] `validarAluno` retorna `true`/`false` corretamente para os dois casos de teste;
- [ ] `npm test` passa sem falhas;
- [ ] `npm run check` passa sem falhas.
