# Atividade 02 - Responder uma coleção em JSON

## Enunciado
Crie `GET /api/produtos` e devolva a coleção fornecida em formato JSON.

## Tarefas

1. Crie a aplicação e conecte uma operação de consulta à coleção em memória.
2. Devolva um envelope JSON de sucesso contendo os produtos existentes.
3. Mantenha o servidor testável pela função de criação já exportada.






## Saída esperada

Considere a atividade concluída quando o programa atender exatamente aos contratos observáveis abaixo. Nomes de propriedades, mensagens, códigos HTTP e valores são literais.

**Cenários cobrados:**

- GET /api/produtos devolve a coleção.

**Comportamento esperado em linguagem direta:**

- A API deve responder com **HTTP 200 OK**.
- O valor de `o corpo JSON da resposta.sucesso` deve ser exatamente `true`.
- O valor de `o corpo JSON da resposta.dados.length` deve ser exatamente `2`.
- O valor de `o corpo JSON da resposta.dados[0].nome` deve ser exatamente `'Teclado'`.

## Estado inicial e resultado esperado

Enquanto o `TODO` estiver pendente, a verificação correspondente deve falhar. Depois da implementação:

- GET /api/produtos devolve a coleção.

## Comandos

```cmd
npm ci
npm run check
npm test
npm start
```

A resposta deve ser JSON e preservar os dois produtos existentes.




