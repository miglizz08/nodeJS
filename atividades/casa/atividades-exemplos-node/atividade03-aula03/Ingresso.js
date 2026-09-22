export default class Ingresso {
  constructor({ codigo, tipo, preco }) {
    // TODO: valide os dados recebidos e defina as propriedades da instância.
    //
    // Regras de validação (lance TypeError com a mensagem exata indicada):
    // - codigo: precisa ser uma string não vazia -> 'Código inválido.'
    // - tipo: precisa ser uma string não vazia -> 'Tipo inválido.'
    // - preco: precisa ser um número finito maior que zero -> 'Preço inválido.'
    //
    // Depois de validar, defina em "this": codigo, tipo e preco.
  }

  aplicarDesconto(percentual) {
    // TODO: valide "percentual" e reduza o preço do ingresso.
    //
    // Regra de validação (lance RangeError com a mensagem exata indicada):
    // - percentual precisa ser um número maior que 0 e menor ou igual a 100
    //   -> 'Percentual de desconto inválido.'
    //
    // Depois de validado, reduza "this.preco" no percentual informado.
    // Exemplo: preco 250 com 10% de desconto deve virar 225.
  }
}
