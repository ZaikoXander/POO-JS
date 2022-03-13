class Caneta {
    constructor(modelo, cor, ponta, carga, tampada) {
        this.modelo = modelo
        this.cor = cor
        this.ponta = ponta
        this.carga = carga
        this.tampada = tampada
    }

    rabiscar() {
        if (this.tampada) {
            document.write('<p>ERRO! Não posso rabiscar!</p>')
        } else {
            document.write('<p>Estou rabiscando...</p>')
        }
    }
    tampar() {
        this.tampada = true
    }
    destampar() {
        this.tampada = false
    }
}

let c1 = new Caneta
c1.cor = 'Azul'
c1.ponta = 0.5
c1.destampar()

let c2 = new Caneta
c2.cor = 'Verde'
c2.carga = 50
c2.tampar()

document.write('Caneta Object<br>')
for (const [key, value] of Object.entries(c1)) {
    document.write(`${key}: ${value}<br>`)
}

document.write('<br>Caneta Object<br>')
for (const [key, value] of Object.entries(c2)) {
    document.write(`${key}: ${value}<br>`)
}