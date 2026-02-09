/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vocalsNumber(stringa){
    let solovocali = stringa.match(/[aeiou]/gi)
    let lunghezza = solovocali.length
    return lunghezza
}

// Invoca la funzione qui e stampa il risultato in console

console.log(vocalsNumber(word))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)