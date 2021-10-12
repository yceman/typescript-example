let messge: string = "Help me, Obi-Wan Kenobi. You're my only hope!";
console.log(messge);

let episode: number = 4
console.log("This is episode " + 4)
episode = episode + 1
console.log("Next episode is " + episode)

let favoriteDroid: string
favoriteDroid = 'BB-8'
console.log("My favorite droid is " + favoriteDroid)

/*Variável do tipo any*/
/*let favoriteDroid
favoriteDroid = 'BB-8'
favoriteDroid = 10
console.log("My favorite droid is " + favoriteDroid)*/

let isEnoughToBeatMF = function (parsecs: number): boolean {
  return parsecs < 12 /*Parsecs = medida de distância StarWars*/
}

let distance = 11
console.log(`Is ${distance} parsecs enough to beat Millenium Falcon? ${isEnoughToBeatMF(distance) ? 'YES': 'NO'}`)

/*
*Aspas`` tudo dentro delas chama-se template string
*dentro das chaves junto com o dolar ${} pode chamar
*uma variável ou uma função
*/

/*Arrow Functions*/
/*Do lado direito da seta ficam os Parâmetros e do lado direitoa implementação*/
/*Não do nome function e também não precisa da palavra chava(keyword) return*/

let call = (name: string) => console.log(`Do you copy, ${name}?`)
call('R2') /*Chamada da função*/


/*Parâmetros Padrões em Typescript*/

function inc (speed: number, inc: number = 1 ): number {
  return speed + inc
}

console.log(`inc (5, 1) = ${inc(5, 1)}`)
console.log(`inc (5) = ${inc(5)}`)
