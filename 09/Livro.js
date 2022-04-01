import Pessoa from "./Pessoa.js"

class Livro {
// Atributos
    #titulo
    #autor
    #totPaginas
    #pagAtual
    #aberto
    #leitor

// Método Construtor
    constructor(titulo, autor, totPaginas, leitor) {
        this.setTitulo(titulo)
        this.setAutor(autor)
        this.setTotPaginas(totPaginas)
        this.setLeitor(leitor)
        
        this.setAberto(false)
        this.setPagAtual(0)
    }

// Métodos de Interface
    detalhes() {
        console.log(
`Livro ${this.getTitulo()} escrito por ${this.getAutor()}
Páginas: ${this.getTotPaginas()} e atual: ${this.getPagAtual()}
Sendo lido por ${this.getLeitor().getNome()}`
        )
    }

    abrir() {
        this.setAberto(true)
    }
    fechar() {
        this.setAberto(false)
    }

    folhear(p) {
        if (p > this.getTotPaginas() || p < 0) {
            this.setPagAtual(0)
        } else {
            this.setPagAtual(p)
        }
    }

    avancarPag() {
        if (this.getPagAtual() < this.getTotPaginas()) {
            this.setPagAtual(this.getPagAtual() + 1)
        } else {
            console.log('Não é possível avançar uma página, já estamos na última.')
        }
    }
    voltarPag() {
        if (this.getPagAtual() > 0) {
            this.setPagAtual(this.getPagAtual() - 1)
        } else {
            console.log('Não é possível voltar uma página, estamos na primeira ainda.')
        }
    }

// Métodos Especiais
    getTitulo() {
        return this.#titulo
    }
    setTitulo(value) {
        this.#titulo = value
    }

    getAutor() {
        return this.#autor
    }
    setAutor(value) {
        this.#autor = value
    }

    getTotPaginas() {
        return this.#totPaginas
    }
    setTotPaginas(value) {
        this.#totPaginas = value
    }

    getPagAtual() {
        return this.#pagAtual
    }
    setPagAtual(value) {
        this.#pagAtual = value
    }

    getAberto() {
        return this.#aberto
    }
    setAberto(value) {
        this.#aberto = value
    }

    getLeitor() {
        return this.#leitor
    }
    setLeitor(value) {
        this.#leitor = value
    }
}

export default Livro