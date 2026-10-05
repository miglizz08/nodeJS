# Atividade 01 - Criar o primeiro servidor Express

## Enunciado
Crie uma aplicação Express mínima com a rota `GET /api/saude`.

## Tarefas

1. Crie uma aplicação HTTP capaz de ser iniciada pelo servidor fornecido.
2. Disponibilize um recurso de verificação de saúde no caminho semântico apropriado.
3. Responda ao sucesso com status HTTP e documento JSON exatamente como descritos.






## Saída esperada

Considere a atividade concluída quando o programa atender exatamente aos contratos observáveis abaixo. Nomes de propriedades, mensagens, códigos HTTP e valores são literais.

**Cenários cobrados:**

- GET /api/saude responde 200 e JSON.

**Comportamento esperado em linguagem direta:**

- A API deve responder com **HTTP 200 OK**.
- O corpo JSON da resposta deve ser exatamente `{status:'ok'}`.

## Estado inicial e resultado esperado

Enquanto o `TODO` estiver pendente, a verificação correspondente deve falhar. Depois da implementação:

- GET /api/saude responde 200 e JSON.

## Comandos

```cmd
npm ci
npm run check
npm test
npm start
```

O servidor deve iniciar na porta indicada por `PORT` ou usar `3000`. O arquivo inicial permanece com TODO e os testes falham até a implementação.




