const calculadora = {
    soma(x, y) {
        return x + y 
    },
    subtracao(x, y) {
        return x - y  
    },
    multiplicacao(x, y) {
        return x * y 
    },
    divisao(x, y) {
        if (y === 0) return `Divisão indisponível (por 0)`;
        return x / y;
    },
    calcularMedia(numeros) {
        let total = 0;
        for (let n of numeros) total += n;
        return total / numeros.length;
    }
}

const x = 10;
const y = 20;
const soma = calculadora.soma(x, y);
const subtracao = calculadora.subtracao(x, y);
const divisao = calculadora.divisao(x, y);
const multiplicacao = calculadora.multiplicacao(x, y);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(`Soma entre os números ${x} e ${y} é igual a ${soma}`);
console.log(`Subtração entre os números ${x} e ${y} é igual a ${subtracao}`);
console.log(`Divisão entre os números ${x} e ${y} é igual a ${divisao}`);
console.log(`Multiplicacao entre os números ${x} e ${y} é igual a ${multiplicacao}`);
console.log(`MÉDIA DOS NÚMEROS: ${calculadora.calcularMedia(arr)}`);