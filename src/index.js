import './style.css';

const list = document.querySelector('.list');
const inputTodo = document.querySelector('.add-todo');
const addTodoBtn = document.querySelector('.submit');







class TodoTask {
  constructor(desp, index, done) {
    this.desp = desp;
    this.index = index;
    this.done = done;
  }
}


class TaskLisk {
  constructor(){
    this.tasks = [
      {desp: 'go out'},
      {desp: 'go out'},
      {desp: 'go out'},
      {desp: 'go out'},     
    ];
  }

  saveTolocal(){
	  localStorage.setItem('tasks', JSON.stringify(this.tasks));
}

getFromLocal = () => {
  localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
}


renderTodo = (list) => {
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

}

const myTasks = new TaskLisk();

myTasks.renderTodo(list);





