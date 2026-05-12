// 4 - Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.

const menuPrincipal  = ['PRATO 01', 'PRATO 02', 'PRATO 03'];
const menuDeSobremesas = ['PRATO 04', 'PRATO 05', 'PRATO 06'];

const menuCompleto = menuPrincipal.concat(menuDeSobremesas);

console.log(menuCompleto);