/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.
function my_func(hello) {
    return `ciao ${hello}`;
}

// Invoca la funzione qui e stampa il risultato in console
let greetings = my_func(name);
console.log(greetings);

//Risultato atteso se si passa 'Mario': // ciao Mario