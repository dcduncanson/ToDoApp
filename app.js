const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
const button = document.querySelector('input[type="button"');
const input = document.querySelector("input[type='text']");

let storedTasks = JSON.parse(localStorage.getItem('tasks'));

function newTaskHandler() {
    let taskText = document.createElement('span');
    taskText.innerText = input.value;


    const removeTask = document.createElement('button');
    removeTask.innerText = 'X';
    removeTask.addEventListener('click', function (e) {
        let taskItem = this.parentElement;
        taskItem.remove();
    })

    const completeTask = document.createElement('button');
    completeTask.innerHTML = '&check;';
    completeTask.addEventListener('click', function (e) {
        if (taskText.style.textDecoration == 'none') {
            taskText.style.textDecoration = 'line-through';
        } else {
            taskText.style.textDecoration = 'none';
        }


    })

    let newTask = document.createElement('li');
    newTask.append(taskText, completeTask, removeTask);
    newTask.setAttribute('data-id', "text");
    taskList.appendChild(newTask);
    taskForm.reset();
    storedTasks.push({
        task: taskText.innerText,
    })

    for (let i = 0; storedTasks.length; i++) {
        let oldTask = document.createElement('li');
        oldTask.innerText = storedTasks[i].task;
        taskList.appendChild(oldTask);
    }

    localStorage.setItem('tasks', JSON.stringify(storedTasks));

}

button.addEventListener('click', newTaskHandler);

