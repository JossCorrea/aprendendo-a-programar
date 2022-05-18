console.log("Olá mundão!")
console.log("Meu primeiro programa da ITuring !")

// Isso é um comentério de uma linha

/* Isso é um comentário de 
várias linhas
acabando aqui */

//Declaração de variáveis
let coisas
let coisa1, coisa2

//Atribuiçao de valor a variável
// coisas = 'quadrado'
// console.log(coisas,coisa1,coisa2)

// coisa1 = 12
// console.log(coisas,coisa1,coisa2)

// coisa2 = true
// console.log(coisas,coisa1,coisa2)

// let nome
// nome = "Intrutora Jô"
let nome = "Intrutora Jô"
let sobrenome = 'Correa'
let idade = 38
let idadeTexto = "38"
let altura = 1.61
let logada = true
let logadaTexto = 'true'

// console.log(nome, typeof(nome))
// console.log(sobrenome, typeof(sobrenome))
// console.log(idade, typeof(idade))
// console.log(idadeTexto, typeof(idadeTexto))
// console.log(altura, typeof(altura))
// console.log(logada, typeof(logada))
// console.log(logadaTexto, typeof(logadaTexto))

// // var (nao usamos mais)
// // let/const

// //Array
// let lista = ['arroz', 'batata', nome, 12, true, [1,2,3]]
// console.log(lista, typeof(lista))
// console.log(lista[0])
// console.log(lista[1])

// //Objeto
// let mapa = { nome : 'Jo', idade: 38}
// console.log(mapa, typeof(mapa))
// console.log(mapa['nome'])
// console.log(mapa.nome)

let numero = 13
console.log(numero, typeof(numero))
numero = 'treze'
console.log(numero, typeof(numero))

let nota1 = 8
let nota2 = 10

let  media = (nota1 + nota2) /2
console.log('media:', media)

let resultado = 10 - 3
console.log(`resultado`, resultado)

let num1 = 1
let num2 = '2'
let resultadoMaluco = num1 + num2
console.log(`resultadoMaluco`, resultadoMaluco)

let resultadoCorreto = num1 - num2
console.log(`resultadoCorreto`, resultadoCorreto)

console.log(nome + " " +sobrenome)

//Condicionais
let idadeJogador = 18

if (idadeJogador >= 18 ){
  //se for verdade
  console.log('Pode jogar')
} else{
  //se não for verdade
  console.log('Não pode jogar')
}

console.log(nota2 > nota1)

let senha = '123456'

if (senha == '123456' ){
  //se for verdade
  console.log('Login')
} else{
  //se não for verdade
  console.log('Bloqueado')
}