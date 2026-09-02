function consultarProduto(id) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (id === 1) resolve({ id: 1, nome: "Mouse" });
      else reject(new Error(`Produto ${id} não encontrado!`));
    }, 150),
  );
}

// Chamda por Promise
// consultarProduto(1).then((produto) => console.log("Suceso:", produto)).catch((erro)=>console.log('Falha: ', erro.message))


// Chamda por Async
async function executar(id) {
    try {
        const produto = await
        consultarProduto(id);
        console.log('Sucesso: ', produto)
    } catch(erro){
        console.eror('Falha: ', erro.message);
        process.exitCode = 1;
    }
}

executar(1);
