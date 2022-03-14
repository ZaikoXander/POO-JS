class Caneta {
    #modelo
    #cor
    #ponta
    #tampada

    constructor(m, c, p) {
        this.#modelo = m
        this.#cor = c
        this.#ponta = p
        this.setTampada(true)
    }


    tampar() {
        this.#tampada = true
    }


    getModelo() {
        return this.#modelo
    }
    setModelo(m) {
        this.#modelo = m
    }

    getCor() {
        return this.#cor
    }
    setCor(c) {
        this.#cor = c
    }

    getPonta() {
        return this.#ponta
    }
    setPonta(p) {
        this.#ponta = p
    }

    getTampada() {
        return this.#tampada
    }
    setTampada(t) {
        this.#tampada = t
    }
}

export default Caneta