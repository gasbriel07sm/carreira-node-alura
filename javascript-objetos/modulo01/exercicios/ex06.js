// 6 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Em seguida, exclua a propriedade avaliacao do objeto livro. Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.

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

livro.genero = 'Aventura';

delete livro.avaliacao;

const mostrarDetalhes = `Título: ${livro['titulo']} \n` +
                        `Autor: ${livro['autor']} \n` +
                        `Ano de publicação: ${livro['anoPublicacao']} \n` +
                        `Gênero: ${livro['genero']} \n` +
                        `Idade de publicação: ${livro['idadePublicacao']} \n`
console.log(mostrarDetalhes);