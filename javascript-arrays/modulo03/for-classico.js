// PERCORRENDO UM ARRAY COM FOR CLÁSSICO

const notas = [10, 8.5, 6.5, 8, 7.5];

// primeira expressão: executada apenas uma vez
// segunda expressão: condição de execução
// terceira expressão: executada sempre ao final do bloco

for (let i = 0; i < notas.length; i++) {
    console.log(`${i} : ${notas[i]}`);
}