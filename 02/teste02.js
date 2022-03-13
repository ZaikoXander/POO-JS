class Mamifero {
    constructor(especie, tamanho, idade, cor, sexo, aquatico, acordado, faminto) {
        this.especie = especie
        this.tamanho = tamanho
        this.idade = idade
        this.cor = cor
        this.sexo = sexo
        this.aquatico = aquatico
        this.acordado = acordado
        this.faminto = faminto
    }

    acordar() {
        this.acordado = true
        console.log(`O/A ${this.especie} está acordando.`)
    }
    dormir() {
        this.acordado = false
        console.log(`O/A ${this.especie} foi dormir.`)
    }
    comer() {
        this.faminto = false
        console.log(`O/A ${this.especie} foi comer.`)
    }
    caracteristicas() {
        console.log('Mamifero Object')
        for (const [key, value] of Object.entries(this)) {
            console.log(`${key}: ${value}`)
        }
    }
}

let m1 = new Mamifero('baleia', 'grande', 150, 'preto', 'F', true, false, false)