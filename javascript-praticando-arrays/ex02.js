const despesas = [120, 80, 45.5, 200, 60];

const somaTotal = despesas.reduce((acc, x) => acc += x, 0);

console.log(`Total de despesas: ${somaTotal.toFixed(2)}`)