// Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.

const calculaPotencia = (base, expoente) => base ** expoente;

const base = 2;
const expoente = 5;
console.log(`${base} elevado à ${expoente} é igual a ${calculaPotencia(base, expoente)}`);