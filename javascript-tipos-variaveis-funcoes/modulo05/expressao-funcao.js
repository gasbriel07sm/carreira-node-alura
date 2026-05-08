//function estudanteReprovou(notaFinal, faltas) {
//    return notaFinal < 7 && faltas > 4 ? true : false;
//}

// transformar em uma expressão de função >> atribuimos uma função em uma variável
const estudanteReprovou = function estudanteReprovou(notaFinal, faltas) {
    return notaFinal < 7 && faltas > 4 ? true : false;
}

console.log(estudanteReprovou(20, 39))
