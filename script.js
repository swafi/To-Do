// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('todo-form');
    const taskTable = document.getElementById('task-table').querySelector('tbody');
    const taskInput = document.getElementById('task-input');
    const taskDatetime = document.getElementById('task-datetime');

    taskForm.addEventListener('submit', addTask);

    function addTask(e) {
        e.preventDefault();

        const taskText = taskInput.value;
        const taskTime = taskDatetime.value;

        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${taskText}</td>
            <td>${taskTime}</td>
            <td>
                <button class="complete">Complete</button>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </td>
        `;

        taskTable.appendChild(tr);

        taskInput.value = '';
        taskDatetime.value = ' ';

        tr.querySelector('.complete').addEventListener('click', completeTask);
        tr.querySelector('.edit').addEventListener('click', editTask);
        tr.querySelector('.delete').addEventListener('click', deleteTask);
    }

    function completeTask() {
        const tr = this.closest('tr');
        tr.classList.toggle('completed');
        const editButton = tr.querySelector('.edit');
        
        if (tr.classList.contains('completed')) {
            editButton.classList.add('disabled');
            editButton.disabled = true;
        } else {
            editButton.classList.remove('disabled');
            editButton.disabled = false;
        }
    }

    function editTask() {
        const tr = this.closest('tr');
        const taskText = tr.children[0].textContent;
        const taskTime = tr.children[1].textContent;

        taskInput.value = taskText;
        taskDatetime.value = taskTime;

        taskTable.removeChild(tr);
    }

    function deleteTask() {
        const tr = this.closest('tr');
        taskTable.removeChild(tr);
    }
});
