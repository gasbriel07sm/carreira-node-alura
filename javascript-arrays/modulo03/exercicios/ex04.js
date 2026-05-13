// Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.

const maiorMenorArray = array => {
    let menor = array[0];
    let maior = array[0];
    
    for (let a of array) {
        if (a > maior) maior = a;
        if (a < menor) menor = a;
    }

    return `O menor número é ${menor} e o maior número é ${maior}`;
}

const array = [-10, 2, 3, 4, -40, 6, 7, 8, 9, 10];
console.log(maiorMenorArray(array));
