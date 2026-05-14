const anoAtual = new Date().getFullYear();
const livro = {
    titulo: 'Romeu e Julieta',
    autor:  'Shakespare',
    anoPublicacao: 1945,
    genero: 'Romance',
}
livro.idadePublicacao = anoAtual - livro.anoPublicacao;
livro.avaliacao = null;

let avaliacao = 10;
!livro.avaliacao ? livro.avaliacao = avaliacao : console.log('O livro já possui avaliação');

const mostrarDetalhes = `Título: ${livro['titulo']} \n` +
                        `Autor: ${livro['autor']} \n` +
                        `Ano de publicação: ${livro['anoPublicacao']} \n` +
                        `Gênero: ${livro['genero']} \n` +
                        `Idade de publicação: ${livro['idadePublicacao']} \n` +
                        `Avaliação: ${livro['avaliacao']}`; 

console.log(mostrarDetalhes);