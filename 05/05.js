import ContaBanco from "./ContaBanco.js";

let c1 = new ContaBanco
let c2 = new ContaBanco
c1.abrirConta('cc')
c1.numConta = 1111
c1.dono = 'Jubileu'

c2.abrirConta('cp')
c2.numConta = 2222
c2.dono = 'Creuza'

c1.depositar(300)
c2.depositar(500)

c2.sacar(100)

c1.pagarMensal()
c2.pagarMensal()

c1.sacar(338)
c2.sacar(530)
c1.fecharConta()
c2.fecharConta()

let body = document.getElementsByTagName('body')[0]
let p1 = document.createElement('p')
p1.style.fontWeight = 'bold'
p1.innerHTML = `Conta no banco aberta: ${c1.status}. De número ${c1.numConta} de tipo ${c1.tipo}, o dono é ${c1.dono} e tem saldo: ${c1.saldo}`
body.appendChild(p1)

let p2 = document.createElement('p')
p2.style.fontWeight = 'bold'
p2.innerHTML = `Conta no banco aberta: ${c2.status}. De número ${c2.numConta} de tipo ${c2.tipo}, o dono é ${c2.dono} e tem saldo: ${c2.saldo}`
body.appendChild(p2)