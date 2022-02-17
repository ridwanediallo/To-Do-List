import './style.css';

const list = document.querySelector('.list');
const inputTodo = document.querySelector('.add-todo');
const addTodoBtn = document.querySelector('.submit');








class TodoTask {
  constructor(desp, arr, done = false) {
    this.desp = desp;
    this.index = arr.length + 1;
    this.done = done;
  }
}


class TaskLisk {
  constructor(){
    this.tasks = [];
  }

  saveTolocal(){
	  localStorage.setItem('tasks', JSON.stringify(this.tasks));
}

getFromLocal = () => {
  this.tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
}



renderTodo = (list) => {

  list.innerHTML = '';
  this.tasks.forEach((el, i) => {

   const item = document.createElement('li'); 
   const itemsLeft = document.createElement('div'); 
   const inputCheck = document.createElement('input'); 
   const par = document.createElement('p'); 
   const dots = document.createElement('i')

   item.classList.add('item');
   itemsLeft.classList.add('left-itmes');

   inputCheck.classList.add('checkbox');
   inputCheck.setAttribute('type', 'checkbox')

   par.classList.add('text');
   par.textContent = el.desp;
  //  dots.classList.add('fa-solid fa-ellipsis-vertical');

   itemsLeft.append(inputCheck, par);
   item.append(itemsLeft, dots);


   list.appendChild(item);

    // list.innerHTML = ` ${list.innerHTML}
    //   <li class="item">
    //   <div class="left-itmes">
    //   <input type="checkbox" class="checkbox">
    //     <p id=${i} class="text">${el}</p>
    //   </div>
    //   <i class="fa-solid fa-ellipsis-vertical"></i>
    // </li>
    // <hr>
    //   `;
  })
}

 addTodo(desp, tasks) {
   const todoItems = new TodoTask(desp, tasks);
   tasks.push(todoItems);
 }
}

const myTasks = new TaskLisk();


document.addEventListener('DOMContentLoaded', () => {
    myTasks.getFromLocal(myTasks.tasks);
    myTasks.renderTodo(list);
})

addTodoBtn.addEventListener('click', (e) => {
  e.preventDefault();
  myTasks.addTodo(inputTodo.value, myTasks.tasks);
  myTasks.renderTodo(list);
  myTasks.saveTolocal();
})



