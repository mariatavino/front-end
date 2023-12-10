// Crea un semplice form di registrazione con un input field in cui l'utente possa inserire il proprio nome.
//  A fianco di questo input field crea due pulsanti: uno salverà il valore in localStorage, 
//  uno rimuoverà il valore precedentemente salvato (se presente). Mostra sopra l’input field il valore 
//  precedentemente salvato, se presente. 

//Crea un contatore che tenga conto del tempo che passa, utilizzando sessionStorage. 
//Aggiornando la pagina il valore prosegue, chiudendo la pagina - ovviamente - ricomincia. 
//  Il valore del contatore deve aggiornarsi ad ogni secondo.

let timer = document.getElementById('timer');
let log_btn = document.getElementById('log_btn');
let delete_btn = document.getElementById('delete_btn');
let i = sessionStorage.getItem("count") ? parseInt(sessionStorage.getItem("count")) : 0 ;

const check = function(){
 if(localStorage.getItem('usr')){
     txt = 'ciao' + localStorage.getItem('usr')
 }else{
     txt = 'no data'
 }
 document.querySelector('.title').innerHTML = txt;
}

const save = function(){
    let usr = document.getElementById('usr').value
    localStorage.setItem('usr', usr);
    check()
}

const deleteData = function() {
    localStorage.removeItem('usr')
    check()
}

const conta = function() {
    i = i+1;
    timer.innerText = i + " secondi di sessione aperta";
    sessionStorage.setItem('count',i);
}
window.onload = check();
log_btn.addEventListener("click",save());
delete_btn.addEventListener("click",deleteData());
setInterval (conta, 1000);
