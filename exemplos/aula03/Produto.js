export default class Produto{
    constructor({id, nome, preco, estoque =0}) {
        if (!Number.isInteger(id) || id <= 0) {
            throw new TypeError('ID deve ser um inteiro positivo')
        }
        if(typeof nome !== 'string' || nome.trim() === '') {
            throw new TypeError('Nome é obrigatorio');
        }
        if(!Number.isFinite(preco) || preco < 0){
            throw new TypeError('Preço inválido');
        }
        if(!Number.isInteger(estoque) || estoque < 0){
            throw new TypeError('Estoque inválido');
        }
        Object.assign(this, {
            id, nome: nome.trim(), preco, estoque
        });
    }
    retirar(quantidade) {
        if(!Number.isInteger(quantidade) || quantidade <= 0) {
            throw new RangeError('Quantidade de saida inválida.');
        }
        if(quantidade > this.estoque) {
            throw new RangeError('Estoque insuficiente');
        }
        this.estoque -=quantidade;
    }
}