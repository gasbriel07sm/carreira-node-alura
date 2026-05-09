const tempoMinimo = 5;
const temperaturaIdealAlcancadaEm = 3;

for (let i = 1; i <= tempoMinimo; i++) {
    if (i === temperaturaIdealAlcancadaEm) {
        console.log(`Temperatura ideal atingida.`);
        continue;
    }
    console.log(`Aquecendo... segundo ${i}`);
}

console.log(`Tempo total de aquecimento: ${tempoMinimo} segundos`)