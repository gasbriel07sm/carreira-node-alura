// valor do frete com base na distância
// até 5km - FRETE FIXO 5
// de 5 ate 20 - 0.50 por KM
// acima de 20 - FRETE FIXO 20

const calcularFrete = distancia => {
    if (distancia > 0 && distancia <= 5) return 5;
    if (distancia > 5 && distancia <= 20) return 0.50 * distancia;
    if (distancia > 20) return 20;
}

console.log(calcularFrete(3));
console.log(calcularFrete(12));
