const pedidos = ['camiseta', 'calça', 'tênis'];

const copia = [...pedidos];
copia.push('boné');

console.log('Array original: ', pedidos);
console.log('Array copiado: ', copia);