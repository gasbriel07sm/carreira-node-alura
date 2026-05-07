// template literals ou template strings
const n = 'Alice';
console.log(`Olá, meu nome é ${n}`);

// escopo de bloco com let

if (1 > 0) {
  let nome = 'Ana';
  console.log(nome); // ‘Ana’
}

// variável `nome` não está acessível
console.log(nome); // Error: nome is not defined