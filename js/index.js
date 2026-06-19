// Crear un array de mínimo 3 objetos JavaScript, donde cada objeto represente un curso con las propiedades: nombre, descripcion, imagen y categoria 
// Usar createElement y appendChild para construir cada tarjeta del curso y agregarla al DOM
// 	El HTML de index.html no debe contener las tarjetas hardcodeadas; deben generarse completamente desde index.js
// 	El resultado visual debe ser idéntico o superior al de la Tarea #1

// Array de cursos
var cursos = [
    {
        nombre: "Desarrollo Web",
        descripcion: "Crea sitios con HTML, CSS y JavaScript.",
        imagen: "imagenes/Desarrolo web.jpg",
        categoria: "Programacion"
    },
    {
        nombre: "Diseno UI/UX",
        descripcion: "Disena productos digitales faciles de usar.",
        imagen: "imagenes/diseno2.jpg",
        categoria: "Diseno"
    },
    {
        nombre: "Ciencia de Datos",
        descripcion: "Analiza datos con Python para decidir mejor.",
        imagen: "imagenes/Datos2.jpg",
        categoria: "Datos"
    }
];
// tarjeta del curso
function creaTarjeta(curso) {
    var columna = document.createElement("div");
    columna.className = "col-md-4";

    // Tarjeta
    var carta = document.createElement("div");
    carta.className = "card";

    // Imagen
    var img = document.createElement("img");
    img.src = curso.imagen;
    img.className = "card-img-top";
    img.alt = curso.nombre;

    // Cuerpo de la tarjeta
    var Cuadro = document.createElement("div");
    Cuadro.className = "card-body";

    // Materias
    var Materia = document.createElement("h5");
    Materia.className = "card-title";
    Materia.textContent = curso.nombre;

    // Descripcion
    var descripcion = document.createElement("p");
    descripcion.className = "card-text";
    descripcion.textContent = curso.descripcion;

    // Boton
    var boton = document.createElement("a");
    boton.className = "btn btn-primary";
    boton.textContent = "Ver mas";

    // Con eso la tarjeta ya estaria funcional, se procede a armarlas

    // Armado de tarjeta
    Cuadro.appendChild(Materia);
    Cuadro.appendChild(descripcion);
    Cuadro.appendChild(boton);
    carta.appendChild(img);
    carta.appendChild(Cuadro);
    columna.appendChild(carta);

    return columna;
}

// Se crea el dom bien chiva
var contenedor = document.getElementById("cursos-container");

// Se ponen las cartas
for (var i = 0; i < cursos.length; i++) {
    var tarjeta = creaTarjeta(cursos[i]);
    contenedor.appendChild(tarjeta);
}
