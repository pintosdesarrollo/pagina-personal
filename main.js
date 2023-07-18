/*
const verProyecto = document.getElementById("proyectoUno")
const contenedorProyectos = document.getElementById("contenedorProyectos")
verProyecto.addEventListener("click", () => {
    mostrarProyecto();
})

const mostrarProyecto = () => {
    contenedorProyectos.innerHTML = "";
    const card = document.createElement("div");
    card.innerHTML = `<div> Proyecto uno </div>`
    contenedorProyectos.appendChild(card);
}

*/
const verProyecto = document.getElementById("proyectoUno");
const divUno = document.getElementById("proyectoUno");
let proyectoAbierto = false;
let nuevoDiv = null;

verProyecto.addEventListener("click", () => {
  if (!proyectoAbierto) {
    mostrarProyecto();
    proyectoAbierto = true;
  }
});

const mostrarProyecto = () => {
  const card = document.createElement("div");
  card.innerHTML = `
    <div class="card">
      <div class="card-body fondo">
        <h5 class="card-title">Juana Deco</h5>
        <p class="card-text">Descripción del proyecto uno.</p>
        <button class="btnDiv" id="cerrarProyecto" onclick="cerrarProyecto()">Cerrar</button>
      </div>
    </div>
  `;

  card.classList.add("nuevoDiv"); // Agregamos una clase al nuevo div para aplicar estilos

  const divContenedor = document.querySelector(".proyectos");
  divContenedor.insertBefore(card, divUno.nextSibling);

  nuevoDiv = card;
};

const cerrarProyecto = () => {
  if (nuevoDiv) {
    nuevoDiv.remove();
    proyectoAbierto = false;
  }
};


const verProyectoDos = document.getElementById("proyectoDos");
const divDos = document.getElementById("proyectoDos");
let proyectoDosAbierto = false;
let nuevoDivDos = null;

verProyectoDos.addEventListener("click", () => {
  if (!proyectoDosAbierto) {
    mostrarProyectoDos();
    proyectoDosAbierto = true;
  }
});

const mostrarProyectoDos = () => {
  const cardDos = document.createElement("div");
  cardDos.innerHTML = `
    <div class="card">
      <div class="card-body fondo">
        <h5 class="card-title">Calculadora</h5>
        <p class="card-text">Descripción del proyecto dos.</p>
        <button class="btnDiv" id="cerrarProyectoDos" onclick="cerrarProyectoDos()">Cerrar</button>
      </div>
    </div>
  `;

  cardDos.classList.add("nuevoDivDos"); // Agregamos una clase al nuevo div para aplicar estilos

  const divContenedor = document.querySelector(".proyectos");
  divContenedor.insertBefore(cardDos, divDos.nextSibling);

  nuevoDivDos = cardDos;
};

const cerrarProyectoDos = () => {
  if (nuevoDivDos) {
    nuevoDivDos.remove();
    proyectoDosAbierto = false;
  }
};

const verProyectoCuatro = document.getElementById("proyectoCuatro");
const divCuatro = document.getElementById("proyectoCuatro");
let proyectoCuatroAbierto = false;
let nuevoDivCuatro = null;

verProyectoCuatro.addEventListener("click", () => {
  if (!proyectoCuatroAbierto) {
    mostrarProyectoCuatro();
    proyectoCuatroAbierto = true;
  }
});

const mostrarProyectoCuatro = () => {
  const cardCuatro = document.createElement("div");
  cardCuatro.innerHTML = `
    <div class="card">
      <div class="card-body fondo">
        <h5 class="card-title">Proyecto Cuatro</h5>
        <p class="card-text">Descripción del proyecto cuatro.</p>
        <button class="btnDiv" id="cerrarProyectoCuatro" onclick="cerrarProyectoCuatro()">Cerrar</button>
      </div>
    </div>
  `;

  cardCuatro.classList.add("nuevoDivCuatro"); // Agregamos una clase al nuevo div para aplicar estilos

  const divContenedor = document.querySelector(".proyectos");
  divContenedor.insertBefore(cardCuatro, divCuatro.nextSibling);

  nuevoDivCuatro = cardCuatro;
};

const cerrarProyectoCuatro = () => {
  if (nuevoDivCuatro) {
    nuevoDivCuatro.remove();
    proyectoCuatroAbierto = false;
  }
};

//ver proyecto cinco prueba 
const verProyectoCinco = document.getElementById("proyectoCinco");
const divCinco = document.getElementById("proyectoCinco");
let proyectoCincoAbierto = false;
let nuevoDivCinco = null;

verProyectoCinco.addEventListener("click", () => {
  if (!proyectoCincoAbierto) {
    mostrarProyectoCinco();
    proyectoCincoAbierto = true;
  }
});

const mostrarProyectoCinco = () => {
  const cardCinco = document.createElement("div");
  cardCinco.innerHTML = `
    <div class="card">
      <div class="card-body fondo">
        <h5 class="card-title">Proyecto Cinco</h5>
        <p class="card-text">Descripción del proyecto cinco.</p>
        <button class="btnDiv" id="cerrarProyectoCinco" onclick="cerrarProyectoCinco()">Cerrar</button>
      </div>
    </div>
  `;

  cardCinco.classList.add("nuevoDivCinco"); // Agregamos una clase al nuevo div para aplicar estilos

  const divContenedor = document.querySelector(".proyectos");
  divContenedor.insertBefore(cardCinco, divCinco.nextSibling);

  nuevoDivCinco = cardCinco;
};

const cerrarProyectoCinco = () => {
  if (nuevoDivCinco) {
    nuevoDivCinco.remove();
    proyectoCincoAbierto = false;
  }
};


