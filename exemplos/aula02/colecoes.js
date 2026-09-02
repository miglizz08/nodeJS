const produtos = [
  { id: 1, nome: "Mouse", preco: 80, categoria: "Periféricos" },
  { id: 2, nome: "Monitor", preco: 900, categoria: "Vídeo" },
  { id: 3, nome: "Teclado", preco: 120, categoria: "Periféricos" },
];

const nomes = produtos.map(({ nome }) => nome);
console.log(nomes);

console.log("PRODUTOS QUE SÃO DA CATEGORIA: Périfericos");
const perifericos = produtos.filter(
  ({ categoria }) => categoria === "Periféricos",
);
console.log(perifericos);

const monitor = produtos.find(({ id }) => id === 2);
console.log(monitor);

const reajustados = produtos
  .filter(({ categoria }) => categoria === "Periféricos")
  .map((produto) => ({
    ...produto,
    preco: produto.preco * 1.4,
  }));


  console.log({produtos, reajustados});