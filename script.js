
let menuExpanded = document.getElementById("menu")
let menuHide = document.getElementById("menu-nav")

function openMenu() {
  menuExpanded.classList.add("menu-expanded")
  menuHide.classList.remove("menu-hide")
}

function closeMenu() {
  menuExpanded.classList.remove("menu-expanded")
  menuHide.classList.add("menu-hide")
}


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