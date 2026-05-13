// adicionar uma nova tarefa no final e remover a ultima que foi adicionada

const tarefas = ['Estudar', 'Lavar roupa', 'Fazer compras'];

tarefas.push('Pagar boleto');
console.log('Lista após adicionar: ', tarefas);

tarefas.pop();
console.log("Lista após remover a última tarefa:", tarefas);
