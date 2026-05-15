const carro = {
    marca: 'Marca',
    modelo: 'Modelo',
    ano: 2020,
    cor: 'Azul'
}

for(let c in carro) {
    console.log(c + ": " + carro[c]);
}

carro.velocidade = 200;

console.log('-----')
for(let c in carro) {
    console.log(c + ": " + carro[c]);
}