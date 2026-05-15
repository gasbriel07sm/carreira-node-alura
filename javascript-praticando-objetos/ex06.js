const maquina = {
  nome: 'Esteira Transportadora',
  funcionando: false,
  
  exibirStatus() {
    return this.funcionando ? `À máquina ${this.nome} está em funcionamento` : `À máquina ${this.nome} está em parada`;
  }
};

console.log(maquina.exibirStatus());