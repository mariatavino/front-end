/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.

let n1 = 8;
let n2 = 7.8;

let res = n1>n2 ? "è più grande " + n1 :"è più grande " + n2;
alert(res)
console.log(res);
*/
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.


let a = prompt("Dammi un numero: ",0 );
console.log(a!=5 ? "not equal": "equal");

*/
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)


console.log( a % 5 === 0 ? "è divisibile per 5":"non è divisibile per 5");
*/
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.


let b = prompt("Dammi un altro numero: ",0);
//a = Number(a);
//b = Number(b);

a = +a;
b = +b;

if (a==8 || b==8) {
    console.log("uno dei due è uguale a 8")
}else if(a-b==8 || a+b==8 || b-a==8){
  console.log("non sono uguali a 8 ma la loro addizione/sottrazione è uguale a 8");
}else{
  console.log(" non sono ne uguali ne la loro sottrazione/addizione è uguale a 8");
}
*/
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.


let totalShoppingCart = prompt("Dammi il totale del carrello: ");
totalShoppingCart= +totalShoppingCart;
let tot = (totalShoppingCart>50 ? totalShoppingCart + "! Hai diritto alla spedizione gratuita" : totalShoppingCart<50 ? totalShoppingCart+10 : "Dati non validi")
alert("Il totale è " + tot );
*/
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.


let totalShoppingCart = prompt("Dammi il totale del carrello: ");
totalShoppingCart = +totalShoppingCart;
totalShoppingCart = totalShoppingCart * 0.8;
let tot = (totalShoppingCart>50 ? totalShoppingCart + "€! Hai diritto alla spedizione gratuita" : totalShoppingCart<50 ? totalShoppingCart+10 : "Dati non validi")
alert("Il totale è " + tot + "€");
*/
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.


const numeri = [3,7,2];
console.log(numeri.sort());
*/
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").


let f = prompt("Inserisci ciò che vuoi: ");
if(isNaN(f)){
     console.log("Il dato inserito non è un numero");
}else{
    console.log("Il dato inserito è un numero");
}
*/
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)


let g = prompt("Inserisci un numero: ");
console.log(g % 2 ===0 ? "Il numero inserito è pari" : "Il numero inserito è dispari");
*/
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


let val = 7
if (val < 5) {
    console.log("Meno di 5");
  } else if (val < 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }
*/
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = "Toronto"
console.log(me);
 */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = "Toronto";
delete me.lastName;
console.log(me);
*/
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".


const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = "Toronto"
me.skills.pop();
console.log(me);
*/

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.


const numeri = new Array(10);
numeri[0] = 1;
numeri[1] = 2;
numeri[2] = 3;
numeri[3] = 4;
numeri[4] = 5;
numeri[5] = 6;
numeri[6] = 7;
numeri[7] = 8;
numeri[8] = 9;
numeri[9] = 10;
console.log(numeri);
*/
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.

numeri[9] = 100;
*/