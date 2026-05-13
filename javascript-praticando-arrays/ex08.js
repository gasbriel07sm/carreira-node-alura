const precos = [100, 80, 50, 120];

// todos produtos precisam de um desconto de 10% antes de serem exibidos

const novosPrecos = precos.map(x => x * 0.9);

console.log("Preços com desconto: ", novosPrecos);