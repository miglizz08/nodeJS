const diagnostico = {
  node: process.version,
  diretorioAtual: process.cwd(),
  platform:process.platform
};

if (!diagnostico.platform || !diagnostico.diretorioAtual) {
  console.error('PENDENTE: complete o diagnóstico do ambiente.');
  process.exitCode = 1;
} else {
  console.table(diagnostico);
}
