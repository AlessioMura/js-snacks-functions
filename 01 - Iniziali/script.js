/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function my_func(arr) {
    const initials = []
    for (let i = 0; i < arr.length; i++) {
        const first_letter = arr[i][0];
        initials.push(first_letter)
    }
    return initials
}

// Invoca la funzione qui e stampa il risultato in console
let first_char = my_func(names)
console.log(first_char);



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]