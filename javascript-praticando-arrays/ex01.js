const listaDeCompras = ['arroz', 'feijão', 'macarrão', 'tomate'];

// acessar e exibir o segundo item da lista
// modificar o último item da lista para um novo valor

console.log(`O segundo item da lista é: ${listaDeCompras[1]}`);

listaDeCompras[listaDeCompras.length - 1] = 'fruta';
console.log(`Lista após modificação: `, listaDeCompras);