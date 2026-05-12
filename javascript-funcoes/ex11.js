// CONTAGEM REGRESSIVA

const contagemRegressiva = function f(n) {
    if (n > 0) {
        console.log(n);
        contagemRegressiva(n - 1);
    } else {
        console.log("Lançamento!");
    }
}

contagemRegressiva(15);
