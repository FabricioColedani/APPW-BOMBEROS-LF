let form = document.getElementById("form");
let nombreUnidad = document.getElementById("nombre_unidad");
let id_Unidad = document.getElementById("id_unidad");
let statusVar = document.getElementById("status");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
  });
  
  let formValidation = () => {
    if (nombreUnidad.value === "" || id_Unidad.value === ""){
      msg.innerHTML = "¡No pueden haber espacios en blanco!";
    } else {
      msg.innerHTML = "";
    }
    //acceptData()
  };

//let data = [];

/*let acceptData = () => {
  data.push({
    NombreUnidad: nombreUnidad.value,
    Id_Unidad: id_Unidad.value,
    Estado: StatusVar.value,
  });

  localStorage.setItem("data", JSON.stringify(data));

  crearUnidad()

};*/

let crearUnidad = () => {
    tasks.innerHTML = "";
    data.map((x, y) => {
      return (tasks.innerHTML += `
      <div id=${y}>
            <span class="fw-bold">${x.nombreUnidad}</span>
            <span class="small text-secondary">${x.id_Unidad}</span>
            <span class="small text-secondary">${x.statusVar}</span>
    
            <span class="options">
              <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
              <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
            </span>
          </div>
      `);
    });
  
    resetForm();
    let resetForm = () => {
        nombreUnidad.value = "";
        id_Unidad.value = "";
        statusVar.value = "";
        };
    }



/*let deleteTask = (e) => {
  e.parentElement.parentElement.remove();

  data.splice(e.parentElement.parentElement.id, 1);

  localStorage.setItem("data", JSON.stringify(data));

};*/

/*let editTask = (e) => {
  let selectedTask = e.parentElement.parentElement;

  textInput.value = selectedTask.children[0].innerHTML;
  dateInput.value = selectedTask.children[1].innerHTML;
  textarea.value = selectedTask.children[2].innerHTML;

  deleteTask(e);
};*/