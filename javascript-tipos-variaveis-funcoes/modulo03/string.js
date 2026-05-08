const estudante = "Caroline";
const docente = 'Ana';
const cumprimento = "nosso lema é 'estudar bastante!'";
const citacao = `Ju diz: "nosso lema é 'estudar bastante!'"`;

console.log(cumprimento);
console.log(citacao);

console.log("A estudante chama " + estudante);

// Template string
console.log(`A estudante chama ${estudante}`);

// funções em string
let senha = 'SenhaSegura123' + estudante.toUpperCase(); // colocar tudo maiúscula
console.log(senha);
senha = 'SenhaSegura123' + estudante.toLocaleLowerCase(); // colocar tudo minúscula
console.log(senha);