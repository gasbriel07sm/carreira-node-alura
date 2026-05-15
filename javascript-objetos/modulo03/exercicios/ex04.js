const carro = {
    marca: 'Marca',
    modelo: 'Modelo',
    ano: 2020,
    placa: 'ABCDE',
    cor: 'Azul',
    ligado: false,


    ligar() {
        if (this.ligado) return `O carro já está ligado`
        return this.ligado = true; 
    },

    desligar() {
        if (!this.ligado) return `O carro já está desligado`
        return this.ligado = false;
    },

    obterDetalhes() {
        return `Marca: ${this.marca} \n` +
               `Modelo: ${this.modelo} \n` +
               `Ano: ${this.ano} \n` +
               `Cor: ${this.cor} \n` +
               `Ligado: ${this.ligado} \n`
    },
}

Object.defineProperty(carro, 'placa', {
    enumerable: false
})

for(let c in carro) {
    console.log(c + ": " + carro[c])
}

console.log(Object.keys(carro));
console.log(carro.placa);