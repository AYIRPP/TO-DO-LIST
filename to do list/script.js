function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    taskInput.value = '';
  
    if (taskText === '') {
      return;
    }
  
    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <input type="checkbox" onclick="toggleComplete(this)">
      <span>${taskText}</span>
      <span class="delete" onclick="deleteTask(this)">X</span>
    `;
  
    taskList.appendChild(taskItem);
  }
  
  function toggleComplete(checkbox) {
    const taskText = checkbox.nextElementSibling;
    if (checkbox.checked) {
      taskText.classList.add('complete');
    } else {
      taskText.classList.remove('complete');
    }
  }
  
  function deleteTask(deleteButton) {
    const taskItem = deleteButton.parentElement;
    taskItem.remove();
  }
  