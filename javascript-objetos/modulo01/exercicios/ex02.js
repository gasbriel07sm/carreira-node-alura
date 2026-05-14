/** 2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.

Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.

Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.

Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente. */
const anoAtual = new Date().getFullYear();
const livro = {
    titulo: 'Romeu e Julieta',
    autor:  'Shakespare',
    anoPublicacao: 1945,
    genero: 'Romance',
}
livro.idadePublicacao = anoAtual - livro.anoPublicacao;

const mostrarDetalhes = `Título: ${livro.titulo} \n` +
                        `Autor: ${livro.autor} \n` +
                        `Ano de publicação: ${livro.anoPublicacao} \n` +
                        `Gênero: ${livro.genero} \n` +
                        `Idade de publicação: ${livro.idadePublicacao}`; 

console.log(mostrarDetalhes)