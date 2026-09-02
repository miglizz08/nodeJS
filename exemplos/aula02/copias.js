const original={
    id: 1,
    nome: 'Mouse',
    estoque:5
};

const atualizado = {...original, estoque:8};

console.log({original, atualizado});

const {nome, estoque} = atualizado;
console.log(`${nome} posui ${estoque} unidade(s)`);