// calcularDesconto 
// dois parametros - preco original e porcentagem do desconto (valor padrao de 10%)

const calcularDesconto = (precoOriginal, porcentagemDesconto = 10) => precoOriginal * (1 - (porcentagemDesconto / 100));

console.log(calcularDesconto(100, 20));
console.log(calcularDesconto(100));