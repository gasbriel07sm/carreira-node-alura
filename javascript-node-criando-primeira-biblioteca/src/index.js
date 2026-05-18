const fs = require('fs');
// FilSystem : interagir com sistema de arquivos (criar arquivos, alterar arquivos)
// readFile -> leitura de arquivo

//const caminhoArquivo = require('../arquivos/texto-web.txt');
const caminhoArquivo = process.argv;
// só funciona com módulos JS ou JSON
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
    if (erro) console.log(erro)
    console.log(texto);    
});

