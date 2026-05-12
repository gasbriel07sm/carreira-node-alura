const processarPedido = (nome, tipo, exibirMensagem) => exibirMensagem(nome, tipo);

const exibirMensagem = (nome, tipo) => {
    const mensagem = `Processando pedido de ${nome}...`;
    if (tipo === 'vip') return `${mensagem} \nObrigado pela preferência, ${nome}! Você ganhou frete grátis.`;
    if (tipo === 'novo') return `${mensagem} \nBem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.`;
    if (tipo === 'comum') return `${mensagem} \nObrigado pela sua compra, ${nome}!`;
}

console.log(processarPedido("Lucas", "vip", exibirMensagem));
console.log(processarPedido("Fernanda", "novo", exibirMensagem));
console.log(processarPedido("João", "comum", exibirMensagem));
