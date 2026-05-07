// Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloco e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.

let variavel = 10;

if (1 > 0) {
    let variavel2 = 20;
    console.log(variavel);
    console.log(variavel2);
}

console.log(variavel);
console.log(variavel2);

// com var deu certo
// let deu erro na variavel2, pois ela está com escopo de bloco