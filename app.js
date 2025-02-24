function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        
        // Crear el nuevo item de tarea
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Crear botón de borrar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = () => taskItem.remove();

        // Crear funcionalidad de marcar como completada
        taskItem.onclick = () => taskItem.classList.toggle('completed');

        // Agregar el botón de eliminar a la tarea
        taskItem.appendChild(deleteButton);

        // Agregar la tarea al listado
        taskList.appendChild(taskItem);
        
        // Limpiar el campo de entrada
        taskInput.value = '';
    } else {
        alert("Por favor, ingresa una tarea.");
    }
}
