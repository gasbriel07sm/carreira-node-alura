const contaBancaria = {
    titular: 'Gabriel',
    saldo: 1000,
    depositar(valor) {
        if (valor < 0) return
        this.saldo += valor
    },
    sacar(valor) {
        if (valor > this.saldo) return
        this.saldo -= valor
    }
}

const cliente = {
    nome: 'Gabriel',
    conta: contaBancaria
}

function mostrarSaldo(obj) {
    console.log(`Nome do cliente: ${obj.nome}`)
    console.log(`Saldo: ${obj.conta.saldo.toFixed(2)}`)
}

cliente.conta.sacar(500);
cliente.conta.depositar(1000);
mostrarSaldo(cliente);