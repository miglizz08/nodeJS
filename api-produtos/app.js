const arquivoDeConfiguracao = process.argv[2];
const idInformado = process.argv[3];
let configuracaoCarregada = true;

if (arquivoDeConfiguracao) {
    try {
        process.loadEnvFile(arquivoDeConfiguracao);
    } catch {
        console.error(`Arquivo de configuração não encontrado: ${arquivoDeConfiguracao}`);
        process.exitCode = 1;
        configuracaoCarregada = false
    }
}

const obrigatorias = ['PORT','NOME_ALUNO','TURMA'];
const ausentes = obrigatorias.filter(
    (nome)=>!process.env[nome]?.trim()
);

if (configuracaoCarregada && ausentes.length) {
    console.error(`Configure no .env: ${ausentes.join(',')}`);
    process.exitCode = 1;
} else if (configuracaoCarregada) {
    console.table({
        estudante:process.env.NOME_ALUNO,
        turma:process.env.TURMA,
        projeto: 'api-produtos',
        ambiente: process.env.NODE_ENV || 'development',
        node: process.version,
        sistema: `${process.platform} ${process.arch}`,
        diretorio: process.cwd(),
        portaConfigurada: process.env.PORT
    });
    console.log('Ambiente configurado com sucesso!');
}

const produtos =[
    {id:1, nome:'Mouse', preco: 80, estoque: 10, categoria:'Periféricos'},
    {id:2, nome:'Monitor', preco: 900, estoque: 3, categoria:'Vídeo'},
    {id:3, nome:'Teclado', preco: 120, estoque: 8,  categoria:'Periféricos'}
];

const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function buscarProdutoPorId(id) {
    await esperar (100);
    if(!Number.isInteger(id)) {
        throw new Error('Identificador inteiro exigido');
    }
    const produto = produtos.find((item)=>item.id === id);
    if (!produto) {
        throw new Error(`Produto ${id} não encontrado`);
    }
    return {...produto};

}

async function listarCategorias() {
    await esperar(100);
    const categorias = produtos.map(
        ({categoria})=> categoria
    );
    return [...new Set(categorias)];
}

async function executar() {
    if (!configuracaoCarregada) return;
    try {
        const id = Number(idInformado ?? 1);
        const [produto, categorias] = await Promise.all([
            buscarProdutoPorId(id), listarCategorias()
        ]);
        console.log('Produto: ', produto);
        console.log('valor em estoque: ', produto.preco * produto.estoque);
        console.log('Categorias', categorias);
    } catch (erro) {
        console.error(erro.message);
        process.exitCode = 1;
    }
}

executar();