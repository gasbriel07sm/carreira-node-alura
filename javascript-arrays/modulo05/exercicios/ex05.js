// 5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.

const filtroNum = array => {
    const numerosFiltrados = array.filter(x => x % 3 === 0 && x > 5);
    return numerosFiltrados;
}

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(filtroNum(a1));
