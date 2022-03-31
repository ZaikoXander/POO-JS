import Functions from './funcoes.js'
import Lutador from './Lutador.js'

const f = new Functions

class Luta {
// Atributos
    #desafiado
    #desafiante
    #rounds
    #aprovada
    
// Métodos de Interface
    /**
     * Regras da Luta:
     * 
     * - Lutadores da mesma categoria.
     * - Desafiado e desafiante devem ser lutadores diferentes.
     * - Apenas começa a luta se for aprovada.
     * - O resultado apenas pode ser a vitória de um dos lutadores ou um empate.
     */
    marcarLuta(l1, l2) {
        if(l1.getCategoria() == l2.getCategoria() && l1 != l2) {
            this.setAprovada(true)
            this.setDesafiado(l1)
            this.setDesafiante(l2)
        } else {
            this.setAprovada(false)
            this.setDesafiado(null)
            this.setDesafiante(null)
        }
    }
    lutar() {
        if(this.getAprovada()) {
            this.getDesafiado().apresentar()
            this.getDesafiante().apresentar()
            let vencedor = f.getRndInteger(0, 2)
            switch(vencedor) {
                case 0: // 0 <- empate
                    console.log('Empatou!')
                    this.getDesafiado().empatarLuta()
                    this.getDesafiante().empatarLuta()
                    break

                case 1: // 1 <- desafiado ganha
                    console.log(this.getDesafiado().getNome())
                    this.getDesafiado().ganharLuta()
                    this.getDesafiante().perderLuta()
                    break

                case 2: // 2 <- desafiante ganha
                    console.log(this.getDesafiante().getNome())
                    this.getDesafiante().ganharLuta()
                    this.getDesafiado().perderLuta()
                    break
            }
        } else {
            console.log('Luta não pode acontecer')
        }
    }

// Métodos Especiais
    getDesafiado() {
        return this.#desafiado
    }
    setDesafiado(value) {
        this.#desafiado = value
    }

    getDesafiante() {
        return this.#desafiante
    }
    setDesafiante(value) {
        this.#desafiante = value
    }

    getRounds() {
        return this.#rounds
    }
    setRounds(value) {
        this.#rounds = value
    }

    getAprovada() {
        return this.#aprovada
    }
    setAprovada(value) {
        this.#aprovada = value
    }
}

export default Luta