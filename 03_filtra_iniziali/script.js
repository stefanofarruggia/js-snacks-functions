/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function letterA(arr, lettera){
    let filtro = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].charAt(0) == lettera){
            filtro.push(arr[i])
        }
    }
    return filtro
}

// Invoca la funzione qui e stampa il risultato in console
console.log(letterA(names, 'A'))
//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]