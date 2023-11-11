let estratti = [];
let nome_giocatore = undefined;
let cliccato = false;

function impostaNome() {
  nome_giocatore = prompt("NOME GIOCAOTRE");
  let p = document.getElementById("NomeUtente");
  p.textContent = nome_giocatore;
}

function genera() {
  if (estratti.length == 76) return -1;
  let rand = -1;
  cliccato = true;
  do {
    rand = parseInt(Math.random() * 76 + 1);
  } while (estratti.includes(rand));
  estratti.push(rand); //aggiungo il numero estratto nell'array estratti
  goToTombola(rand); //vado ad evidenziare nella tabella il numero estratto
  goToCartelle(rand); //vado a controllare se il numero estratto è in una delle cartelle
  return rand;
}

function genera_numeri_cartella() {
  let numeri = [];
  let counter = 0;
  while (counter != 24) {
    let rand;
    do {
      rand = parseInt(Math.random() * 76 + 1);
    } while (numeri.includes(rand));
    numeri.push(rand);
    counter++;
  }
  return numeri;
}
function goToTombola(estratto) {
  let cella = document.getElementById(estratto);
  cella.className = "CambioColore";
}

function goToCartelle(estratto) {
  let array_cartelle = document.getElementsByClassName("cartelle");
  let celle = [];
  for(let i=0; i<array_cartelle.length; i++){
    celle = array_cartelle[i].querySelectorAll("td");
    console.log(celle);
    for(let j=0; j<celle.length; j++){
      if(celle[j].textContent == estratto) {
        celle[j].className = "CambioColore";
      }
    } 
  }
}

const estrazione = function () {
  let btn_estrai = document.getElementById("bottone");
  btn_estrai.addEventListener("click", genera);
};

const crea_cartella = function () {
  let content = document.getElementById("Tavolo");
  let tabella = document.createElement("table");
  let righe = 3,
    colonne = 8;

  let numeri_cartella = genera_numeri_cartella();
  let current = 0;
  for (let i = 1; i <= righe; i++) {
    let row = document.createElement("tr");
    for (let j = 1; j <= colonne; j++) {
      let col = document.createElement("td");
      col.id = "" + (current + 1);
      col.textContent = numeri_cartella[current];
      current++;
      row.appendChild(col);
    }
    tabella.appendChild(row);
  }
  tabella.className = "cartelle";
  if(cliccato==false){
    content.appendChild(tabella);
  }else{
    alert("Non puoi più aggiungere cartelle!!")
  }
};

const aggiungi_cartella = function () {
    let piu = document.getElementById("piu");
    piu.addEventListener("click", crea_cartella);
};

const elimina_cartella = function() {
let nCartelle= document.getElementsByClassName("cartelle");
if(nCartelle.length!=0)
    nCartelle[(nCartelle.length-1)].parentNode.removeChild(nCartelle[(nCartelle.length-1)]);
else alert("Nessuna Cartella Da Rimuore");

}
const rimuovi_cartella = function () {
    let piu = document.getElementById("meno");
    piu.addEventListener("click", elimina_cartella);
};



const crea_tombola = function () {
  let container = document.getElementById("tabellone");
  let righe = 4,
    colonne = 19; //419 = 76

  let tabella = document.createElement("table");

  tabella.className = "tombola";

  let current = 1;
  let titolo = document.createElement("thead");
  titolo.textContent = "Tombola";
  for (let i = 1; i <= righe; i++) {
    let row = document.createElement("tr");
    for (let j = 1; j <= colonne; j++) {
      let col = document.createElement("td");
      col.id = "" + current;
      col.textContent = current;
      current++;
      row.appendChild(col);
    }
    tabella.appendChild(row);
  }
  tabella.appendChild(titolo);
  container.append(tabella);
};



function calculateChristmasCountdown(){
    var now = new Date();
    var currentMonth = (now.getMonth() + 1);
    var currentDay = now.getDate();
    var nextChristmasYear = now.getFullYear();
    if(currentMonth == 12 && currentDay > 25){
        nextChristmasYear = nextChristmasYear + 1;
    }
    var nextChristmasDate = nextChristmasYear + '-12-25T00:00:00.000Z';
    var christmasDay = new Date(nextChristmasDate);
    var diffSeconds = Math.floor((christmasDay.getTime() - now.getTime()) / 1000);
    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    if(currentMonth != 12 || (currentMonth == 12 && currentDay != 25)){
        days = Math.floor(diffSeconds / (3600*24));
        diffSeconds  -= days * 3600 * 24;
        hours   = Math.floor(diffSeconds / 3600);
        diffSeconds  -= hours * 3600;
        minutes = Math.floor(diffSeconds / 60);
        diffSeconds  -= minutes * 60;
        seconds = diffSeconds;
    }
    document.getElementById('days').innerHTML = days + 'd ';
    document.getElementById('hours').innerHTML = hours + 'h ';
    document.getElementById('minutes').innerHTML = minutes + 'm ';
    document.getElementById('seconds').innerHTML = seconds + 's ';
    setTimeout(calculateChristmasCountdown, 1000);
}

calculateChristmasCountdown();

function __init__() {
  impostaNome();
  estrazione();
  crea_tombola();
  aggiungi_cartella();
  rimuovi_cartella();
}

__init__();
