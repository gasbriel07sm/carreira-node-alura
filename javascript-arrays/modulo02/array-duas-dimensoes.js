const estudantes = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [estudantes, medias];

// array de arrays
console.log(lista);

console.log(lista[0][0]);

for (let i in lista) {
    for (let j in lista) {
        console.log(`Aluno da posição [${i},${j}] é igual a ${lista[i][j]}`)
    }
}