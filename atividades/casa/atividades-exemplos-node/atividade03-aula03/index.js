import { formatarMoeda } from './formatarMoeda.js';
import Ingresso from './Ingresso.js';

const percentualDesconto = Number(process.argv[2] || '10');

try {
  const ingresso = new Ingresso({ codigo: 'ING-001', tipo: 'Pista', preco: 250 });
  console.log(`Ingresso ${ingresso.codigo} (${ingresso.tipo}): ${formatarMoeda(ingresso.preco)}`);

  ingresso.aplicarDesconto(percentualDesconto);
  console.log(`Após desconto de ${percentualDesconto}%: ${formatarMoeda(ingresso.preco)}`);
} catch (erro) {
  console.error(erro.message);
  process.exitCode = 1;
}
