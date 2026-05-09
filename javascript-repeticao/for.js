// FOR
// números aleatórios de 1 a 50
// interromper o laço caso o número gerado seja 15
// interromper depois de 30 tentativsa e contar a quantidade de tentativas

for (let i = 1; i <= 30; i++) {
    const numero = Math.floor(Math.random() * (50 - 1 +1) + 1);
    
    if (numero === 15) {
        console.log(`${numero} em ${i} tentativas`)
        break;
    }
}

// numeros aleatorios de 1 a 50
// valor incrementado caso os numeros nao sejam divisiveis por 5
// valor do contador
let contador = 0;

for (let i = 1; i <= 30; i++) {
    const numero = Math.floor(Math.random() * (50 - 1 +1) + 1);
    
    if (numero % 5 !== 0) {
        contador++;
    }
}

console.log("Contador: " + contador)