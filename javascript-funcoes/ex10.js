const gerarNomeSorteado = participantes => {
    const indiceSorteado = Math.floor(Math.random() * participantes.length);
    const participanteSorteado = participantes[indiceSorteado];
    return participanteSorteado;
}

const avaliarPontuacao = participante  => {
    if(participante.pontuacao > 80) return 'Parabéns, você foi premiado!';
    if(participante.pontuacao >= 50 && participante.pontuacao < 80) return 'Você quase conseguiu! Fique de olho nos próximos sorteios.';
    if(participante.pontuacao < 50) return 'Infelizmente, não foi dessa vez!';
}

const exibirResultado = participante => {
    console.log('Sorteando...');
    
    setTimeout(() => {
        console.log(`Participante sorteado: ${participante.nome}`);
        console.log(`Pontuação: ${participante.pontuacao}`);
        console.log(avaliarPontuacao(participante));
    }, 2000);
}

const realizarSorteio = participantes => {
    const participanteSorteado = gerarNomeSorteado(participantes);
    exibirResultado(participanteSorteado);
}

const participantes = [
  { nome: "Laura", pontuacao: 92 },
  { nome: "Pedro", pontuacao: 67 },
  { nome: "Clara", pontuacao: 44 }
];

realizarSorteio(participantes);
