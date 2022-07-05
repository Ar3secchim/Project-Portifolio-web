const btnMobile = document.getElementById("nav-bar-btn");

function toggleMenu() {
  let menu = document.getElementById("menu-nav");
  menu.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);

// lib scroll
ScrollReveal({
  origin:'top',
  distance: '80px',
  duration:1000,
}).reveal(`.destaque,
  .destaque .img-perfil,
  #about .container-title-section,
  #about .ilustration,
  #Skills .container-title-section,
  #Skills .container-languages,
  #Skills .container-tools,
  #Skills .container-design,
  #projects,
  #projects .container-outher,
  #contact`)