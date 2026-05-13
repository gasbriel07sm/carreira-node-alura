// 3 - Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".

const array = [1, 2, 3, 4, 5];
const num = 3;

console.log(array.includes(num) ? `índice: ${array.indexOf(num)}` : '-1');