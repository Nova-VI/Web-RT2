const form = document.getElementById('add-form');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
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
    deleteButton.addEventListener('click', function() {
        row.remove();
    });

    actionCell.appendChild(deleteButton);
    row.appendChild(nameCell);
    row.appendChild(contentCell);
    row.appendChild(actionCell);
    todoList.appendChild(row);
}
