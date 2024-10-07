/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function my_func(arr, first_letter) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].startsWith(first_letter)) {
            output.push(arr[i]);
        }
        
    }
    return output;
}

// Invoca la funzione qui e stampa il risultato in console
let first_letter_a = my_func(names, 'A');
console.log(first_letter_a);



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]