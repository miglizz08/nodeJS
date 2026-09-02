'use strict';

const pecas = require('./dados/pecas');
const {
  adicionarPeca,
  reajustarPrecos,
  calcularValorTotalPorCategoria,
} = require('./src/estoque');

function main() {
  const modoErro = process.argv.includes('--erro');

  console.log('--- Estoque inicial ---');
  console.log(pecas);

  if (modoErro) {
    // Cenário de erro proposital: peça com preço inválido (negativo).
    const pecaInvalida = {
      nome: 'Correia dentada',
      codigo: 'CD-099',
      categoria: 'motor',
      preco: -50,
      quantidade: 3,
    };

    try {
      adicionarPeca(pecas, pecaInvalida);
    } catch (erro) {
      console.error(`Erro: ${erro.message}`);
      process.exitCode = 1;
    }
    return;
  }

  const novaPeca = {
    nome: 'Correia dentada',
    codigo: 'CD-099',
    categoria: 'motor',
    preco: 65.0,
    quantidade: 15,
  };

  const estoqueAtualizado = adicionarPeca(pecas, novaPeca);
  console.log('\n--- Após cadastro de nova peça ---');
  console.log(estoqueAtualizado);

  const estoqueReajustado = reajustarPrecos(estoqueAtualizado, 'freios', 10);
  console.log('\n--- Após reajuste de +10% na categoria "freios" ---');
  console.log(estoqueReajustado);

  const totalPorCategoria = calcularValorTotalPorCategoria(estoqueReajustado);
  console.log('\n--- Valor total em estoque por categoria ---');
  console.log(totalPorCategoria);

  console.log('\nProcessamento concluído com sucesso.');
}

main();
