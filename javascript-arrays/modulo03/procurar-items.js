const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNotaENota(aluno) {
    if (lista[0].includes(aluno)) {
        const indice = lista[0].indexOf(aluno); 
        // retorna o indíce da primeira ocorrência
        const mediaAluno = lista[1][indice];
        console.log(`${aluno} tem a média ${mediaAluno.toFixed(2)}`)
    } else {
        console.log('Estudante não existe na lista')
    }
}

exibeNotaENota('Juliana')
exibeNotaENota('Ju')