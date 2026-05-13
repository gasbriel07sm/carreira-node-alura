const produtos = [
  { nome: 'Notebook', preco: 2500, quantidadeVendida: 75 },
  { nome: 'Mouse', preco: 100, quantidadeVendida: 180 },
  { nome: 'Teclado', preco: 150, quantidadeVendida: 125 },
  { nome: 'Monitor', preco: 900, quantidadeVendida: 95 }
];

// Mostrar todos os produtos (nome, preço, quantidade).

console.log('Relatório de produtos vendidos: \n');
produtos.forEach(x => console.log(`Produto ${x.nome} | Preço: ${x.preco.toFixed(2)} | Quantidade vendida: ${x.quantidadeVendida}`))

// Filtrar os que venderam mais de 100 unidades e exibir seus nomes.

console.log('\nProdutos com alto volume de vendas (> 100 unidades): ');
produtos.filter(x => x.quantidadeVendida > 100 ? console.log(x.nome) : false);

// Calcular os totais de venda de cada produto.

console.log('\nTotal de vendas por produto: ')
const maisLucrativo = { nome: produtos[0].nome, totalVendas: (produtos[0].preco * produtos[0].quantidadeVendida) };
for (let x of produtos) {
    const total = x.quantidadeVendida * x.preco;
    console.log(`${x.nome}: R$ ${total}`);

    if (total > maisLucrativo.totalVendas) {
        maisLucrativo.totalVendas = total;
        maisLucrativo.nome = x.nome;
    }
}

console.log(`\nProduto mais lucrativo: ${maisLucrativo.nome} com R$ ${maisLucrativo.totalVendas.toFixed(2)} em vendas.`)