/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
function cancat2str(a,b) {
  let tmp = a.split("").slice(0,2).concat(b.split("").slice(-3));
  console.log(tmp.join("").toUpperCase());
}
cancat2str("aa1111","11111bbb"); //AABBB

/* ESERCIZIO 2 (for)
Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
function crea_array(){
  let array= [];
  for(let i=0; i<10; i++)
    array[i] = ((parseInt(Math.random()*101)));
  return array;
}
console.log(crea_array());




/* ESERCIZIO 3 (filter)
Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

function cerca_pari(array){
  let a =  array.filter((x)=> x%2==0);
  return a;
}

console.log(cerca_pari(crea_array()))

/* ESERCIZIO 4 (forEach)
Scrivi una funzione per sommare i numeri contenuti in un array
*/


function somma(array){
  let somma = 0;
  array.forEach((x) => somma = somma + x)
  return somma;
}

let a = [1,2,3,4,5,6]; //21
console.log(somma(a))

/* ESERCIZIO 5 (reduce)
Scrivi una funzione per sommare i numeri contenuti in un array
*/


function somma_reduce(array){
  return array.reduce((valore, accumulatore) => valore + accumulatore)
}

let b = [1,2,3,4,5,6]; //21
console.log(somma_reduce(b))

/* ESERCIZIO 6 (map)
Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

function addNtoArr(array, n){
  let res = array.map((x)=>x+n)
  return res;
}

let c = [1,2,3,4,5,6]; 
console.log(addNtoArr(c,1))


/* ESERCIZIO 7 (map)
Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

function conta_stringhe(str){
  let res = str.map((x) => x.length);
  return res;
}

console.log(conta_stringhe(["EPICODE", "is", "great","ciao"]))

/* ESERCIZIO 8 (forEach o for)
Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

function dispari_arr(){
  let arr = [];
  for(let i=1; i<=99; i=i+2){
      arr.push(i);
  }
  return arr;
}

console.log(dispari_arr())

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
{
  Title: 'The Lord of the Rings: The Fellowship of the Ring',
  Year: '2001',
  imdbID: 'tt0120737',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
},
{
  Title: 'The Lord of the Rings: The Return of the King',
  Year: '2003',
  imdbID: 'tt0167260',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
},
{
  Title: 'The Lord of the Rings: The Two Towers',
  Year: '2002',
  imdbID: 'tt0167261',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
},
{
  Title: 'Lord of War',
  Year: '2005',
  imdbID: 'tt0399295',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
},
{
  Title: 'Lords of Dogtown',
  Year: '2005',
  imdbID: 'tt0355702',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
},
{
  Title: 'The Lord of the Rings',
  Year: '1978',
  imdbID: 'tt0077869',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
},
{
  Title: 'Lord of the Flies',
  Year: '1990',
  imdbID: 'tt0100054',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
},
{
  Title: 'The Lords of Salem',
  Year: '2012',
  imdbID: 'tt1731697',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
},
{
  Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
  Year: '1984',
  imdbID: 'tt0087365',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
},
{
  Title: 'Lord of the Flies',
  Year: '1963',
  imdbID: 'tt0057261',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
},
{
  Title: 'The Avengers',
  Year: '2012',
  imdbID: 'tt0848228',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
},
{
  Title: 'Avengers: Infinity War',
  Year: '2018',
  imdbID: 'tt4154756',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
},
{
  Title: 'Avengers: Age of Ultron',
  Year: '2015',
  imdbID: 'tt2395427',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
},
{
  Title: 'Avengers: Endgame',
  Year: '2019',
  imdbID: 'tt4154796',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
},
]

/* ESERCIZIO 9 (forEach)
Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

function older_film(){
  let trapezio = movies[0];
  movies.forEach((x) => {if(Number(x.Year) < Number(trapezio.Year)) trapezio = x;});
  return trapezio;
}
console.log(older_film());

/* ESERCIZIO 10
Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

function numero_film(){
  return movies.length;
}

/* ESERCIZIO 11 (map)
Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

function titoli(){
  let arr = movies.map((x) => x.Title)
  return arr;
}

console.log(titoli());

/* ESERCIZIO 12 (filter)
Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
function film2000(array) {
  let filmss = array.filter((x)=> Number(x.Year)>=2000);
  return filmss;
}
console.log(film2000(movies));

/* ESERCIZIO 13 (reduce)
Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
function sommaAnni(array) {
  return array.reduce((acc, valore) => parseInt(valore.Year) + acc,0);
}
console.log(sommaAnni(movies));

/* ESERCIZIO 14 (find)
Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

function cercaIMDBID(imdbID){
  return movies.find((x) => x.imdbID == imdbID);
}

console.log(cercaIMDBID("tt4154756"))

/* ESERCIZIO 15 (findIndex)
Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
function cercaFilm(anno){
  return movies.findIndex((x) => x.Year == anno)
}

console.log(cercaFilm(2012));
