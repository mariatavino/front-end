/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
function area(b , h) {
    return b*h;
}
area(11,12);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(a, c) {
    let somma = a+c;
    return a == c ? somma*3 : somma;
}

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(a) {
    return a>19 ? (a-19)*3 : 19-a;
}

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    return (n>20 && n<=100) || n==400;
}

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(a) {
   return  a.split(" ").at(0)=="EPICODE" ? a : "EPICODE " + a;
    
}
console.log(epify("mio dio santissimo"));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(n) {
    
    return n > 0 ?  n % 3 == 0 || n % 7 == 0 : "Unexpected value";
}

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(a) {
   /*  return a.split("").reverse().join("");
    
    let newstrg = ""
    for ( let i = a.length - 1 ; i >= 0; i--) {
        newstrg += a[i];
    }
    return newstrg;*/
    a = a.split("");
    for(let i=0; i<(a.length)/2;i++){
        let tmp = a[i]
        a[i] = a[a.length-1-i];
        a[a.length-1-i] = tmp;
    }   
    return a.join("");
}


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(a) {
    a = a.split(" ");
    for (let i = 0; i < a.length; i++) {
        let tmp = a[i].split("");
        tmp[0] = tmp[0].toUpperCase();
        a[i] = tmp.join("")+ " ";
    }
    a[a.length-1] = a[a.length-1].trimEnd();
    return a = a.join("");
}
console.log(upperFirst("patatino broccolino"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(a="") {
    a = a.slice(1 , (a.length-1));
    return a;
}

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
   let lista = new Array(n);
   for (let i = 0; i < n ; i++) {
        lista[i] = parseInt(Math.random()*10);
   }
   return lista;
}
console.log(giveMeRandom(3));
/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

function checkArray(lista) {
    let somma = 0;
    for (let i = 0; i < lista.length; i++) {
        if(lista[i]>5){
            console.log("é maggiore di 5")
            somma= lista[i] + somma;
        }else{
            console.log("non è maggiore di 5");
        }
    }
    return somma;
}
console.log(checkArray(giveMeRandom(4)));
/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

let shoppingCart = [{"price":0 , "name":0 , "id":0 , "quantity":0}];
function shoppingCartTotal(shoppingCart) {
    let totale = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        totale += shoppingCart[i].price*shoppingCart[i].quantity;
    }    
    return totale;
}
/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/
let newObject = {"price":0 , "name":0 , "id":0 , "quantity":0};

function addToShoppingCart(newObject) {
    shoppingCart.push(newObject);
    return shoppingCart.length;
}

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

function maxShoppingCart(shoppingCart) {
    let max = shoppingCart[0];
    for (let i = 1; i < shoppingCart.length; i++) {
        if(shoppingCart[i].price > max) 
            max = shoppingCart[i].price;
    }
    return max;
}

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

function latestShoppingCart(shoppingCart) {
    let ultimo = shoppingCart[shoppingCart.length-1];
   // return ultimo.pop();
     return ultimo;
}

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.


function loopUntil(x) { 
    let counter = 0;
    while(true){
        let pippo = Math.abs(parseInt(Math.random()*10-1));
        if(pippo > x) counter++;
        if(counter == 3) {
            console.log("Siamo usciti con "+pippo);
            break;
        }
        console.log(pippo);
    }
}
*/

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/
let lista = [3,4,5,6,7,1,5,9,"baldracca",4];
function average(lista) {
    let i = 0, qt = 0, somma = 0;
    while (i < lista.length) {
        if(!isNaN(lista[i])){
            somma += lista[i];
            qt++
        }
        i++;
    }
    return somma/qt;
}
console.log(average(lista));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

function longest(a) {
    let max = a[0]
    for (let i = 1; i < a.length; i++) {
        if(a[i].length > max.length) max = a[i];
    }
    return max;
}

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

function anti_spam(emailContent) {
return emailContent.search(/SPAM/i) == -1 && emailContent.search(/SCAM/i) == -1 ;
}
/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/
function dateDiff(a) {
    let inizio = new Date(a), oggi = new Date();
    let data1= inizio.getTime();
    let data2= oggi.getTime();
    let millToDays= 1000 * 60 * 60 * 24;
    let diff = (data2 - data1);
    return Math.round(diff/millToDays);
  }
  console.log(dateDiff('10/31/2023'));


/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

function matrixGenerator(x,y) {
    let matrix = new Array(y);
    let add=0;
    for (let i = 0; i < y; i++) {
        matrix[i] = new Array(x);
        for(let j = 0; j < x ; j++){
            matrix[i][j] = (i.toString() + j.toString());
        }
    }
return matrix;
}
console.log(matrixGenerator(3,4));
