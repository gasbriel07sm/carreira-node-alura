// EXPRESSÃO DE FUNCAO
// criar função que calcula o fatorial de um número usando recursão

//const calculaFat = function fatorial(n) {
//    let fat = 1;
//    for (let i = n; i >= 1; i--) {
//        fat *= i;
//    }
//    return fat;
//};

const fatorial = function f(n) {
    if (n === 0 | n === 1) return 1;
    return n * f(n - 1);
}

console.log(fatorial(4))