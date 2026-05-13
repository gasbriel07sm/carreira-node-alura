const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

// Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.

//const todasCores = [... new Set(coresLista1.concat(coresLista2))];
const todasCores = [...new Set([...coresLista1, ...coresLista2])];

console.log(todasCores)
