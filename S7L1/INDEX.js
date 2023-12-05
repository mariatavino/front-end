// 1. Crea una classe User per la creazione di oggetti di tipo “utente”. 
// Il suo costruttore dovrà inizializzare ogni oggetto utente con i seguenti attributi:
// - firstName 
// - lastName
// - age
// - location 
// Aggiungi alla classe User anche un metodo che restituisca il confronto con l'età di un'altra persona. 
// Ad esempio, date due istanze della classe utente “x” e “y” inizializzate con le proprietà sopra descritte,
// il metodo dovrà restituire una frase simile a “x è più vecchio di y” a seconda del risultato del confronto.
// Crea degli oggetti a partire dalla classe User e verifica che la comparazione tra le età funzioni correttamente.

class User {
    constructor(nome, cognome, età, indirizzo){
        this.firstName = nome;
        this.lastName = cognome;
        this.age = età;
        this.location = indirizzo;
    }
    check(utente){
        if ( this.età > utente.età ) {
            console.log(this.firstName + 'è più vecchio di' + utente.firstName);
        }else if (this.età < utente.età){
            console.log(utente.firstName + 'è più vecchio di' + this.firstName);
        }else{
            console.log(this.firstName + 'ha la stessa età di' + utente.firstName);
        }
    }
}

// 2. Crea un form per la creazione di oggetti “Pet” (animali domestici). 
// La classe Pet dovrà essere dotata delle seguenti proprietà:
// - petName
// - ownerName
// - species // (cane, gatto, coniglio etc.)
// - breed // (labrador, soriano, nano etc.) 
// Nella classe che utilizzerai per creare questi oggetti aggiungi anche un metodo che restituisca true se due animali 
// condividono lo stesso padrone. Crea, raccogliendo i dati dal form, diverse istanze della classe Pet e mostrane 
// i dati in una lista sottostante.


let PetList = [];
let lista = document.getElementById('petListContainer');
document.getElementById("btn").addEventListener('click', DatiForm);

class Pet{
    constructor(nome, padrone,specie, razza){
        this.petName = nome;
        this.ownerName = padrone;
        this.species = specie;
        this.breed = razza;
    }
    checkPadrone(animale){
        return this.ownerName == animale.ownerName;
    }
}

function DatiForm() {
    let nome = document.getElementById('petName').value;
    let padrone = document.getElementById('ownerName').value;
    let specie = document.getElementById('species').value;
    let razza = document.getElementById('breed').value;
    let newPet= new Pet(nome, padrone,specie, razza);
    PetList.push(newPet);
    let pet = document.createElement('p');
    pet.textContent = "il nome dell'animale è " + String(newPet.petName) +" il padrone è "+ newPet.ownerName + " la specie è " + newPet.species + " la razza infine è "+ newPet.breed;
    lista.appendChild(pet);
}
