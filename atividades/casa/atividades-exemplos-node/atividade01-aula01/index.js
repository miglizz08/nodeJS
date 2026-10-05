function montarDiagnostico() {
  return{
    node:process.version,
    plataforma:process.platform,
    diretorio:process.cwd()
  };
}

function validarInscricao(nome, turma) {
  if(typeof nome !== 'string' || nome.trim() === ''){
    return false;
  }
  if(typeof turma !== 'string' || turma.trim() === ''){
    return false;
  } 
  return true;
    // TODO: retorne true somente se "nome" e "turma" forem strings e,
    // depois de remover espaços das pontas (trim), não ficarem vazias.
    // Caso contrário, retorne false.
}

function main() {
  const nome = process.argv[2];
  const turma = process.argv[3];

  if (!validarInscricao(nome, turma)) {
    console.error('PENDENTE: informe nome e turma para continuar.');
    process.exitCode = 1;
    return;
  }

  const diagnostico = montarDiagnostico();
  console.log(`Bem-vindo(a), ${nome}! Turma: ${turma}`);
  console.log('Diagnóstico do ambiente:', diagnostico);
}

main();
