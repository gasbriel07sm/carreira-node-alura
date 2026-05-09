// IF / ELSE
// definir um fluxo para somar ou multiplicar dois números usando if / else 

const num1 = 20;
const num2 = 40;
const operacao = 'soma'

if (operacao.toLowerCase() === 'multiplicacao') {
    console.log(`O resultado da operação é igual a ${(num1 * num2).toFixed(2)}`);
} else if (operacao.toLowerCase() === 'soma') {
    console.log(`O resultado da operação é igual a ${(num1 + num2).toFixed(2)}`);
} else {
    console.log('Operação não identificada')
}

// localizar o nível de bônus de acordo com a faixa salaria
/** ex:
 *  11000 e acima -> 3% de bonus
 *  10999 a 7000 -> 5% de bonus
 *  6999 a 4000 -> 7% de bonus
 *  3999 p baixo -> 9% de bonus
 */

const salario = 2000.00;
let bonus;

if (salario >= 11000.00) {
    bonus = 0.03; // 3% de bonus
} else if (salario < 11000.00 && salario >= 7000.00) {
    bonus = 0.05;
} else if (salario < 7000.00 && salario >= 4000.00) {
    bonus = 0.07;
} else if (salario < 4000.00) {
    bonus = 0.09;
} else {
    console.log('Faixa indisponível.');
}

const total = salario * (1 + bonus);

console.log(`${bonus * 100}% de bônus no salario de ${salario.toFixed(2)}`);
console.log(`Salário total com bônus é igual a ${total.toFixed(2)}`);

