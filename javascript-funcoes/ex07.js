const responderUsuario = (nome, fn) => {
    console.log('Processando sua pergunta...');
    setTimeout(() => { fn(nome) }, 3000);
}

const funcao = (nome) => console.log(`Olá, ${nome}! Aqui está a resposta para a sua dúvida`);

responderUsuario("Camila", funcao);