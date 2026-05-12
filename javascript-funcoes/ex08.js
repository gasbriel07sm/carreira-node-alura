const avaliarDesempenho = (pontuacaoFinal, gerarMensagem) => gerarMensagem(pontuacaoFinal);

const gerarMensagem = pontuacaoFinal => {
    if (pontuacaoFinal >= 70) return 'Parabéns! Você foi aprovado!';
    if (pontuacaoFinal >= 50 && pontuacaoFinal < 70) return 'Precisa de reforço!';
    if (pontuacaoFinal < 50) return 'Você foi reprovado!';
}

console.log(avaliarDesempenho(82, gerarMensagem));
console.log(avaliarDesempenho(60, gerarMensagem));
console.log(avaliarDesempenho(40, gerarMensagem));
