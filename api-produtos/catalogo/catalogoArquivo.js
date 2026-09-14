import Produto from "../models/Produto.js";
import { gravaJson, lerJson } from "../storage/arquivo.Json.js";

export function criarCatalogoArquivo(caminho){
    async function listar() {
        const dados = await lerJson(caminho);
        return dados.map((produto)=> new Produto(produto));
    }
    async function buscarPorId(id) {
        const produto = (await listar()).find((item) => item.id === id);
        if (!produto) throw new Error(`Produto ${id} não encontrado.`);
        return produto;
    }
}