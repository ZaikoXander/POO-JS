import Pessoa from './Pessoa.js'
import Aluno from './Pessoas/Aluno.js'
import Professor from './Pessoas/Professor.js'
import Funcionario from './Pessoas/Funcionario.js'

// Instanciação
let p1 = new Pessoa
let p2 = new Aluno
let p3 = new Professor
let p4 = new Funcionario

// Utilização
function printAtBrowser(PessoaObject) {
    let body = document.getElementsByTagName('body')[0] // p1 instanceof Pessoa
    function PessoaAttributes() {
        return `
        nome: ${PessoaObject.getNome()}
        idade: ${PessoaObject.getIdade()}
        sexo: ${PessoaObject.getSexo()}`
    }

    if (PessoaObject instanceof Aluno) {
        body.innerHTML += `<code><pre>Aluno-Pessoa Object<br>
        ${PessoaAttributes()}
        matrícula: ${PessoaObject.getMatr()}
        curso: ${PessoaObject.getCurso()}
        </pre></code><hr>`
    } else if (PessoaObject instanceof Professor) {
        body.innerHTML += `<code><pre>Professor-Pessoa Object<br>
        ${PessoaAttributes()}
        especialidade: ${PessoaObject.getEspecialidade()}
        salário: ${PessoaObject.getSalario()}
        </pre></code><hr>`
    } else if (PessoaObject instanceof Funcionario) {
        body.innerHTML += `<code><pre>Funcionario-Pessoa Object<br>
        ${PessoaAttributes()}
        setor: ${PessoaObject.getSetor()}
        trabalhando: ${PessoaObject.getTrabalhando()}
        </pre></code><hr>`
    } else {
        try {
            body.innerHTML += `<code><pre>Pessoa Object<br>
            ${PessoaAttributes()}
            </pre></code><hr>`
        } catch (error) {
            body.innerHTML += `<code><pre><strong style="color: red;">${error}</strong></pre></code><hr>`
        }
    }
}

p1.setNome('Pedro')
p2.setNome('Maria')
p3.setNome('Cláudio')
p4.setNome('Fabiana')

p2.setCurso('Informática')
p3.setSalario(2500.75)
p4.setSetor('Estoque')

p1.setSexo('M')
p4.setSexo('F')

p3.receberAum(550.20)
p4.mudarTrabalho()
p2.cancelarMatr()

printAtBrowser(p1)
printAtBrowser(p2)
printAtBrowser(p3)
printAtBrowser(p4)