const nomeInformado = process.argv[2];
const turmaInformada = process.argv[3];

const executar = (...args) => spawnSync(process.execPath, ['index.js', ...args], { cwd: diretorio, encoding: 'utf8' });
test('confirma nome e turma recebidos', () => { const r = executar('Lucas', '3DS-C'); assert.equal(r.status, 0, r.stderr); assert.equal(r.stdout.trim(), 'Inscrição: Lucas — 3DS-C'); });
test('recusa inscrição incompleta', () => { const r = executar('Lucas'); assert.equal(r.status, 1); assert.match(r.stderr, /Informe nome e turma\./); });

if (nomeInformado && turmaInformada>0) {
    console.log('Entrada recebida:', {nomeInformado, turmaInformada});
    process.exitcode = 1;

} else{
    console.error('PENDENTE: valide nome e turma antes de confirmar a inscrição')
};
