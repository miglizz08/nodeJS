const produto = {
    id:1,
    nome: 'Teclado',
    preco: 249.9,
    disponivel: true
}
console.log(typeof produto);
console.log(produto);

const texto = JSON.stringify(produto, null, 2);
console.log(typeof texto);
console.log(texto);

const recostruido = JSON.parse(texto);
console.log(recostruido);
console.log(typeof recostruido);