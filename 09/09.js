import Pessoa from "./Pessoa.js"
import Livro from "./Livro.js"

// Instanciação
let p = []
p[0] = new Pessoa('Pedro', 22, 'M')
p[1] = new Pessoa('Maria', 31, 'F')

let l = []
l[0] = new Livro('PHP Básico', 'José da Silva', 300, p[0])
l[1] = new Livro('POO com PHP', 'Maria de Souza', 500, p[0])
l[2] = new Livro('PHP Avançado', 'Ana Paula', 800, p[1])

// Utilização
function printAtBrowser(LivroObject) {
    let body = document.getElementsByTagName('body')[0]

    try {
        body.innerHTML += `<code><pre>Livro Object<br>
        titulo: ${LivroObject.getTitulo()}
        autor: ${LivroObject.getAutor()}
        totPaginas: ${LivroObject.getTotPaginas()}
        pagAtual: ${LivroObject.getPagAtual()}
        aberto: ${LivroObject.getAberto()}
        leitor: ${LivroObject.getLeitor().getNome()}
        </pre></code><hr>`
        
    } catch (error) {
        body.innerHTML += `<code><pre>
        <strong style="color: red;">${error}</strong>
        </pre></code><hr>`
    }
}

l[0].abrir()
l[0].folhear(100)
l[0].detalhes()
printAtBrowser(l[0])

l[1].detalhes()
l[1].abrir()
l[1].abrirAleatorio()
printAtBrowser(l[1])

l[2].detalhes()
printAtBrowser(l[2])