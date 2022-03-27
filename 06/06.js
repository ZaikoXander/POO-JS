import ControleRemoto from "./ControleRemoto.js";

let c = new ControleRemoto
c.ligar()
c.maisVolume()
c.abrirMenu()

let body = document.getElementsByTagName('body')[0]
let p = document.createElement('p')
p.style.fontWeight = 'bold'
p.innerHTML = `Está ligado?: `
