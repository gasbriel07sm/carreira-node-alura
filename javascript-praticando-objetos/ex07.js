arr = [
  ['nome', 'João'],
  ['idade', 30],
  ['cidade', 'Curitiba']
]

function montarObjeto(arr) {
    const obj = {};
    
    for (const [chave, valor] of arr) {
        obj[chave] = valor;
    }
    
    return obj;
}

console.log(montarObjeto(arr));