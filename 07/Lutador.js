class Lutador {
// Atributos
    #nome
    #nacionalidade
    #idade
    #altura
    #peso
    #categoria
    #vitorias
    #derrotas
    #empates

// Método Construtor
    constructor(no, na, id, al, pe, vi, de, em) {
        this.setNome(no)
        this.setNacionalidade(na)
        this.setIdade(id)
        this.setAltura(al)
        this.setPeso(pe)
        this.setVitorias(vi)
        this.setDerrotas(de)
        this.setEmpates(em)
    }

// Métodos de Interface
    apresentar() {
        /* console.log(`Lutador: ${this.getNome()}`)
        console.log(`Origem: ${this.getNacionalidade()}`)
        console.log(`${this.getIdade()} anos`)
        console.log(`${this.getAltura()} m de altura`)
        console.log(`Pesando ${this.getPeso()} Kg`)
        console.log(`Ganhou: ${this.getVitorias()}`)
        console.log(`Perdeu: ${this.getDerrotas()}`)
        console.log(`Empatou: ${this.getEmpates()}`) */
        console.log(
`------------------------------------
CHEGOU A HORA! O lutador ${this.getNome()}
veio diretamente de ${this.getNacionalidade()},
tem ${this.getIdade()} anos e pesa ${this.getPeso()}Kg
\nEle tem ${this.getVitorias()} vitórias,
${this.getDerrotas()} derrotas e ${this.getEmpates()} empates`
                    )
    }

    status() {
        /* console.log(`${this.getNome()}`)
        console.log(`é um peso ${this.getCategoria()}`)
        console.log(`${this.getVitorias()} vitórias`)
        console.log(`${this.getDerrotas()} derrotas`)
        console.log(`${this.getEmpates()} empates`) */
        console.log(
`---------------------------
${this.getNome()} é um peso ${this.getCategoria()}
e já ganhou ${this.getVitorias()} vezes,
perdeu ${this.getDerrotas()} vezes e
empatou ${this.getEmpates()} vezes!`
                    )
    }

    ganharLuta() {
        this.setVitorias(this.getVitorias() + 1)
    }
    perderLuta() {
        this.setDerrotas(this.getDerrotas() + 1)
    }
    empatarLuta() {
        this.setEmpates(this.getEmpates() + 1)
    }

// Métodos Especiais
    getNome() {
        return this.#nome
    }
    setNome(value) {
        this.#nome = value
    }

    getNacionalidade() {
        return this.#nacionalidade
    }
    setNacionalidade(value) {
        this.#nacionalidade = value
    }

    getIdade() {
        return this.#idade
    }
    setIdade(value) {
        this.#idade = value 
    }

    getAltura() {
        return this.#altura
    }
    setAltura(value) {
        this.#altura = value
    }

    getPeso() {
        return this.#peso
    }
    setPeso(value) {
        this.#peso = value

        this.#setCategoria()
    }

    getCategoria() {
        return this.#categoria
    }
    #setCategoria() {
        if(this.getPeso() < 52.2)  {
            this.#categoria = 'Inválido'
        } else if(this.getPeso() <= 70.3) {
            this.#categoria = 'Leve'
        } else if(this.getPeso() <= 83.9) {
            this.#categoria = 'Médio'
        } else if(this.getPeso() <= 120.2) {
            this.#categoria = 'Pesado'
        } else {
            this.#categoria = 'Inválido'
        }
    }

    getVitorias() {
        return this.#vitorias
    }
    setVitorias(value) {
        this.#vitorias = value
    }

    getDerrotas() {
        return this.#derrotas
    }
    setDerrotas(value) {
        this.#derrotas = value
    }

    getEmpates() {
        return this.#empates
    }
    setEmpates(value) {
        this.#empates = value
    }
}

export default Lutador