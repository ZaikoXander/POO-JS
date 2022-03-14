class Caneta {
    #ponta
    #carga
    #tampada
    constructor(modelo, cor, ponta, carga, tampada) {
        this.modelo = modelo
        this.cor = cor
        this.#ponta = ponta
        this.#carga = carga
        this.#tampada = tampada
        this.rabiscar
        this.tampar
        this.destampar
    }

    rabiscar() {
        if (this.#tampada) {
            document.write('<p>ERRO! Não posso rabiscar!</p>')
        } else {
            document.write('<p>Estou rabiscando...</p>')
        }
    }
    tampar() {
        this.#tampada = true
    }
    destampar() {
        this.#tampada = false
    }
}

let c1 = new Caneta('BIC cristal', 'Azul', 0.5, 99, false)
// c1.#ponta = 0.5
// c1.#carga = 99
// c1.rabiscar()

document.write('Caneta Object<br>')
for (const [key, value] of Object.entries(c1)) {
    document.write(`${key}: ${value}<br>`)
}