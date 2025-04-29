function mensagem(){
    alert("Seja bem Vindo(a)! ")
    console.log("Seja bem vindo")
    console.log("Você é Muito Legal!")
}
    
function somar(numero1, numero2){
    console.log(numero1 + numero2)
}

let numero1 = 60
let numero2 = 23

somar(numero1, numero2)
somar(30,20)
somar(19, 289)

function raizQuadrada(numero){
   return Math.sqrt(numero)
}

function potenciacao(valor1, valor2){
    return Math.pow(valor1, valor2)
}

function multiplicacao(valor1, valor2){
    return valor1 * valor2 

}

let numero1 = Number(prompt("Digite o primeiro valor: "))
let numero2 = Number(prompt("Digite o segundo valor: "))

let raiz1 = raizQuadrada(numero1)
let raiz2 = raizQuadrada(numero2)

console.log(raiz1, raiz2)


function boasVindas(nome, idade){
    return`
    Seja bem-vindo(a), ${nome}!
    ${nome}, você é muito especial!
    Parabéns pelo seu aniversário de ${idade} anos.
    `
}

let nome = prompt("Digite o seu nome: ")
let idade = prompt("Digite sua Idade: ")

let mensagem = boasVindas(nome, idade)

alert(mensagem)
console.log(mensagem)



let mensagem = function(){
    console.log("Seja bem-vindo(a)!")
}

let somar = function(valor1, valor2){
    return valor1 + valor2
}

console.log(mensagem())
console.log(somar(10, 20))

let mensagem =   () =>{
    console.log("Olá, tudo bem?")
    }
    
    let somar =  (valor1, valor2) => valor1 + valor2

    let raizQuadrada = valor1 => Math.sqrt(valor1)

    console.log(mensagem)
    console.log(somar(25, 768))
    console.log(raizQuadrada(49))