const animals = require('./animals.json');

const animalsObj = JSON.parse(JSON.stringify(animals));
console.log(animalsObj);

animalsObj.animais.push({ id: 4, nome: 'Macaco', tipo: 'Mamífero', habitat: 'Floresta'});
animalsObj.animais.filter(x => x.nome === 'Pinguim').map(x => x.habitat = 'Deserto');
animalsObj.animais.shift();
console.log(animalsObj);

const animalsString = JSON.stringify(animalsObj);
console.log(animalsString)