const carroNovo = {
    marca: 'Marca',
    modelo: 'Modelo',
    ano: 2020,
    cor: 'Azul'
}

const carroComNovosDetalhes = {...carroNovo, estado: 'Novo'};

console.log(carroComNovosDetalhes)