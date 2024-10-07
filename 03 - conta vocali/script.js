/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function my_func(string) {
    let vowels = 'aeiou';
    let vowels_count = 0;
    for (let i = 0; i < string.length; i++) {
        if (vowels.indexOf(string[i]) !== -1) {
            vowels_count += 1;
        }
    }
    return vowels_count;
}

// Invoca la funzione qui e stampa il risultato in console
let total_vowels = my_func(word);
console.log(total_vowels);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)