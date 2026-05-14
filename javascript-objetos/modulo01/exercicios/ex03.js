// 3 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro.

const anoAtual = new Date().getFullYear();
const livro = {
    titulo: 'Romeu e Julieta',
    autor:  'Shakespare',
    anoPublicacao: 1945,
    genero: 'Romance',
}
livro.idadePublicacao = anoAtual - livro.anoPublicacao;

const mostrarDetalhes = `Título: ${livro['titulo']} \n` +
                        `Autor: ${livro['autor']} \n` +
                        `Ano de publicação: ${livro['anoPublicacao']} \n` +
                        `Gênero: ${livro['genero']} \n` +
                        `Idade de publicação: ${livro['idadePublicacao']}`; 

console.log(mostrarDetalhes);