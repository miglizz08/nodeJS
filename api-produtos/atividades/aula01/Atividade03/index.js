const nomeInformado = process.argv[2];
const turmaInformada = process.argv[3];

if (nomeInformado && turmaInformada) {
    console.log('Entrada recebida:', {nomeInformado, turmaInformada});

} else{
    console.error('PENDENTE: valide nome e turma antes de confirmar a inscrição');
        process.exitcode = 1;
};
