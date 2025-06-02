document.addEventListener("DOMContentLoaded", function () {
  navegacionFija();
  crearGaleria();
  resaltarEnlace();
  scrollNav();
});

function navegacionFija() {
  const header = document.querySelector(".header");
  const sobreFestival = document.querySelector(".sobre-festival");

  document.addEventListener("scroll", function () {
    if (sobreFestival.getBoundingClientRect().bottom < 1) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });
}

function crearGaleria() {
  const CANTIDAD_IMG = 16;
  const galeria = document.querySelector(".galeria-img");

  for (let i = 1; i <= CANTIDAD_IMG; i++) {
    const img = document.createElement("IMG");
    img.loading = "lazy";
    img.width = "300";
    img.height = "200";
    img.src = `src/img/gallery/thumb/${i}.jpg`;
    img.alt = "Imagen de galeria";


    //event handler
    img.onclick = function () {
      mostrarImg(i);
    };

    galeria.appendChild(img);
  }
}

function mostrarImg(i) {
  const img = document.createElement("IMG");
  img.src = `src/img/gallery/full/${i}.jpg`;
  img.alt = "Imagen de galeria";

  //GENERAL MODAL
  const modal = document.createElement("DIV");
  modal.classList.add("modal");
  modal.onclick = cerrarModal;

  //cerrar modal
  const cerrarModalBtn = document.createElement("BUTTON");
  cerrarModalBtn.textContent = "X";
  cerrarModalBtn.classList.add("btn-cerrar");
  cerrarModalBtn.onclick = cerrarModal;

  modal.appendChild(img);
  modal.appendChild(cerrarModalBtn);

  //agregar al html
  const body = document.querySelector("body");
  body.classList.add("overflow-hidden");
  body.appendChild(modal);
}

function cerrarModal() {
  const modal = document.querySelector(".modal");
  modal.classList.add("fade-out");
  setTimeout(() => {
    modal?.remove();
  }, 500);
  const body = document.querySelector("body");
  body.classList.remove("overflow-hidden");
}

function resaltarEnlace() {
  document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const navLink = document.querySelectorAll(".navegacion-principal a");

    let actual = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        actual = section.id;
      }
    });

    navLink.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + actual) {
        link.classList.add("active");
      }
    });
  });
}

function scrollNav() {
  const navLinks = document.querySelectorAll(".navegacion-principal a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const sectionScroll = e.target.getAttribute("href");
      const section = document.querySelector(sectionScroll);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}
