document.addEventListener("DOMContentLoaded", () => {
  let taskForm = document.querySelector('#create-task-form');
  let taskField = document.querySelector('#new-task-description');
  let tasksList = document.querySelector('#tasks');

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let newTask = document.createElement('li');
    newTask.innerHTML = taskField.value;
    tasksList.appendChild(newTask);
    taskField.value = '';
  });
  


});
