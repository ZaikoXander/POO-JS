class ControleRemoto {
// Atributos
    #volume
    #ligado
    #tocando
// Função Construtora
    constructor() {
        this.#volume = 50
        this.#ligado = false
        this.#tocando = false
    }
    
// Funções de Interface
    ligar() {
        this.#setLigado(true)
    }
    desligar() {
        this.#setLigado(false)
    }

    abrirMenu() {
        if(this.#getLigado()) {
            console.log('-------- MENU --------')
            console.log(`| Está ligado?: ${ (this.#getLigado()) ? 'SIM' : 'NÃO' }  |`)
            console.log(`| Está tocando?: ${ (this.#getTocando()) ? 'SIM' : 'NÃO' } |`)
            console.log(`| Volume: ${this.#getVolume()}         |`)
            console.log('----------------------')
            /* for (let i = 0; i <= this.#getVolume(); i += 10) {
                console.log('|');
            } */
        } else {
            console.log('ERRO! Não é possível abrir o menu pois a TV está desligada.')
        }
    }
    fecharMenu() {
        if(this.#getLigado()) {
            console.log('Fechando Menu...')
        } else {
            console.log('ERRO! Não é possível fechar o menu pois a TV está desligada.')
        }
    }

    maisVolume() {
        if(this.#getLigado()) {
            this.#setVolume(this.#getVolume() + 5)
        } else {
            console.log('ERRO! Não posso aumentar o volume')
        }
    }
    menosVolume() {
        if(this.#getLigado()) {
            this.#setVolume(this.#getVolume() - 5)
        } else {
            console.log('ERRO! Não posso diminuir o volume')
        }
    }

    ligarMudo() {
        if(this.#getLigado() & this.#getVolume() > 0) {
            this.#setVolume(0)
        }
    }
    desligarMudo() {
        if(this.#getLigado() && this.#getVolume() == 0) {
            this.#setVolume(50)
        }
    }

    play() {
        if(this.#getLigado() && !this.#getTocando()) {
            this.#setTocando(true)
        }
    }
    pause() {
        if(this.#getLigado() && this.#getTocando()) {
            this.#setTocando(false)
        }
    }

// Funções especiais
    #getVolume() {
        return this.#volume
    }
    #setVolume(value) {
        this.#volume = value
    }
    
    #getLigado() {
        return this.#ligado
    }
    #setLigado(value) {
        this.#ligado = value
    }

    #getTocando() {
        return this.#tocando
    }
    #setTocando(value) {
        this.#tocando = value
    }
}

export default ControleRemoto