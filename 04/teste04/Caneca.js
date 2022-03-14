class Caneca {
    _cor
    #material
    #conteudo
    _carga

    constructor(cor, mat, con, car) {
        this._cor = cor
        this.#material = mat
        this.#conteudo = con
        this._carga = car
    }


    get cor() {
        return this._cor
    }
    set cor(value) {
        this._cor = value
    }

    get material() {
        return this.#material
    }

    get conteudo() {
        return this.#conteudo
    }
    set conteudo(value) {
        this.#conteudo = value
    }

    get carga() {
        return this._carga
    }
    set carga(value) {
        this._carga = value
    }
}

export default Caneca