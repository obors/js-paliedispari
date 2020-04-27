//ioco pari o dispari contro il pc: chiedere all'utente un numero tra 1 e 5 e generare un numero random tra 1 e 5. Chiedere all'utente se sceglie pari o dispari, quindi fare la somma dei due numeri (giocata utente + giocata pc), quindi valutare se il risultato è pari o dispari e comunicare all'utente se ha vinto o meno

// var num = Math.floor(Math.random() * num);
// console.log(num);
// //attribuzione del codice random
//
// var numero = prompt('Inserisci il tuo numero')
// console.log(numero);
// //attribuzione del codice manuale
//
// if (numero >=1 && numero <= 6){ //&& num >= 1 && num <= 6){
//   alert("Complimenti hai Vinto !!!")
// } else if (num == numero){
//   alert("Pareggio !!")
// }else {
//   alert("Siamo spiacenti non hai Vinto !!!");
// }
//stampa risultato

// Verificare attraverso una funzione se il numero inserito dell’utente è pari o dispari

// funzione per verificare se un numero è pari o dispari
// restituisce true se il numero passato in input è pari, false altrimenti
function isEven(numero) {
    var resto = numero % 2;
    if(resto == 0) {
        // il numero è pari
        // console.log('pari');
        return true;
    } else {
        // il numero è dispari
        // console.log('dispari');
        return false;
    }
}

// chiedo un numero all'utente
var numero_utente = parseInt(prompt('inserisci un numero'));

var esito_is_pari = isEven(numero_utente);
console.log('il numero ' +numero_utente+' è pari? ' + esito_is_pari);
if(esito_is_pari == true) {
    // la funzione ha restituito true => il numero è pari
    console.log('il numero ' + numero_utente + ' è pari');
} else {
    // la funzione ha restituito false => il numero è dispari
    console.log('il numero ' + numero_utente + ' è dispari');
}
