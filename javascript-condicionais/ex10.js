// critica - bateria abaixo de 20
// moderada - bateria entre 20 e 80
// cheia - acima de 80

const bateria = 90;

const categoria = (bateria < 20) ?
 'Crítica' : (bateria <= 80) ?
 'Moderada' : 'Cheia';

console.log(categoria);