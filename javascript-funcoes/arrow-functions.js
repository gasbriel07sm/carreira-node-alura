//criar uma função para calcular juros compostos
// função deve receber valores: valor, % de juros e tempo
// valor * (juros elevado ao tempo)

const jurosCompostos = (valor, porcentagem, tempo) => valor * Math.pow((1 + (porcentagem / 100)), tempo);

console.log(jurosCompostos(1000, 5, 2));