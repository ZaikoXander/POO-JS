class ContaBanco {
    // tipo -> cc = conta corrente, cp = conta poupança
    // Se abir cc ganha R$50
    // Se abrir cp ganha R$150
    // Para fechar a conta obviamente a conta deve estar aberta, não pode ter dinheiro dentro da conta e também não pode haver débito
    // Para depositar obviamente a conta deve estar aberta
    // Para sacar obviamente a conta deve estar aberta e também deve haver saldo disponível
    // Para pagar mensalidade, o cliente com cc pagará R$12, já o cliente com cp pagará R$20
    _numConta
    #tipo
    #dono
    #saldo
    #status
    
    constructor() {
        this.#status = false
        this.#saldo = 0
        console.log('Conta criada com sucesso!')
    }

    abrirConta(t) {
        if(this.status == false) {
            this.status = true
            this.tipo = t
            if(t == 'cc') {
                this.saldo += 50
            } else if(t == 'cp') {
                this.saldo += 150
            }
        }
    }
    fecharConta() {
        if(this.status) {
            if(this.saldo > 0) {
                console.log('Conta ainda tem dinheiro, não posso fechá-la!')
            } else if(this.saldo < 0) {
                console.log('Conta está em débito. Impossível encerrar!')
            } else {
                this.status = false
                console.log(`Conta de ${this.#dono} fechada com sucesso`)
            }
        }
    }

    depositar(v) {
        if(this.status) {
            this.saldo += v
            console.log(`Depósito de R$ ${v} na conta de ${this.dono}`)
        } else {
            console.log('Impossível depositar')
        }
    }
    sacar(v) {
        if(this.status) {
            if(this.saldo >= v) {
                this.saldo -= v
                console.log(`Saque de R$ ${v} autorizado na conta de ${this.dono}`)
            } else {
                console.log('Saldo insuficiente')
            }
        } else {
            console.log('Impossível sacar')
        }
    }

    pagarMensal() {
        if(this.status) {
            if(this.tipo == 'cc') {
                var v = 12
            } else if(this.tipo == 'cp') {
                var v = 20
            }
            if(this.saldo > v) {
                this.saldo -= v
                console.log(`Mensalidade de R$ ${v} debitada na conta de ${this.dono}`)
            } else {
                console.log(`Saldo insuficiente`)
            }
        } else {
            console.log('Problemas com a conta. Não posso cobrar.')
        }

    }


    get numConta() {
        return this._numConta
    }
    set numConta(n) {
        this._numConta = n
    }

    get tipo() {
        return this.#tipo
    }
    set tipo(t) {
        this.#tipo = t
    }
    
    get dono() {
        return this.#dono
    }
    set dono(d) {
        this.#dono = d
    }
    
    get saldo() {
        return this.#saldo
    }
    set saldo(s) {
        this.#saldo = s
    }

    get status() {
        return this.#status
    }
    set status(s) {
        this.#status = s
    }
}

export default ContaBanco