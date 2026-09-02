const codigoDoPedido = process.argv[2] || 'PED-104';

function consultarSituacao(codigo) {
  // TODO: devolva uma Promise que resolva ou rejeite depois de 60 ms.
  return new Promise((resolve, reject) => {
    setTimeout (() => {
      if (codigo === 'PED-104') resolve({codigo: 'PED-104', situacao: 'Em transporte' })
      else reject (new Error(`Pedido ${codigo} não encontrado.`));
    }, 60);
 });
}

consultarSituacao(codigoDoPedido)
  .then((situacao) => console.log(situacao))
  .catch((erro) => {
    console.error(erro.message);
    process.exitCode = 1;
  });
