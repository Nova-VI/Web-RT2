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
/**
    * function used to add a ligne in the ToDo list containing  (name + content ) and a delete button
    * @param{string} name - String that contain The time(can be day , hour or whatever) in which you will persuade the activity
    * @param{string} content - String that contain the content of the activity
    */
function addTask(name, content) {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const contentCell = document.createElement('td');
    const actionCell = document.createElement('td');
    const deleteButton = document.createElement('button');

    nameCell.textContent = name;
    contentCell.textContent = content;
    const trash = document.createElement("img");
    trash.src = "img.png"
    trash.width = "30";
    trash.height = "30";
    deleteButton.appendChild(trash);
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
/**
 * 
 * @param {HTMLElement} element - The element you want to add animation to 
 * @param {String} finalClass - a string that represant the class name  to which the element whil transfer to
 * @param {number} delay  - time to wait before starting the animation
 */
function animation(element, finalClass, delay) {
    setTimeout(() => {
        element.classList.add(finalClass);
    }, delay);
}