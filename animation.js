let aboutImg = document.querySelectorAll(".about-img");
let aboutInfo = document.querySelectorAll(".about-info");
let services = document.querySelectorAll(".services");
let info = document.querySelectorAll(".info");
let form = document.querySelectorAll(".form");

function mostrarScroll() {
  let scrollTop = document.documentElement.scrollTop;

  for (let i = 0; i < aboutImg.length; i++) {
    let alturaAnimado = aboutImg[i].offsetTop;

    if (alturaAnimado - 400 < scrollTop) {
      aboutImg[i].style.opacity = 1;

      aboutImg[i].classList.add("mostrarIzquierda");
    }
  }

  for (let i = 0; i < info.length; i++) {
    let alturaAnimado = info[i].offsetTop;

    if (alturaAnimado - 400 < scrollTop) {
      info[i].style.opacity = 1;

      info[i].classList.add("mostrarIzquierda");
    }
  }

  for (let i = 0; i < services.length; i++) {
    let alturaAnimado = services[i].offsetTop;

    if (alturaAnimado - 400 < scrollTop) {
      services[i].style.opacity = 1;

      services[i].classList.add("mostrarArriba");
    }
  }

  for (let i = 0; i < aboutInfo.length; i++) {
    let alturaAnimado = aboutInfo[i].offsetTop;
    if (alturaAnimado - 400 < scrollTop) {
      aboutInfo[i].style.opacity = 1;

      aboutInfo[i].classList.add("mostrarDerecha");
    }
  }

  for (let i = 0; i < form.length; i++) {
    let alturaAnimado = form[i].offsetTop;

    if (alturaAnimado - 400 < scrollTop) {
      form[i].style.opacity = 1;

      form[i].classList.add("mostrarDerecha");
    }
  }
}

window.addEventListener("scroll", mostrarScroll);
