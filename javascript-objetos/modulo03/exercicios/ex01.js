const pessoa = {
    nome: 'Gabriel',
    notas: [8, 9, 10, 12],

    calcularMediaNotas() {
        const total = this.notas.reduce((acc, total) => acc += total, 0)
        return total / this.notas.length;
    },

    classificarDesempenho() {
        if (this.calcularMediaNotas() >= 9) return `Desempenho excelente`
        if (this.calcularMediaNotas() >= 7.5 && this.calcularMediaNotas() < 9) return `Bom Desempenho`
        if (this.calcularMediaNotas() >= 6 && this.calcularMediaNotas() < 7.5) return `Desempenho regular`
        if (this.calcularMediaNotas() < 6) return `Desempenho insuficiente`
    } 
}

console.log(`A média da pessoa é igual a ${pessoa.calcularMediaNotas()}`);
console.log(pessoa.classificarDesempenho());