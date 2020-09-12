(function(){
    
    //Variables:

    var lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tareaInput"),
        btnNuevaTarea = document.getElementById("btn-agregar");


    //Funciones:

    var agregarTarea = function(){
        
        var tarea = tareaInput.value,
            nuevaTarea = document.createElement("li"),
            enlace = document.createElement("a"),
            contenido = document.createTextNode(tarea);


        //Validamos Si el Input Contiene Texto
        if (tarea === "") {
            tareaInput.setAttribute("placeholder", "Por Favor Agrega una Tarea");
            tareaInput.className = "error";
            return false;
        }


        //Agregamos el Contenido a un Enlace "a"
        enlace.appendChild(contenido);

        //Le Establecemos el Atributo "href" para que sea Seleccionalbe
        enlace.setAttribute("href", "#");

        //Al Enlace lo Agregamos en "nuevaTarea" en el Elemento "li"
        nuevaTarea.appendChild(enlace);

        //Agregamos la Nueva Tarea a la Lista
        lista.appendChild(nuevaTarea);

        //Para Limpiar el Input Despues de Agregar
        tareaInput.value = "";

        //Evento para Recorrer la Lista de Tareas y Usar el Elemento
        for (var i = 0; i <= lista.children.length -1; i++) {
        lista.children[i].addEventListener("click", function(){
            this.parentNode.removeChild(this);
        });
        }

    };


    var comprobarInput = function(){

        //Elimina la Clase "error"
        tareaInput.className = "";

        //Vuelve el Input a su Estado Normal
        tareaInput.setAttribute("placeholder", "Agrega Una Nueva Tarea");

    };


    var eliminarTarea = function(){

        this.parentNode.removeChild(this);

    };



    //Eventos:

    //Agregar Tarea
    btnNuevaTarea.addEventListener("click", agregarTarea);

    //Comprobar Input
    tareaInput.addEventListener("click", comprobarInput);

    //Evento para Recorrer la Lista de Tareas
    for (var i = 0; i <= lista.children.length -1; i++) {
        lista.children[i].addEventListener("click", eliminarTarea);
    }



}());