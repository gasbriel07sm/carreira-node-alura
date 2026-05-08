const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = -2;
const notaQuartoBi = Number('5');
// podemos usar Number(), ou Number.parseInt() ou Number.parseFloat() para realizar a conversão de sring para números

const total = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4.0;

console.log('A média é: ' + total.toFixed(2));
// usamos o toFixed() para determinar quantas casa decimais teremos após a vírgula

const nome = 'Juliana';
console.log('meu nome é ' + nome)