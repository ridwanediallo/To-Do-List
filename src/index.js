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
   const dots = document.createElement('button')
   const divider = document.createElement('hr');

   item.classList.add('item');
   itemsLeft.classList.add('left-itmes');

   inputCheck.classList.add('checkbox');
   inputCheck.setAttribute('type', 'checkbox')

   par.classList.add('text');
   par.textContent = el.desp;
   dots.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
 </svg>`;

   itemsLeft.append(inputCheck, par);
   item.append(itemsLeft, dots);


   list.append(item, divider);

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



