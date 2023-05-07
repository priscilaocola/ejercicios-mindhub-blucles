// Realizar un programa que permita el ingreso de un número y muestre su tabla de 
// multiplicar (Los primeros 10 múltiplos)

// const numeroingresado = parseInt(prompt("Ingrese un número:"));

// for (let i = 1; i < 11; i++) {
//   console.log(`${numeroingresado} x ${i} = ${numeroingresado * i}`);
// }

 // Realizar un programa que permita el ingreso de números los cuales se tienen que ir 
 // acumulando. El ingreso de datos terminará cuando el usuario ingrese un valor 0. 

// let numero = parseInt(prompt("Ingrese numero"))
// let numerosIngresados = []




// while(numero){
//     numerosIngresados.push(numero)
//     numero = parseInt(prompt("Ingrese numero"))
// }



// console.log(numero)
// console.log(numerosIngresados)


// /* Ejercicio 3 */

// let numeroGuardado = numerosIngresados.slice(numerosIngresados.length-1)
// console.log(numeroGuardado)
//  let numeroAdivinado = parseInt(prompt("Ingrese Numero a Adivinar"))
//  let bucle = true
//  while(bucle){
//  if(numeroGuardado[0] == numeroAdivinado){
//      alert(`Adivinaste el numero y el numero es ${numeroGuardado[0]}` )
//         bucle = false
//      }else if(numeroAdivinado < numeroGuardado[0]){
//            numeroAdivinado = prompt(`El numero es menor intente otro numero`)
//      }
//     else if(numeroAdivinado > numeroGuardado[0]){
//      numeroAdivinado = prompt(`El numero es mayor intente otro numero`)
//      }
//      }
//     //  ejercicio 4
      // function numPrimos(numero) {
  //     let primo = Number(prompt("Ingrese un número para saber si es primo:"))
  //     while (primo > 0) {
  //         if (primo == 0 || primo == 1 || primo != 2 || primo == 4) {
  //             alert(`${primo} no es numero primo`)
  //         }
//    
//     for (let i = 2; i < primo / 2; i++) {
//             if (primo % i === 0) {
//                 alert(`${primo} no es numero primo`)
//                 primo = Number(prompt("ingrese un numero para saber si es primo:"))
//             }
//         }
//         alert(`${primo} es numero primo`)
//         primo = Number(prompt("Ingrese un numero para saber si es primo:"))
//     }
// }
// numPrimos();
// // // ejercicio 5

// let number = Number(prompt(`Ingrese un número para saber sus divisores`))
// let divisores = []
// for(let i = 1; i <= number; i++){
//     if (number % i === 0){
//         divisores.push(i)
//     }
// }
// console.log(divisores);

// // ejercicio 6

// const array = [1, 2, 3, 4, 5, 6, `javier`, `carlos`, [`octavio`, `esteban`], {name: `juan`, lastname: `herrera`}]

// for (let i = 0; i < array.length; i++){
//     console.log(array[i])
// }

// // ejercicio 7

// const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = 0; i < array2.length; i++){
//     console.log(array2[i] * 2)
// }

// // ejercicio 8

// const familia = [{
//     name: `Priscila`,
//     edad: 28,
//     ocupacion: `modelo`,
//     colorPelo: `castaño`
// }, {
//     name: `Dorian`,
//     edad: 33,
//     ocupacion: `ingeniero`,
//     colorPelo: `negro`
// }, {
//     name: `David`,
//     edad: 56,
//     ocupacion: `bombero`,
//     colorPelo: `rubio`
// }, {
//     name: `Christopher`,
//     edad: 14,
//     ocupacion: `estudiante`,
//     colorPelo: `negro`
// }, {
//     name: `Enzo`,
//     edad: 3,
//     ocupacion: `infante`,
//     colorPelo: `castaño`
// }];

// for (let i = 0; i < familia.length; i++) {
//     console.log(`Su nombre es ${familia[i].name} tiene ${familia[i].edad} años, 
//     el pelo de color ${familia[i].colorPelo} y actualmente es ${familia[i].ocupacion}.`)
// }

// // ejercicio 9

// const arrayNumber = [1, 4, 6, 7, 8, 35, 657, 43, 22, 66, 554, 2255, 44855];
// let soyImpar = []
// for (let i = 0; i < arrayNumber.length; i++) {
//     if (i % 2 !== 0) {
//         soyImpar.push(arrayNumber[i]);
//     }
// }
// console.log(soyImpar)

// // ejercicio 10

// let numIngres = Number(prompt('Ingrese un número'))
// const numeros = []
// const impar = []
// const par = []
// let resultadoImpar = 0
// let resultadoPar = 0
// while (numIngres != 0) {
//     numeros.push(numIngres)
//     numIngres = Number(prompt('Ingrese un número'))
// } for (let i = 0; i < numeros.length; i++) {
//     if (i % 2 == 0) {
//         impar.push(numeros[i]);
//     } else if (i % 2 !== 0) {
//         par.push(numeros[i]);
//     }
// }
// for (let i = 0; i < impar.length; i++) {
//     resultadoImpar += impar[i];
// }
// for (let i = 0; i < par.length; i++) {
//     resultadoPar += par[i];
// }
// console.log(numeros)
// console.log(impar)
// console.log(resultadoImpar)
// console.log(par)
// console.log(resultadoPar)

// // ejercicios 11

// // v.1 Estuve investigando el ... y se puede así junto con Math.max, 
// //pero como es con bucles lo hice de nuevo abajo en v.2

// let listaMayor = [18, 31, 64, 5, 8 ,12 ,77 ,54, 125, 32];
// let mayorNumber = Math.max(...listaMayor);
// console.log(mayorNumber)

// // v.2
// let listaMayor = [18, 31, 64, 5, 812 ,12 ,77 ,543, 125, 32];
// let resultadoMayor = 0
// for (let i = 0; i < listaMayor.length; i++){
//     if (resultadoMayor < listaMayor[i]){
//         resultadoMayor = listaMayor[i];
//     }
// }
// console.log(resultadoMayor);

// // ejercicio 12

// let listaMayor = [18, 31, 64, 5, 8 ,12 ,77 ,54, 125, 32];
// let mayorNumber = Math.min(...listaMayor);
// console.log(mayorNumber)

// ejercicio 13

// let concursoPPT = alert(`Compite en piedra, papel o tijera!`)
// let primerJug = prompt(`Jugador 1 ingresa tu Nombre:`)
// let segundoJug = prompt(`Jugador 2 ingresa tu Nombre:`)
// let jugadaPrimerJug
// let jugadaSegundoJug
// do {
//     jugadaPrimerJug = prompt(`${primerJug} ingresa PIEDRA, PAPEL o TIJERA:`)
//     jugadaSegundoJug = prompt(`${segundoJug} ingresa PIEDRA, PAPEL o TIJERA:`)
// if (jugadaPrimerJug.toLowerCase() == `piedra` && jugadaSegundoJug.toLowerCase() == `piedra`) {
//     alert(`Dos PIEDRAS: Empate!`)
// }else if (jugadaPrimerJug.toLowerCase() == `piedra` && jugadaSegundoJug.toLowerCase() == `papel`) {
//     alert(`${segundoJug} ha ganado!`)
// }else if (jugadaPrimerJug.toLowerCase() == `piedra` && jugadaSegundoJug.toLowerCase() == `tijera`) {
//     alert(`${primerJug} ha ganado!`)
// }else if (jugadaPrimerJug.toLowerCase() == `papel` && jugadaSegundoJug.toLowerCase() == `papel`) {
//     alert(`Doble PAPEL: Empate!`)
// }else if (jugadaPrimerJug.toLowerCase() == `papel` && jugadaSegundoJug.toLowerCase() == `piedra`) {
//     alert(`${primerJug} ha ganado!`)
// }else if (jugadaPrimerJug.toLowerCase() == `papel` && jugadaSegundoJug.toLowerCase() == `tijera`) {
//     alert(`${segundoJug} ha ganado!`)
// }else if (jugadaPrimerJug.toLowerCase() == `tijera` && jugadaSegundoJug.toLowerCase() == `tijera`) {
//     alert(`Doble Tijera: Empate!`)
// }else if (jugadaPrimerJug.toLowerCase() == `tijera` && jugadaSegundoJug.toLowerCase() == `piedra`) {
//     alert(`${segundoJug} ha ganado!`)
// }else if (jugadaPrimerJug.toLowerCase() == `tijera` && jugadaSegundoJug.toLowerCase() == `papel`) {
//     alert(`${primerJug} ha ganado!`)
// }else {
//     alert(`Un jugador ha hecho trampa! Fin del Juego!`)
// }
// } while (jugadaPrimerJug.toLowerCase() == jugadaSegundoJug.toLowerCase())

// // ejercicios 14

// function triangulo1(numPisos) {
//     for (let i = 0; i < numPisos; i++) {
//         let piso = '';
//         // console.log(`vuelta n ${i}`)
//     for (let x = 0; x < i + 1; x++) {
//         piso = piso + '*';
//         // console.log(x)
//     }
//     console.log(piso)
//     }
// }

// triangulo1(5);

// // ejercicio 15

// function triangulo2(numPisos2) {
//     for (let i = 0; i < numPisos2; i++) {
//         let linea = '';
//         for (let j = 1; j < numPisos2 - i; j++) {
//             linea = linea + ' ';
//         }
//         for (let j = 0; j < i + 1; j++) {
//             linea = linea + '*';
//         }
//         console.log(linea);
//     }
// }
// triangulo2(5);

// ejercicio 16

// function ordenarArray(array) {
//   let n = array.length;
//   for (let i = 0; i < n-1; i++) {
//     for (let j = 0; j < n-i-1; j++) {
//       if (array[j] > array[j+1]) {

//         // Intercambiar los elementos j y j+1
//         let temp = array[j];
//         array[j] = array[j+1];
//         array[j+1] = temp;
//       }
//     }
//   }
//   return array;
// }
// let miArray = [5, 9, 3, 1, 8, 4, 6, 2, 7, 0 , 10];
// console.log(ordenarArray(miArray));

//  Gracias Dios por hacer que llegue hasta aca amem!!!
