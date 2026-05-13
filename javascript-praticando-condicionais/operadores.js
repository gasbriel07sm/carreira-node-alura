// OPERADORES

// verificar se um ano é bissexto
// um ano é considerado bissextp quando é divisivel por 4 mas não por 100 ou deve ser divisivel por 100 e por 400

const ano = 1992;
// 2000, 2022, 1992

const eBissexto = (ano % 4 === 0) && (ano % 100 !== 0) || (ano % 400 === 0) ? 'É bissexto' : 'Não é bissexto';
console.log(eBissexto)