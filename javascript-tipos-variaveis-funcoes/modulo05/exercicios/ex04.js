// Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.

const maiorNum = (a, b, c) => {
    const maiorAB = Math.max(a, b);
    const maiorABC = Math.max(maiorAB, c)
    return maiorABC;
}

const a = 10;
const b = 30;
const c = 40;

console.log(`O maior número entre ${a}, ${b}, ${c} é ${maiorNum(a, b, c)}`);