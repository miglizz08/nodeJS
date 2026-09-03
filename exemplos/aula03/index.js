import {formatarMoeda} from './formatarMoeda.js';
import Produto from './Produto.js';

// console.log(formatarMoeda(732.67));

const produto = new Produto({id: 1, nome: 'Mouse', preco: 89.9, estoque: 3});

// console.log(`${produto.nome}: ${formatarMoeda(produto.preco)}`);

produto.retirar(1);
produto.retirar(5);
// console.log(produto);