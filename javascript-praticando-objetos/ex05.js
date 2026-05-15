const dispositivos = [
    { nome: 'Telefone', status: 'ativo' },
    { nome: 'Scanner', status: 'inativo'},
    { nome: 'Projetor', status: 'ativo'}
]

for (let d of dispositivos) {
    console.log(`Dispositivo: ${d.nome} | Status: ${d.status}`)
}