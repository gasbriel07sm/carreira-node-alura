const notas = [7, 7, 8, 9];

const copia = [...notas];

console.log(notas);
console.log(copia);

copia.push(2, 3, 4, 5);

console.log("------------");
console.log(notas);
console.log(copia);