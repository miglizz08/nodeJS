# Atividade 05 - Catálogo de Filmes

## Objetivo

Praticar busca em array com comparação de strings, filtragem de dados e cálculo de uma média — reforçando a mesma sintaxe de funções, arrays e `if/else` já usada nas atividades anteriores.

## Contexto

Você tem uma pequena lista de filmes (`id`, `titulo`, `genero`, `nota`) guardada em `index.js`. O programa precisa buscar um filme pelo título, listar os filmes de um gênero específico e calcular a nota média geral do catálogo.

## Conceitos praticados

- Funções, parâmetros e retorno
- Arrays e objetos
- Métodos de array (o mesmo espírito de `find` e `filter` já usados antes)
- `if / else`
- `process.argv`

## Tempo estimado

- Tempo estimado: 20 minutos
- Nível: 🟡 Básico

## Enunciado

Três funções em `index.js` estão incompletas. A função `main` já está pronta e mostra o resultado de cada uma no terminal.

## Requisitos

1. Buscar um filme pelo título informado, **sem diferenciar maiúsculas de minúsculas** (ex: buscar `"matrix"` deve encontrar o filme `"Matrix"`).
2. Se o filme não existir, o programa deve avisar isso pelo terminal e encerrar com um código de saída diferente de zero (isso já está pronto em `main` — você só precisa fazer a busca retornar `undefined` quando não encontrar).
3. Listar apenas os filmes de um gênero específico, sem alterar a lista original.
4. Calcular a nota média de todos os filmes do catálogo.

## Como executar

```cmd
npm ci
npm run check
npm test
npm start
npm run filme-ausente
```

## Resultado esperado

Com tudo implementado, `npm start` (que busca `"Matrix"`) deve produzir algo como:

```text
Filme encontrado: { id: 3, titulo: 'Matrix', genero: 'ficção científica', nota: 8.8 }
Filmes de ficção científica: [
  {
    id: 1,
    titulo: 'Interestelar',
    genero: 'ficção científica',
    nota: 9
  },
  { id: 3, titulo: 'Matrix', genero: 'ficção científica', nota: 8.8 },
  {
    id: 5,
    titulo: 'Vingadores: Ultimato',
    genero: 'ficção científica',
    nota: 8.9
  }
]
Nota média geral: 8.94
```

`npm run filme-ausente` (busca `"Titanic"`, que não está no catálogo) deve terminar assim:

```text
Filme "Titanic" não encontrado.
```

(e o processo deve terminar com código de saída `1`)

## Dicas

> Dica 1: para comparar títulos ignorando maiúsculas/minúsculas, pense em como deixar as duas strings no mesmo "padrão" antes de compará-las.

> Dica 2: para a nota média, pense em como somar todas as notas antes de dividir pelo total de filmes.

## Critérios de conclusão

- [ ] `buscarFilmePorTitulo` encontra o filme independente de maiúsculas/minúsculas;
- [ ] `buscarFilmePorTitulo` retorna `undefined` quando o filme não existe;
- [ ] `listarFilmesPorGenero` retorna somente os filmes do gênero pedido, sem alterar a lista original;
- [ ] `calcularNotaMedia` calcula a média corretamente;
- [ ] `npm test` passa sem falhas;
- [ ] `npm run check` passa sem falhas.
