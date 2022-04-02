import Pessoa from "../Pessoa.js"

class Aluno extends Pessoa { // Aluno é uma classe Filha de Pessoa || SubClasse
// Atributos
    #matr
    #curso

// Métodos de Interface
    cancelarMatr() {
        console.log('Matrícula será cancelada')
    }

// Métodos Especiais
    getMatr() {
        return this.#matr
    }
    setMatr(value) {
        this.#matr = value
    }

    getCurso() {
        return this.#curso
    }
    setCurso(value) {
        this.#curso = value
    }
}

export default Aluno