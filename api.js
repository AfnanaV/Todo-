// api.js

document.addEventListener('DOMContentLoaded', function () {
    let completedTasksCount = 0; // Variable to keep track of completed tasks
    let tasksData; // Store the tasks data globally

    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            tasksData = data; // Store tasks data globally

            // Now that you have the data, proceed to display the ToDo list
            displayTasksAndListenForCompletion(tasksData);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    function displayTasksAndListenForCompletion(tasks) {
        const todoContainer = document.getElementById('todo-container');
        todoContainer.innerHTML = ''; // Clear previous content

        tasks.forEach(task => {
            const taskItem = document.createElement('div');
            taskItem.classList.add('task-item');
            taskItem.innerHTML = `
                <input type="checkbox" ${task.completed ? 'checked' : ''} data-task-id="${task.id}">
                <span>${task.title}</span>
            `;
            todoContainer.appendChild(taskItem);

            // Add an event listener to the checkboxes to track completed tasks
            taskItem.querySelector('input[type="checkbox"]').addEventListener('change', function () {
                if (this.checked) {
                    completedTasksCount++;
                    checkCompletedTasks().then(result => {
                        if (result) {
                            alert(`Congratulation! You have successfully completed ${completedTasksCount} tasks.`);
                        }
                    });
                } else {
                    completedTasksCount--;
                }
            });
        });
    }

    function checkCompletedTasks() {
        return new Promise((resolve, reject) => {
            if (completedTasksCount >= 5) {
                resolve(true);
            } else {
                resolve(false);
            }
        });
    }

    document.getElementById('logout-link').addEventListener('click', function () {
        window.location.href = 'index.html'; // Redirect to index.html
    });
    
});
