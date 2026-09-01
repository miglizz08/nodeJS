const diagnostico = {
  node: process.version,
  diretorioAtual: process.cwd(),
  plataforma:process.platform
};

if (!diagnostico.plataforma || !diagnostico.diretorioAtual) {
  console.error('PENDENTE: complete o diagnóstico do ambiente.');
  process.exitCode = 1;
} else {
  console.table(diagnostico);
}
