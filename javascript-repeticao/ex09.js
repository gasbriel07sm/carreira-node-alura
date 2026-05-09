const caixas = [12, -1, 8, 0, -5, 3, 7, 14];
let quantidade = 0;

for (let i = 0; i < caixas.length; i++) {
    if (caixas[i] < 0) {
        console.log(`Caixa danificada, ignorada.`);
        continue;
    } 

    console.log(`Caixa processada: ${caixas[i]}`);
    quantidade++;

    if (quantidade === 5) {
        console.log("Limite de caixas processadas atingido!");
        break;
    }
}