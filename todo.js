document.getElementById('addTodoBtn').addEventListener('click', addTodo);
document.getElementById('filterAll').addEventListener('click', filterAll);
document.getElementById('filterCompleted').addEventListener('click', filterCompleted);
document.getElementById('filterPending').addEventListener('click', filterPending);

var todos = [

];

function addTodo(){
    const todoInput = document.getElementById('todoInput');
    const todoInputValue = todoInput.value.trim()

    if (todoInputValue){
        const todo  = {
            text: todoInputValue,
            completed: false
        };
        console.log("dfghjkl",todo);;
        todos.push(todo)
        todoInput.value = ""; //clear the  todo Input element 
        renderTodos(); 
        // autoResize();     
    }else{
        alert('Please enter a todo item')
    }
}
    //trying to add a scroll to textarea

        // type="text/javascript">
        // textarea = document.querySelector("todoInput");
        // textarea.addEventListener('input', autoResize, false);

        // function autoResize() {
        //     this.style.height = 'auto';
        //     this.style.height = this.scrollHeight + 'px';
        // }
        

    const inputContainer = document.getElementById('inputContainer');
    document.getElementById('addNewTask').addEventListener('click', () =>{
       if (inputContainer.style.display === 'none'){
            inputContainer.style.display = 'block'
       }
       else{
        inputContainer.style.display = 'none';
       }
        console.log('fcvshbjnpl')
    })

    // time and date widget
    options = {
        year: 'numeric', month: 'long', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric'
      };
      const clock = () => dateTime.innerText=new Intl.DateTimeFormat('en-EN', options).format(new Date())
      clock()
      setInterval(clock, 1000);
  

function renderTodos(filter ='all'){
    const todosList = document.getElementById('todosList');
    todosList.innerHTML = '';

    // console.log("schbjxnkl", todosList);

    todos.forEach((todo, index) => {
        if(filter === 'completed' && !todo.completed) return;
        if(filter === 'pending' && todo.completed) return;

        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = todo.text;
        p.id = 'paragraph';
        li.appendChild(p);
        console.log('dfghj', li)

        // li.textContent = todo.text;
        // li.className = "style";
        if(todo.completed){
            li.classList.add('completed');
        }
        
        const div = document.createElement('div');
        div.classList.add('li-button-container');

        const completedBtn = document.createElement('button');
        completedBtn.classList.add('completed-btn');
        div.appendChild(completedBtn);
        completedBtn.innerHTML = todo.completed ? '<i class="fa-solid fa-rotate-left"></i>' : '<i class="fa-sharp fa-solid fa-check-double"></i>'
        completedBtn.addEventListener('click', () => toggleCompleteTodo(index) )


 

        //edit button
        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn')
        div.appendChild(editBtn);
        editBtn.innerHTML =  '<i class="fa-solid fa-pen-to-square"></i>'

        let paragraph = document.getElementById('#paragraph');
        editBtn.addEventListener('click', () =>{
            paragraph.contentEditable = true;
        });

        // Add btn that deolets todo
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        div.appendChild(deleteBtn);
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';


        deleteBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const result = confirm("Are you sure you want to delete this item?. If deleted, it cannot be recovered");   
            if(result){
                deleteTodo(index);
                alert('Todo item deleted successfully!')
            }else{
              alert('deletation canceled')
            }     
        })

        li.appendChild(p);
        li.appendChild(div);
        todosList.appendChild(li);

        
        });
}

function toggleCompleteTodo(index){
    todos[index].completed = !todos[index].completed;
    renderTodos();
}



function deleteTodo(index){
    todos.splice(index, 1);//remove the todo from the array
    renderTodos();
}

// filter functions

function filterAll(){
    renderTodos('all')
}
function filterCompleted(){
    renderTodos('completed')
}

function filterPending(){
    renderTodos('pending')
}
////if you click on the button to delete, an error message will pop up to say 'if you delete, you cant recover, then you click an agree or ok button.'