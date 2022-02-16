import './style.css';

const container = document.querySelector('.container');
const refresh = document.querySelector('.refresh');
const list = document.querySelector('.list');
const inputTodo = document.querySelector('.input-todo');


let todoList = [
    {
        id: 0,
        do: 'wash the dishes',
        boolean: false
    },
    {
        id: 1,
        do: 'complete to do list project',
        boolean: false
    },
    {
        id: 2,
        do: 'fix care',
        boolean: false
    },
];


     for(let i = 0; i < todoList.length; i ++) {
        
      list.innerHTML = ` ${list.innerHTML}
        <li class="item">
        <div class="left-itmes">
        <input type="checkbox" class="checkbox">
          <p id=${todoList[i].id} class="text">${todoList[i].do}</p>
        </div>
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </li>
      <hr>
        `;
    } 

