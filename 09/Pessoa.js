class Pessoa {
// Atributos
    #nome
    #idade
    #sexo

// Método Construtor
    constructor(nome, idade, sexo) {
        this.setNome(nome)
        this.setIdade(idade)
        this.setSexo(sexo)
    }
    
// Métodos de Interface
    fazerAniver() {
        this.setIdade(this.getIdade() + 1)
    }

// Métodos Especiais
    getNome() {
        return this.#nome
    }
    setNome(value) {
        this.#nome = value
    }

    getIdade() {
        return this.#idade
    }
    setIdade(value) {
        this.#idade = value
    }

    getSexo() {
        return this.#sexo
    }
    setSexo(value) {
        this.#sexo = value
    }
}

export default Pessoa