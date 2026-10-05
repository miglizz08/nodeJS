import { read } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

async function lerTarefas(caminho) {
  try{
    const texto = await readFile(caminho, 'utf8');
    const dados = JSON.parse(texto);
    if(!Array.isArray(dados)) 
      throw new TypeError('Arquivo de tarefas inválido');
      return dados;
  }catch (erro){
    if(erro.code === 'ENOENT') return [];
    throw erro;
  }
  
  // TODO: leia o arquivo em "caminho" (utf8) e converta o texto para um
  // array de objetos usando JSON.parse.
  //
  // Regras:
  // - se o conteúdo lido não for um array, lance um TypeError com a
  //   mensagem exata 'Arquivo de tarefas inválido.';
  // - se o arquivo não existir (o erro capturado tem "code" igual a
  //   'ENOENT'), devolva um array vazio [] em vez de lançar o erro;
  // - qualquer outro erro deve ser relançado (throw erro).
}

function concluirTarefa(tarefas, id) {
  if(!tarefas.some(t => t.id === id)) {
    throw new Error(`Tarefa ${id} não encontrada.`);
  }
  return tarefas.map(t => {
    if (t.id === id) return{...t, concluida: true};
    return {...t};
  });
  // TODO: devolva um NOVO array de tarefas (não altere o array recebido),
  // igual ao original, exceto pela tarefa cujo "id" seja igual ao
  // parâmetro "id", que deve ficar com "concluida" igual a true.
  //
  // Se nenhuma tarefa tiver esse "id", lance um Error com a mensagem
  // exata: `Tarefa ${id} não encontrada.`
}

async function salvarTarefas(caminho, tarefas) {
  const texto = JSON.stringify(tarefas, null, 2);
  await writeFile(caminho, texto, 'utf-8');
  // TODO: converta "tarefas" para texto JSON, com indentação de 2 espaços,
  // e escreva esse texto no arquivo indicado por "caminho" (utf8).
}

async function main() {
  const arquivoAusente = process.argv.includes('--arquivo-ausente');
  const id = Number(process.argv[2] || '1');

  const nomeArquivo = arquivoAusente ? 'nao-existe.json' : 'tarefas.json';
  const caminhoLeitura = resolve(import.meta.dirname, 'data', nomeArquivo);
  const caminhoEscrita = resolve(import.meta.dirname, 'data', 'saida.json');

  try {
    const tarefas = await lerTarefas(caminhoLeitura);
    const atualizadas = concluirTarefa(tarefas, id);
    await salvarTarefas(caminhoEscrita, atualizadas);
    console.log(`Tarefa ${id} marcada como concluída.`);
    console.log('Tarefas salvas:', atualizadas);
  } catch (erro) {
    console.error(erro.message);
    process.exitCode = 1;
  }
}

main();
