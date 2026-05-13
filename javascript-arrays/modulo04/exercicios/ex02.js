// 2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.

const executaOperacaoEmArray = (array, operacao) => {
    const novoArray = array.map(operacao);
    console.log(novoArray);
}

const operacao = n => n * 2; 

const array = [1, 2, 3, 4, 5];
executaOperacaoEmArray(array, operacao);