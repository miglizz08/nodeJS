import {readFile} from 'node:fs/promises';
import { resolve} from 'node:path';

const caminho = resolve(import.meta.dirname, 'data', 'produtos.json');

async function lerJson(caminho) {
    try{
        const texto = await readFile(caminho, 'utf8');
        const dados = JSON.parse(texto);
        if(!Array.isArray(dados)) throw new TypeError ('Deve conter um array')
        return dados;
    } catch (erro) {
        if(erro.code === 'ENOENT') return [];
        throw erro;
    }
}
const produtos = await lerJson(caminho);
console.log(produtos);
