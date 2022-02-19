import './style.css';

const list = document.querySelector('.list');
const inputTodo = document.querySelector('.add-todo');
const addTodoBtn = document.querySelector('.submit');

class TodoTask {
  constructor(desp, arr, done = false) {
    this.desp = desp;
    this.index = arr.length;
    this.done = done;
  }
}

class TaskLisk {
  constructor() {
    this.tasks = [];
  }

  saveTolocal() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getFromLocal = () => {
    this.tasks = localStorage.getItem('tasks')
      ? JSON.parse(localStorage.getItem('tasks'))
      : [];
  };

  renderTodo = (list) => {
    list.innerHTML = '';
    this.tasks.forEach((el, i) => {
      const item = document.createElement('li');
      item.classList.add('item');
      item.id = i;
      item.innerHTML = `
          <div class="left-itmes">
          <input type="checkbox" class="checkbox" ${el.done ? 'checked' : ''}>
          <input type='text' class='todo ${
            el.done ? 'line-through' : ''
          }' value='${el.desp}'>
          </div>
          <div>
          <i class="fa-solid fa-ellipsis-vertical icon-dots"></i>
          <i class="fa-solid fa-trash-can  icon-remove  hidden"></i>
          </div>
    `;

      item.addEventListener('click', () => {
        const iconRemove = item.querySelector('.icon-remove');
        const iconDots = item.querySelector('.icon-dots');
        iconRemove.classList.toggle('hidden');
        iconDots.classList.toggle('hidden');
        iconRemove.addEventListener('click', (event) => {
          const taskItem = event.target.parentNode.parentNode;
          this.removeItem(taskItem);
        });
      });

      item.style.borderBottom = '1px solid #aaa';

      const checkBox = item.querySelector('.checkbox');
      const todo = item.querySelector('.todo');
      todo.classList.add('todo-style');
      checkBox.addEventListener('click', this.clickCheck);

      list.append(item);
    });
  };

  addTodo(desp, tasks) {
    if (desp !== '') {
      const todoItems = new TodoTask(desp, tasks);
      this.tasks.push(todoItems);
    }

    inputTodo.value = '';
  }

  clickCheck = (e) => {
    const todo = e.target.parentNode.children[1];
    const div = e.target.parentNode;
    const { id } = div.parentNode;
    this.tasks[id].done = !this.tasks[id].done;
    todo.classList.toggle('line-through');
    this.saveTolocal();
  };

  removeFromLocal(index) {
    this.tasks = this.tasks.filter((task) => +task.index !== +index);
    this.tasks.forEach((el, i) => {
      el.index = i;
    });
    this.saveTolocal();
    this.renderTodo(list);
  }

  removeItem(item) {
    const idItem = item.id;
    this.removeFromLocal(idItem);
  }
}

const myTasks = new TaskLisk();

document.addEventListener('DOMContentLoaded', () => {
  myTasks.getFromLocal(myTasks.tasks);
  myTasks.renderTodo(list);
});

addTodoBtn.addEventListener('click', (e) => {
  e.preventDefault();
  myTasks.addTodo(inputTodo.value, myTasks.tasks);
  myTasks.renderTodo(list);
  myTasks.saveTolocal();
});
