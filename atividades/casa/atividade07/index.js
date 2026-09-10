class Personagem {
  constructor({ nome, vidaMaxima, nivel }) {
    if (typeof nome !== 'string' || nome.trim() === '') {
      throw new TypeError('Nome inválido.');
    }
    if (!Number.isInteger(vidaMaxima) || vidaMaxima <= 0) {
      throw new TypeError('Vida máxima inválida.');
    }
    if (!Number.isInteger(nivel) || nivel <= 0) {
      throw new TypeError('Nível inválido.');
    }

    Object.assign(this, {
      nome: nome.trim(),
      vidaMaxima,
      nivel,
      vida: vidaMaxima
    });
    // TODO: valide os dados recebidos e defina as propriedades da instância.
    //
    // Regras de validação (lance TypeError com a mensagem exata indicada):
    // - nome: precisa ser uma string não vazia -> 'Nome inválido.'
    // - vidaMaxima: precisa ser um número inteiro maior que zero -> 'Vida máxima inválida.'
    // - nivel: precisa ser um número inteiro maior que zero -> 'Nível inválido.'
    //
    // Depois de validar, defina em "this": nome, vidaMaxima, nivel e vida.
    // O personagem sempre começa com vida igual a vidaMaxima.
  }

  receberDano(quantidade) {
    if (!Number.isInteger(quantidade) || quantidade <= 0) {
      throw new RangeError('Quantidade de dano inválida.');
    }
    this.vida = Math.max(0, this.vida - quantidade);
    // TODO: valide "quantidade" e reduza a vida do personagem.
    //
    // Regra de validação (lance RangeError com a mensagem exata indicada):
    // - quantidade precisa ser um número inteiro maior que zero -> 'Quantidade de dano inválida.'
    //
    // A vida nunca pode ficar negativa: se o dano for maior que a vida
    // restante, a vida final deve ser 0 (não um número negativo).
  }

  curar(quantidade) {
    if (!Number.isInteger(quantidade) || quantidade <= 0) {
      throw new RangeError('Quantidade de cura inválida.');
    }
    this.vida = Math.min(this.vidaMaxima, this.vida + quantidade);
    // TODO: valide "quantidade" e aumente a vida do personagem.
    //
    // Regra de validação (lance RangeError com a mensagem exata indicada):
    // - quantidade precisa ser um número inteiro maior que zero -> 'Quantidade de cura inválida.'
    //
    // A vida nunca pode ultrapassar vidaMaxima: se a cura for maior do
    // que o necessário, a vida final deve ser igual a vidaMaxima (não
    // um número maior).
  }

  estaDerrotado() {
    return this.vida <= 0;
    // TODO: retorne true se a vida do personagem for igual a 0,
    // ou false caso contrário.
  }

  // DESAFIO EXTRA (opcional)
  // Implemente "atacar", que faz este personagem causar dano em outro.
  //
  // Regras:
  // - Reaproveite o método "receberDano" do personagem alvo (não repita a lógica).
  // - Se este personagem (quem ataca) já estiver derrotado, o ataque não pode
  //   acontecer: lance um Error com a mensagem exata 'Personagem derrotado não pode atacar.'
  //
  atacar(alvo, quantidade) {
    if (this.estaDerrotado()) {
      throw new Error('Personagem derrotado não pode atacar.');
    }
    alvo.receberDano(quantidade);
  }
}

function main() {
  const modoErro = process.argv.includes('--erro');

  if (modoErro) {
    // Cenário de erro proposital: vida máxima inválida na criação.
    try {
      const personagemInvalido = new Personagem({ nome: 'Guerreiro', vidaMaxima: -10, nivel: 1 });
      console.log(personagemInvalido);
    } catch (erro) {
      console.error(`Erro: ${erro.message}`);
      process.exitCode = 1;
    }
    return;
  }

  const heroi = new Personagem({ nome: 'Guerreiro', vidaMaxima: 100, nivel: 1 });
  console.log(`${heroi.nome} criado com ${heroi.vida}/${heroi.vidaMaxima} de vida.`);

  const inimigo = new Personagem({ nome: 'Orc', vidaMaxima: 50, nivel: 2 });

  heroi.receberDano(30);
  console.log(`Vida após receber 30 de dano: ${heroi.vida}`);

  heroi.atacar(inimigo, 40);
  console.log(`Alvo recebeu 40 de dano: ${inimigo.vida}`);

  heroi.receberDano(90);
  console.log(`Vida após receber 90 de dano: ${heroi.vida}`);

  console.log(`Está derrotado? ${heroi.estaDerrotado()}`);

  heroi.curar(100);
  console.log(`Vida após curar 100: ${heroi.vida}`);

  console.log(`Está derrotado agora? ${heroi.estaDerrotado()}`);
}

main();