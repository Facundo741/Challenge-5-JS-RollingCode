/*Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin.  */


const taskList = [];

const main = document.createElement('main');
main.innerHTML = `
    <div class="container mt-5" id="container">
        <div class="row justify-content-center">
            <div class="col-5">
                <label class="form-label" for="task">Ingresa una nueva tarea</label>
                <input type="text" class="form-control" id="task">
                <button class="btn btn-success my-3" onclick="addTask()">Añadir tarea</button>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-6" id="containerList">
                <ul id="taskListElement">
                </ul>
            </div>
        </div>
    </div>`;
document.body.appendChild(main);




const addTask = () => {
    const newTask = document.getElementById('task');
    if(newTask.value.length === 0) {
        return alert('No ingresaste nada');
    }
    taskList.push(newTask.value);
    newTask.value = '';
    renderList(taskList);
};

const renderList = (list) => {
    const ul = document.getElementById('taskListElement');
    ul.innerHTML = '';
    if(list.length !== 0) {
        list.map((task,i) => {
            const li = document.createElement('li');
            li.innerHTML = `
            <div class="d-flex my-2 justify-content-between align-items-center">
            ${task}
            <button class="btn btn-danger btn-sm" onclick="deleteTask()">delete</button>
            </div>`;
            document.getElementById('taskListElement').appendChild(li);
        });
    }
};

const deleteTask = (index) => {
    taskList.splice(index, 1);
    renderList(taskList);
};