const catalogoFilmes = [
    { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
    { id: 2, titulo: "Jurassic Park", diretor: "Steven Spielberg", anoLancamento: 1993 },
    { id: 3, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 }
]

function filtrarFilmesPorAno(lista, ano) {
    return lista.filter(filme => filme.anoLancamento === ano);
}

console.log(filtrarFilmesPorAno(catalogoFilmes, 2010))
console.log(filtrarFilmesPorAno(catalogoFilmes, 1999))
