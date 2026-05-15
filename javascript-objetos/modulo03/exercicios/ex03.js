const carro = {
    marca: 'Marca',
    modelo: 'Modelo',
    ano: 2020,
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
    }
}

console.log(carro.obterDetalhes());
carro.ligar();
console.log(carro.obterDetalhes());
carro.ligar();
console.log(carro.obterDetalhes());