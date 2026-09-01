const [, ,nome, turma] = process.argv;
// const nome = process.argv[2];

if (!nome || !turma) {
    console.error('Use: node argumentos.js <nome> <turma>');
    process.exitCode=1;
} else {
    console.log({nome, turma});
}