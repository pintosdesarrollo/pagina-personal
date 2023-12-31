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
        <p class="card-text">Pagina realizada para empresa de decoracion. En esta pagina utilizamos codigo html y css para cumplir los objetivos del cliente de mostrar sus servicios mas una seccion de contacto.</p>
        <h2>link: <a href="https://juanadeco.netlify.app/" target="_blank">https://juanadeco.app</a></h2>
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
        <h5 class="card-title">Cafeteria</h5>
        <p class="card-text">Pagina desarrollada para cafeteria en buenos aires, de diseño simple buscando mostrar sus servicios, horarios y ubicacion.</p>
        <h2>link: <a href="https://cafeteriacogedora.netlify.app/" target="_blank">https://cafeteria.app</a></h2>
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
        <h5 class="card-title">Silvera t-shirts</h5>
        <p class="card-text">Pagina con carrito de compras diseñado para marca de ropa, se utilizo html, css y javascript para lograr esta pagina.</p>
        <h2>link: <a href="" target="_blank">no disponible (pagina en proceso)</a></h2>
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
        <p class="card-text">Pagina creada para gimnasio de la ciudad, landing page informando sobre sus servicios, plnaes y sobre ellos.</p>
        <h2>link: <a href="https://gym-now.netlify.app/" target="_blank">https://gym-now.app</a></h2>
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



/*

const paqueteUnoUno = document.getElementById("landingDis");
let paqueteUnoUnoAbierto = false;
let nuevoPrecio = null;

paqueteUnoUno.addEventListener("click", () => {
  if (!paqueteUnoUnoAbierto) {
    mostrarPrecioUno();
    paqueteUnoUnoAbierto = true;
  }
});

const mostrarPrecioUno = () => {
  const precioUno = document.createElement("div");
  precioUno.innerHTML = `
    <div class="precio">
      <h2>Precio: US$ 100, AR$50.00</h2>
      <button class="cerrar" onclick="cerrarPrecio()">Cerrar</button>
    </div>
  `;

  paqueteUnoUno.parentNode.insertBefore(precioUno, paqueteUnoUno.nextSibling);
};

const cerrarPrecio = () => {
  nuevoPrecio = document.querySelector(".precio");
  if (nuevoPrecio) {
    nuevoPrecio.remove();
    paqueteUnoUnoAbierto = false;
  }
};
*/