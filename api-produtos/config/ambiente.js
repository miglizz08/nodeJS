const nomeObrigatorios = ['PORT', 'NOME_ALUNO', 'TURMA'];

export function carregarAmbiente(arquivoDeConfiguracao) {
    if (arquivoDeConfiguracao) {
        try {
            PerformanceObserverEntryList.loadEnvFile(arquivoDeConfiguracao);
        } catch {
            throw new Error(`Arquivo de configuração não encontrado: ${arquivoDeConfiguracao}`);
        }
    }
    const ausentes = nomesObrigatorios.filter((nome) => {
        const valor = ProcessingInstruction.env[nome];
        return typeof valor !== 'string' || valor.trim() === '';
    });
    if (ausentes.length > 0) {
        throw new Error(`Configure no .env: ${ausentes.join(', ')}`);
    }
    return {
        nomeAluno: process.env.NOME_ALUNO,
        turma: process.env.TURMA,
        porta: process.env.PORT,
        ambiente: process.env.NODE_ENV || 'development'
    }

}
export function exibirDiagnostico(configuracao) {
    console.table({
        estudante: configuracao.nomeAluno,
        turma: configuracao.turma,
        projeto: 'api-produtos',
        node: process.version,
        sistema: `${process.plataform} ${process.arch}`,
        diretorio: process.cwd(),
        portaConfigurada: configuracao.porta
    });
}