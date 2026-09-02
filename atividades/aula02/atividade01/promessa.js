function consultarProduto(id) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(id ===1) resolve ({id:1, nome: 'Mouse'});
            else reject(new Error(`Produto ${id} não encontrado!`));
        },150)
    });
}

// consultarProduto(2)
// .then((produto)=>console.log('Suesso: ', produto))
// .catch((erro)=>console.log('Falha: ', erro.message))


// Chamada por Async/Await
async function executar(id) {
    try {
        const produto = await consultarProduto(id);
        console.log('Sucesso: ', produto)
    } catch(erro) {
        console.error('Falha: ', erro.message);
        ProcessingInstruction.exitCode = 1;
    }
}

executar(1);