const manutencao = {
  jan: 2,
  fev: 0,
  mar: 5,
  abr: 4,
  mai: 0,
  jun: 7
};

let totalDias = 0;
let mesesManutencao = 0;

for (let mes in manutencao) {
    const dias = manutencao[mes];
    totalDias += dias;
    if (dias > 0) mesesManutencao++;
}

const status = totalDias > 20 ? `Status: Atenção! Acima do limite anual` : `Status: Dentro do limite anual.`

console.log(`Total de dias parados: ${totalDias}`)
console.log(`Meses com manutenção registrada: ${mesesManutencao}`)
console.log(status);