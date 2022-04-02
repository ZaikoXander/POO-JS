import Pessoa from "../Pessoa.js"

class Professor extends Pessoa { // Professor é uma classe Filha de Pessoa
// Atributos
    #especialidade
    #salario

// Métodos de Interface
    receberAum(value) {
        this.setSalario(this.getSalario() + value)
    }

// Métodos Especiais
    getEspecialidade() {
        return this.#especialidade
    }
    setEspecialidade(value) {
        this.#especialidade = value
    }
    
    getSalario() {
        return this.#salario
    }
    setSalario(value) {
        this.#salario = value
    }
}

export default Professor