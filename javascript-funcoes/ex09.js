const calcularConsumo = (potencia, horasPorDia) => {
    const consumo = (potencia * horasPorDia * 30) / 1000;
    return consumo;
}

const classificarConsumo = consumo => {
    if (consumo <= 50) return 'Baixo consumo';
    if (consumo > 50 && consumo < 200) return 'Consumo moderado';
    if (consumo >= 200) return 'Alto consumo';
}

const exibirResumo = (nomeAparelho, consumo, classificacao) => `${nomeAparelho} tem consumo de ${consumo} kWh/mês e é classificada como ${classificacao}`;

const nomeAparelho = "Geladeira";
const consumo = calcularConsumo(150, 4);
const classificacao = classificarConsumo(consumo);
console.log(exibirResumo(nomeAparelho, consumo, classificacao));