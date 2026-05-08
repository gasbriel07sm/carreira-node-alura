// parâmetro / argumentos
// retorno

// função sem argumento e parâmetros
function exibeNomeEstudante() {
    console.log('Caroline');
}

// função com argumento (recebe da chamada da função)
function exibeNomeEstudanteComArg(nome) {
    console.log(nome);
}

// função com retorno
function exibeNomeEstudanteComRet(nome) {
    return `Olá, meu nome é ${nome}`;
}

exibeNomeEstudante();
exibeNomeEstudanteComArg('Gabriel');
console.log(exibeNomeEstudanteComRet('Gabriel'));

// temos um hoisting, ou seja, as funções são passadas para o topo do arquivo