const fs = require('fs');
// FilSystem : interagir com sistema de arquivos (criar arquivos, alterar arquivos)
// readFile -> leitura de arquivo

//const caminhoArquivo = require('../arquivos/texto-web.txt');
const caminhoArquivo = process.argv;
// só funciona com módulos JS ou JSON
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
    quebraEmParagrafos(texto);
    //verificaPalavrasDuplicadas(texto);  
});

function quebraEmParagrafos(texto) {
    const paragrafos = texto.toLowerCase().split('\n');
    const contagem = paragrafos.flatMap(paragrafo => {
        if (!paragrafo) return [];
        return verificaPalavrasDuplicadas(paragrafo)
    })
    console.log(contagem);
}

function limpaPalavras(palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

// criar array de palavras
// contar ocorrências 
// objeto com resultado
function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ');
    const resultado = {}

    // objeto[propriedade] = valor;
    listaPalavras.forEach(palavra => {
        if (palavra.length >= 3) {
            const palavraLimpa = limpaPalavras(palavra);
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1
        }
    })

    return resultado;
}