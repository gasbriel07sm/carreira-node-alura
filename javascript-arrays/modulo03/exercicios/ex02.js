// Crie uma função que receba uma array e imprima no console o número do índice e o elemento.

const imprimirArray = array => {
    for (let a in array) {
        console.log(a + ": " + array[a]);
    }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
imprimirArray(array);
