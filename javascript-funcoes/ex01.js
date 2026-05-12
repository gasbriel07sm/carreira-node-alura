// Sua tarefa é criar uma função chamada saudacao que receba um nome como parâmetro, mas que funcione mesmo quando nenhum nome for informado, exibindo uma saudação genérica. Use o parâmetro pré-definido para lidar com isso.

const saudacao = (nome = '') => {
    return nome ? `Olá, ${nome}! Bem-vindo(a)!` : `Olá! Bem-vindo(a)!`;
}

console.log(saudacao('Gabriel'));
console.log(saudacao());