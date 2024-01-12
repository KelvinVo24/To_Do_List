const form = document.getElementById('form');
const inputBox = document.getElementById('input');
const todosUL = document.getElementById('todos');
const headerStatus = document.querySelector('header_status');
const btnStatuses = document.querySelectorAll('.header_status button');

btnStatuses.forEach(btnStatus => {
    btnStatus.addEventListener('click', () => {
        // Remove active class from all buttons
        btnStatuses.forEach(btn => btn.classList.remove('active'));

        // Add active class
        btnStatus.classList.add('active');

        filterTodo(btnStatus);
    });
});


form.addEventListener('submit', (e) =>{
    e.preventDefault();

    addTodo();
})

headerStatus.addEventListener("click", filterTodo);


function addTodo(){
    let todoText = inputBox.value;
    // if(todo){
    //     todoText = todo.text
    // }

    // if(todoText === null || todoText === ''){
    //     alert('Please enter a task')
    // }

    if(todoText){
        const todoEl = document.createElement('li');
        // todoEl.innerText = todoText

        const icon = document.createElement('i');
        icon.className = 'fa-regular fa-circle'; // Initial icon class
        todoEl.appendChild(icon);

        const textSpan = document.createElement('span');
        textSpan.innerText = todoText;
        todoEl.appendChild(textSpan);

        const btnTrash = document.createElement('button');
        btnTrash.innerHTML = '<i class="fa-solid fa-trash"></i>';
        todoEl.appendChild(btnTrash);

        const btnEdit = document.createElement('button');
        btnEdit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
        todoEl.appendChild(btnEdit);

        // todoEl.addEventListener('click', () =>{
        //     todoEl.classList.toggle('completed')
        // })

        icon.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
            // Toggle icon class when the task is completed or not
            icon.className = todoEl.classList.contains('completed') ? 'fas fa-check-circle' : 'fa-regular fa-circle';
        });

        //Delete
        btnTrash.addEventListener('click', (e) => {
            e.preventDefault();
            todoEl.remove();      
        })           
        

        //Edit
        btnEdit.addEventListener('click', () =>{
            editTodo(todoEl, textSpan);
        })

        todosUL.appendChild(todoEl);
        input.value = '';
    }
}



function editTodo(todoEl, textSpan, inputBox) {
    const currentText = textSpan.innerText;
    const editText = prompt('Edit task:', currentText);

    if (editText !== null) {
        textSpan.innerText = editText;
    } else{
       alert('Oke bay bi')
    }
    

    // const currentText = textSpan.innerText;

    // // Create an input element
    // const inputEdit = document.createElement('input');
    // inputEdit.type = 'text';
    // inputEdit.value = currentText;

    // // Replace textSpan with the input element
    // todoEl.replaceChild(inputEdit, textSpan);

    // // Focus the input element
    // inputEdit.focus();

    // // Handle keydown event to save changes on Enter key
    // inputEdit.addEventListener('keydown', (e) => {
    //     if (e.key === 'Enter') {
    //         const editText = inputEdit.value.trim();

    //         if (editText !== '') {
    //             textSpan.innerText = editText;
    //         }

    //         // Replace the input element with the original textSpan
    //         todoEl.replaceChild(textSpan, inputEdit);
    //     }
    // });
}



function filterTodo(btnStatus) {
    const todos = todosUL.children;

    for (const todo of todos) {
        switch (btnStatus.value) {
            case 'all':
                todo.style.display = 'block';
                break;
            case 'completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'block';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'incompleted':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'block';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    }
}




