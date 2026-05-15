const curso = {
  titulo: "JavaScript Intermediário",
  estudantes: [
    { nome: "Ana", progresso: 85 },
    { nome: "Carlos", progresso: 40 },
    { nome: "Juliana", progresso: 72 },
    { nome: "Pedro", progresso: 60 }
  ],
  gerarRelatorio() {
    for (let estudante of this.estudantes) {
        const nome = estudante.nome;
        const progresso = estudante.progresso;

        const situacao = progresso > 70 ? 'Aprovado' : 'Em andamento';

        console.log(`Estudante: ${nome} | Progresso: ${progresso}% | Situação: ${situacao}`);
    }

    const totalEstudantes = this.estudantes.length;
    const totalNotas = this.estudantes.reduce((acc, v) => acc += v.progresso, 0);
    const media = totalNotas / this.estudantes.length;

    console.log(`Total de estudantes: ${totalEstudantes}`)
    console.log(`Média geral da turam: ${media.toFixed(2)}%`)
  }
};

curso.gerarRelatorio();