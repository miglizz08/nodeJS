# Atividade 03 - Interceptar uma requisição com next

## Enunciado
Crie um middleware simples que marque a resposta e libere a cadeia.

## Tarefas

1. Crie um interceptador que acrescente o cabeçalho solicitado à resposta.
2. Libere a continuação do fluxo para que a rota de saúde ainda seja executada.
3. Monte o interceptador antes das rotas e confirme cabeçalho e corpo.






## Saída esperada

Considere a atividade concluída quando o programa atender exatamente aos contratos observáveis abaixo. Nomes de propriedades, mensagens, códigos HTTP e valores são literais.

**Cenários cobrados:**

- middleware marca resposta e libera a rota.

**Comportamento esperado em linguagem direta:**

- A API deve responder com **HTTP 200 OK**.
- O cabeçalho HTTP `x-aula` deve ser exatamente `'07'`.
- O corpo JSON da resposta deve ser exatamente `{status:'ok'}`.

## Estado inicial e resultado esperado

Enquanto o `TODO` estiver pendente, a verificação correspondente deve falhar. Depois da implementação:

- Middleware marca resposta e libera a rota.

## Comandos

```cmd
npm ci
npm run check
npm test
npm start
```

O teste acessa `GET /api/saude` e verifica simultaneamente o JSON da rota e o cabeçalho criado pelo interceptador.





