// Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.

const ePalindromo = (string) => palavra.split('').reverse().join('') === palavra ? 'É PALÍNDROMO' : 'NÃO É PALÍNDROMO';

const palavra = "ARARA";
console.log(ePalindromo(palavra));