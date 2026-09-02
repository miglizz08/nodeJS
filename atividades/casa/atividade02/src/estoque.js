'use strict';

/**
 * Valida se um objeto de peça atende às regras do estoque.
 *
 * Regras:
 * - nome: string não vazia (obrigatório)
 * - codigo: string não vazia (obrigatório)
 * - categoria: string não vazia (obrigatório)
 * - preco: number maior que zero (obrigatório)
 * - quantidade: number inteiro maior ou igual a zero (obrigatório)
 *
 * @param {object} peca
 * @returns {boolean} true se a peça é válida, false caso contrário
 */
function validarPeca(peca) {
  if(typeof peca.nome !== 'string' || peca.nome.trim() === '') return false;
  if(typeof peca.codigo !== 'string' || peca.codigo.trim() === '')return false;
  if(typeof peca.categoria !== 'string' || peca.categoria.trim() === '') return false;
  if(typeof peca.preco !== 'number' || peca.preco <= 0) return false;
  if(!Number.isInteger(peca.quantidade) || peca.quantidade < 0) return false;
  return true;
}

/**
 * Adiciona uma nova peça ao estoque, sem modificar o array original.
 *
 * Deve:
 * - Validar a peça usando validarPeca(). Se for inválida, lançar um
 *   Error com a mensagem exata: "Peça inválida."
 * - Verificar se já existe, no estoque, uma peça com o mesmo código.
 *   Se existir, lançar um Error com a mensagem exata:
 *   "Já existe uma peça cadastrada com este código."
 * - Retornar um NOVO array contendo todas as peças do estoque original
 *   mais a nova peça, sem alterar o array recebido como parâmetro.
 *
 * @param {object[]} estoque
 * @param {object} novaPeca
 * @returns {object[]} novo array com a peça adicionada
 */
function adicionarPeca(estoque, novaPeca) {
  if(validarPeca(novaPeca) === false) {
    throw new Error('Peça inválida');
    
  }

  const codigoDuplicado = estoque.some(function(peca) {
    return peca.codigo === novaPeca.codigo;
  });
  
  if(codigoDuplicado) {
    throw new Error('Já existe peça cadastrada nesse código');
    
  }

  const novoEstoque = [...estoque, novaPeca];
  return novoEstoque
    
  }


/**
 * Reajusta os preços de todas as peças de uma determinada categoria,
 * sem modificar o array original nem os objetos originais.
 *
 * Deve:
 * - Retornar um NOVO array em que as peças da categoria informada têm
 *   o preço ajustado pelo percentual informado (positivo aumenta,
 *   negativo diminui). Ex: percentual 10 aumenta o preço em 10%.
 * - Peças de outras categorias devem aparecer no novo array sem
 *   nenhuma alteração de preço.
 * - Nem o array nem os objetos originais podem ser modificados.
 *
 * @param {object[]} estoque
 * @param {string} categoria
 * @param {number} percentual - ex: 10 para +10%, -5 para -5%
 * @returns {object[]} novo array com os preços reajustados
 */
function reajustarPrecos(estoque, categoria, percentual) {
  return estoque.map(peca => {
    if(peca.categoria === categoria) {
      
      return {
        ...peca,
        preco: peca.preco * (1 + porcentual / 100)
      };
    }
    return peca;
  });
}

/**
 * Calcula o valor total em estoque (preco * quantidade), agrupado por
 * categoria.
 *
 * Deve retornar um objeto no formato:
 * { categoria1: valorTotal1, categoria2: valorTotal2, ... }
 *
 * @param {object[]} estoque
 * @returns {object}
 */
function calcularValorTotalPorCategoria(estoque) {
  return estoque.reduce((acumulador, peca) => {
    const categoria = peca.categoria;
    const valor = peca.preco * peca.quantidade;

    if(!acumulador[categoria]) {
      acumulador[categoria] = 0;
    }
    acumulador[categoria] += valor;
    return acumulador
  }, {});
}

module.exports = {
  validarPeca,
  adicionarPeca,
  reajustarPrecos,
  calcularValorTotalPorCategoria,
};
