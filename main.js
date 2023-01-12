/*
    Completar el código de la función para que 
    devuelva la frase recibida sin vocales.
*/

let sentence = 'Hola soy Edu Feliz Navidad';

function noVowels(str){
    let message = str.replace(/[aAeEiIoOuU]/g, "");
    return message;
}

console.log(noVowels(sentence));

/*
   Completar la función para que, recibida una palabra,
   devuelva el caracter que está en el medio. Si la palabra
   es par, devuelve los dos caracteres.

   Ejemplo: camión => mi

*/

let word = "camión";
function middleCharacter(str){
   let newWord = str.slice((str.length-1)/2, str.length/2+1);
   return newWord;
}

console.log(middleCharacter(word));

/*
    Completar el código de la función para que 
    devuelva la frase recibida sin el primer y último parámetro.

*/

let phrase = 'Hola Don Pepito, hola Don José';

function deleteFirsLast(str){
    let newString = str.slice(1, str.length - 1);
    return newString;
}

console.log(deleteFirsLast(phrase));

/*
    Completar el código de la función para que 
    devuelva la suma de los elementos del array.
*/

let numberList = [1,2,-1,3,5,7];

function sumList(list){
    let sum = 0;
    for (let index = 0; index < list.length; index++) {
        sum += list[index];
    }
    return sum;
}

console.log(sumList(numberList));

/*
    Completar el código de la función para que 
    devuelva el ganador del balón de oro, siendo 
    el que más puntuación tenga.
    Nota: Os toca investigar como ordenar valores númericos ;) 
*/

let playerList = [
    {name:'Cristiano', score:300},
    {name:'Messi', score:250},
    {name:'Benzema', score:500}
];

function winner(list){
    list.reverse((a, b) => {return a.score - b.score});
    return list[0].name;
}

console.log(winner(playerList));

/*
¡Se nos han mezclado los rebaños!
Tenemos 2 rebaños de ovejas(o) y vacas(v) mezclados y necesitamos ayuda.
Completar el código de la función para que, dado dos rebaños mezclados,
devuelva un objeto con el número de ovejas y número de vacas totales.

Ejemplo: 
    Rebaño 1 -> ["o","v","v","v","o","o","o","o","o","o","v","v","v","o"]
    Rebaño 2 -> ["o","o","o","v","o","v","o","o","v","o","v","o"]
    Resultado -> {nOvejas: 16, nVacas: 10}
*/

let rebano1 = ["o","v","v","v","o","o","o","o","o","o","v","v","v","o"];
let rebano2 = ["o","o","o","v","o","v","o","o","v","o","v","o"];

function counter(list1, list2){
    let rebano = {
        nVacas : 0,
        nOvejas : 0
    };
    for (let index = 0; index < list1.length; index++) {
        if (list1[index] === "v") {
            rebano.nVacas += 1;            
        }
        if (list1[index] === "o") {
            rebano.nOvejas += 1;
        }
    }
    for (let index = 0; index < list2.length; index++) {
        if (list2[index] === "v") {
            rebano.nVacas += 1;            
        }
        if (list2[index] === "o") {
            rebano.nOvejas += 1;
        }
    }
    return rebano;
}

console.log(counter(rebano1,rebano2));
