/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Stringa: una stringa è un carattere o una sequenza di caratteri che vengono riconosciuti dall'utilizzo di apici singoli o doppi 
   Numero: un dato di tipo numero ammette numeri decimali e interi facendo attenzione ad usare il punto e non la virgola nei decimali
   Booleano: un dato di tipo booleano ammette solo true e false e viene utilizzato per controllare o per far prendere decisioni al nostro codice
  Undifined: un dato di tipo undifined ha valore e tipo non definito
  Null: un dato di tipo null ammette solo un valore ovvero NULL.
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Maria";
console.log(name)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let somma = 12+20;
console.log(somma)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

name = "Tavino"
const A = 10;
// A = 11; l'argomento da errore di tipo type

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = 4 - x;
console.log(sottrazione)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
if(name1==name2) {
  console.log("Sono uguali")
}else{
  console.log("Sono diversi")
}

if(name1.toLowerCase==name2.toLowerCase) {
  console.log("Sono uguali")
}else{
  console.log("Sono diversi")
}

console.log(name1==name2?"sono uguali":"sono diversi");
console.log(name1.toLowerCase==name2.toLowerCase?"sono uguali":"sono diversi");
