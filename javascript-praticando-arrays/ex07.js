const livros = ['Dom Casmurro', 'O Cortiço', 'Capitães da Areia', 'Iracema'];
const livroProcurado = 'O Cortiaço';

const livroEncontrado = livros.includes(livroProcurado) ?
    `O livro \"${livroProcurado}\" está disponível` :
    `O livro \"${livroProcurado}\" não foi encontrado`;

console.log(livroEncontrado);