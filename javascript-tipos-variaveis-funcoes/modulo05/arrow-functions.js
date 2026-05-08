//const estudanteReprovou = function estudanteReprovou(notaFinal, faltas) {
//    return notaFinal < 7 && faltas > 4 ? true : false;
//}

// Arrow functions
const estudanteReprovou = (notaFinal, faltas) => notaFinal < 7 && faltas > 4 ? true : false;

console.log(estudanteReprovou(20, 39))
