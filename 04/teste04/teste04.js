import Caneca from './Caneca.js'

let c1 = new Caneca('laranja', 'porcelana', 'água', 90)

let body = document.getElementsByTagName('body')[0]
let p1 = document.createElement('p')
p1.style.fontWeight = 'bold'
p1.innerHTML = `Eu tenho uma caneca ${c1.cor} de ${c1.material} com ${c1.conteudo} e carga: ${c1.carga}`
body.appendChild(p1)