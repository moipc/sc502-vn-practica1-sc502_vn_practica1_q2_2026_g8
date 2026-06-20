// Array de profesores: nombre, especialidad, descripcion y foto
var profesores = [
    {
        nombre: "Ana Maria Vargas",
        especialidad: "Desarrollo Web",
        descripcion: "Experta en HTML, CSS y JavaScript con anos de experiencia en proyectos frontend.",
        foto: "https://ui-avatars.com/api/?name=Ana+Maria+Vargas&background=0D6EFD&color=fff&size=300&bold=true"
    },
    {
        nombre: "Carlos Eduardo Rojas",
        especialidad: "Backend y Bases de Datos",
        descripcion: "Especialista en Node.js, APIs y diseno de bases de datos relacionales.",
        foto: "https://ui-avatars.com/api/?name=Carlos+Eduardo+Rojas&background=0D6EFD&color=fff&size=300&bold=true"
    },
    {
        nombre: "Laura Patricia Mendez",
        especialidad: "Diseno UI/UX",
        descripcion: "Disenadora de producto enfocada en experiencia de usuario y prototipado.",
        foto: "https://ui-avatars.com/api/?name=Laura+Patricia+Mendez&background=0D6EFD&color=fff&size=300&bold=true"
    },
    {
        nombre: "Diego Alonso Fernandez",
        especialidad: "Ciencia de Datos",
        descripcion: "Analista de datos con experiencia en Python y visualizacion de informacion.",
        foto: "https://ui-avatars.com/api/?name=Diego+Alonso+Fernandez&background=0D6EFD&color=fff&size=300&bold=true"
    }
];

// Tarjeta del profesor
function creaTarjetaProfesor(profesor) {
    var columna = document.createElement("div");
    columna.className = "col-md-3 mb-4";

    // Tarjeta
    var carta = document.createElement("div");
    carta.className = "profesor-card";

    // Contenedor de foto (para hacerla circular con CSS)
    var fotoWrap = document.createElement("div");
    fotoWrap.className = "profesor-foto-wrap";

    var foto = document.createElement("img");
    foto.src = profesor.foto;
    foto.className = "profesor-foto";
    foto.alt = profesor.nombre;
    fotoWrap.appendChild(foto);

    // Cuerpo de la tarjeta
    var Cuadro = document.createElement("div");
    Cuadro.className = "profesor-body";

    // Nombre
    var nombre = document.createElement("h5");
    nombre.className = "profesor-nombre";
    nombre.textContent = profesor.nombre;

    // Especialidad
    var especialidad = document.createElement("span");
    especialidad.className = "profesor-especialidad";
    especialidad.textContent = profesor.especialidad;

    // Descripcion
    var descripcion = document.createElement("p");
    descripcion.className = "profesor-descripcion";
    descripcion.textContent = profesor.descripcion;

    // Armado de tarjeta
    Cuadro.appendChild(nombre);
    Cuadro.appendChild(especialidad);
    Cuadro.appendChild(descripcion);
    carta.appendChild(fotoWrap);
    carta.appendChild(Cuadro);
    columna.appendChild(carta);

    return columna;
}

// Se busca el contenedor
var contenedor = document.getElementById("profesores-container");

// Se ponen las tarjetas
for (var i = 0; i < profesores.length; i++) {
    var tarjeta = creaTarjetaProfesor(profesores[i]);
    contenedor.appendChild(tarjeta);
}
