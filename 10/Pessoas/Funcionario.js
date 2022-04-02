import Pessoa from "../Pessoa.js"

class Funcionario extends Pessoa { // Funcionario é uma classe Filha de Pessoa
// Atributos
    #setor
    #trabalhando

// Métodos de Interface
    mudarTrabalho() {
        this.setTrabalhando(!this.getTrabalhando())
    }

// Métodos Especiais
    getSetor() {
        return this.#setor
    }
    setSetor(value) {
        this.#setor = value
    }

    getTrabalhando() {
        return this.#trabalhando
    }
    setTrabalhando(value) {
        this.#trabalhando = value
    }
}

export default Funcionario