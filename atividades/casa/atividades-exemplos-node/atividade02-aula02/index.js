const produtosNoPedido = [
  { nome: 'Mouse', preco: 80, quantidade: 2 },
  { nome: 'Monitor', preco: 900, quantidade: 0 },
  { nome: 'Teclado', preco: 120, quantidade: 1 },
];

function calcularItensDoPedido(produtos) {
  return produtos
  .filter(produto => produto.quantidade > 0)
  .map(produto => {
    return {
      nome: produto.nome,
      subtotal: produto.preco * produto.quantidade
    }
  });

}


  // TODO: devolva um NOVO array contendo apenas os produtos com
  // quantidade maior que 0. Cada item do novo array deve ter somente
  // duas propriedades: "nome" e "subtotal" (subtotal = preco * quantidade).
  // Não altere o array "produtos" recebido.


function consultarStatusPedido(codigo) {

return new Promise((resolve, reject) => {
  setTimeout(() => {
    if(codigo === 'PED-01') resolve ({codigo, status: 'Em preparo'});
    else reject(new Error(`Pedido ${codigo} não encontrado.`));
  }, 80)
});
  // TODO: devolva uma Promise.
  //
  // Depois de 80 milissegundos (use setTimeout dentro da Promise):
  // - se "codigo" for igual a 'PED-01', resolva com { codigo, status: 'Em preparo' };
  // - qualquer outro código deve rejeitar com um Error cuja mensagem seja
  //   exatamente: `Pedido ${codigo} não encontrado.`
}

async function executar() {
  const itens = calcularItensDoPedido(produtosNoPedido);
  console.log('Itens do pedido:', itens);

  const codigo = process.argv[2] || 'PED-01';

  try {
    const status = await consultarStatusPedido(codigo);
    console.log('Status do pedido:', status);
  } catch (erro) {
    console.error(erro.message);
    process.exitCode = 1;
  }
}

executar();
