// Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.

let num = 10;
let string = '20';

num = num.toString();
console.log(num, typeof num); // convertendo para string, vamos verificar com o typeof

string = Number(string);
console.log(string, typeof string); // convertendo para number, verificando com typeof
