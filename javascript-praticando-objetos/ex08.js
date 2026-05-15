const relatorio = {
  temperatura: 75,
  vibracao: 40,
  pressao: 55,
  nivelRuido: 30
};

console.log('Categorias avaliadas: ', Object.keys(relatorio))
console.log('Valores registrados: ', Object.values(relatorio))

console.log('\nDetalhamento: ')

for (let [chave, valor] of Object.entries(relatorio)) {
    const mensagem = valor > 50 ? '(alerta)' : '(ok)'
    console.log(chave + ": " + valor + ' ' + mensagem)
}