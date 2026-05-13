const numeros = [6, 9, 12, 15, 18, 21];

// Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.

numeros.forEach(n => console.log(n * 3));
console.log(numeros.findIndex(n => n === 18));