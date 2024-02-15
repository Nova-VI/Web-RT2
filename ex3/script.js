const form = document.getElementById('add-form');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('task-name').value;
    const content = document.getElementById('task-content').value;

    if (name.trim() === '' || content.trim() === '') {
        alert('Please enter both task name and content.');
        return;
    }

    addTask(name, content);
    form.reset();
});

function addTask(name, content) {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const contentCell = document.createElement('td');
    const actionCell = document.createElement('td');
    const deleteButton = document.createElement('button');

    nameCell.textContent = name;
    contentCell.textContent = content;
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        animation(deleteButton, "remove", 10);
        animation(contentCell, "remove", 150);
        animation(nameCell, "remove", 300);
        animation
        //removing the row after a delay to ensure the completion of the animations
        setTimeout(() => {
            row.remove();
        }, 550);
    });

    actionCell.appendChild(deleteButton);
    row.appendChild(nameCell);
    row.appendChild(contentCell);
    row.appendChild(actionCell);
    nameCell.classList.add("nameCell");
    contentCell.classList.add("contentCell");
    deleteButton.classList.add("custom-button");
    animation(nameCell, "show", 10);
    animation(contentCell, "show", 150);
    animation(deleteButton, "show", 300);
    todoList.appendChild(row);
}
function animation(element, finalClass, delay) {
    setTimeout(() => {
        element.classList.add(finalClass);
    }, delay);
}