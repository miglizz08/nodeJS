# CatÃ¡logo local de produtos â€” Aula 04

Projeto cumulativo das aulas 01 a 04. Nesta etapa, o catÃ¡logo deixa de existir apenas em memÃ³ria e passa a ser carregado e salvo em `data/produtos.json`.

## O que este projeto pratica

- configuraÃ§Ã£o com variÃ¡veis de ambiente;
- mÃ³dulos ES e classe `Produto` com validaÃ§Ãµes;
- operaÃ§Ãµes assÃ­ncronas com `async`/`await`;
- serializaÃ§Ã£o e desserializaÃ§Ã£o JSON;
- leitura de arquivo em UTF-8;
- gravaÃ§Ã£o segura com arquivo temporÃ¡rio e `rename`.

O JSON Ã© adequado para este laboratÃ³rio local. Ele nÃ£o substitui um banco de dados quando hÃ¡ mÃºltiplos processos, grande volume de dados, consultas complexas ou necessidade de transaÃ§Ãµes.

## Requisitos e preparaÃ§Ã£o

- Node.js 24;
- terminal aberto nesta pasta.

```cmd
npm ci
npm run check
```

O projeto nÃ£o possui bibliotecas externas, mas `npm ci` confirma que o `package-lock.json` reproduz a instalaÃ§Ã£o.

## Comandos

```cmd
npm start
npm run buscar
npm run categorias
npm run diagnostico
```

TambÃ©m Ã© possÃ­vel informar os argumentos diretamente:

```cmd
node app.js .env buscar 1
node app.js .env criar "Mouse ergonÃ´mico" 149.90 8 PerifÃ©ricos
```

Ao criar um produto, o programa lÃª o catÃ¡logo, valida os dados com a classe `Produto`, grava um arquivo temporÃ¡rio no mesmo diretÃ³rio e o renomeia para `produtos.json`.

## Caminhos de falha observÃ¡veis

```cmd
npm run produto-ausente
npm run id-invalido
node app.js .env criar "Produto sem preÃ§o"
```

- arquivo ausente: a leitura devolve uma lista vazia;
- JSON invÃ¡lido: a execuÃ§Ã£o falha e o arquivo original Ã© preservado;
- produto ausente ou argumento invÃ¡lido: a execuÃ§Ã£o termina com cÃ³digo diferente de zero;
- falha durante a gravaÃ§Ã£o: o temporÃ¡rio Ã© removido quando possÃ­vel.

Somente o erro `ENOENT` Ã© tratado como catÃ¡logo vazio. Erros de permissÃ£o, leitura ou sintaxe JSON nÃ£o sÃ£o escondidos.

## Estrutura principal

```text
api-produtos/
â”œâ”€â”€ app.js
â”œâ”€â”€ catalogo/catalogoArquivo.js
â”œâ”€â”€ config/ambiente.js
â”œâ”€â”€ data/produtos.json
â”œâ”€â”€ models/Produto.js
â”œâ”€â”€ storage/arquivoJson.js
â”œâ”€â”€ utils/formatarMoeda.js
â””â”€â”€ scripts/check.js
```

O caminho do catÃ¡logo usado pelos alunos Ã© sempre `data/produtos.json`. A variÃ¡vel `CATALOGO_ARQUIVO` existe somente para a validaÃ§Ã£o automatizada trabalhar em uma cÃ³pia temporÃ¡ria, sem alterar o arquivo didÃ¡tico.

