import Caneta from './Caneta04.js'

let c1 = new Caneta('BIC', 'Azul', 0.5)
let c2 = new Caneta('PEN', 'Verde', 1.0)


let body = document.getElementsByTagName('body')[0]
let p1 = document.createElement('p')
p1.style.fontWeight = 'bold'
p1.innerHTML = `Eu tenho uma caneta ${c1.getModelo()} ${c1.getCor()} de ponta ${c1.getPonta()} e tampada: ${c1.getTampada()}`
body.appendChild(p1)

let p2 = document.createElement('p')
p2.style.fontWeight = 'bold'
p2.innerHTML = `Eu tenho uma caneta ${c2.getModelo()} ${c2.getCor()} de ponta ${c2.getPonta()} e tampada: ${c2.getTampada()}`
body.appendChild(p2)
/* let p2 = document.createElement('p')
p2.style.color = 'red'
p2.innerHTML = 'Caneta Object<br>'
for (const [key, value] of Object.entries(c1)) {
    p2.innerHTML += `${key}: ${value}<br>`
}
body.appendChild(p2) */