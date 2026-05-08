const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 7;
const notaQuartoBi = 9.3;

let media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4.0;

if (media >= 7.0) {
    media += media * 0.1;
} 

console.log(`A média é ${media.toFixed(2)}`);