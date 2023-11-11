
const addTask = function () {
    let newTask = `
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#newTask input').value}
            </span>
            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
    `
    document.querySelector('#tasks').innerHTML += newTask
    document.querySelector('#newTask input').value = ''
  }

  const Completed = function () {
    let cose = document.querySelectorAll(".task");
    for (let i = 0; i < cose.length; i++) {
        cose[i].addEventListener('click' , function () {
            this.classList.toggle('completed');
            this.idList = 'completato';

        })
    }
  }

  const Delete = function (){
    let bottone = document.querySelectorAll('.delete');
    for (let i = 0; i < bottone.length; i++) {
        bottone[i].addEventListener('click', function(){
            this.parentNode.remove()
        })
    }
  }

  onload = function () {
    this.document.querySelector('form').addEventListener('submit',creaLista)
  }
const creaLista = function (a){
  a.preventDefault();
  addTask();
  Completed();
  Delete();
}
 
