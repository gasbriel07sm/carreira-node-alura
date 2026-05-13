const participantes = [
  { nome: 'Ana', idade: 17 },
  { nome: 'Bruno', idade: 22 },
  { nome: 'Carla', idade: 19 },
  { nome: 'Daniel', idade: 15 },
  { nome: 'Eduarda', idade: 25 }
];

const liberados = participantes.filter(x => x.idade >= 18);
liberados.forEach(x => console.log(`Acesso liberador para: ${x.nome}`));

const nomesAprovados = liberados.map(x => x.nome);
console.log('Lista de aprovados: ', nomesAprovados)