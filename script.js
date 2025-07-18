const slides = document.querySelectorAll(".slide");
const btnProximo = document.querySelector(".proximo");
const btnAnterior = document.querySelector(".anterior");

let indiceAtual = 0;
let intervalo; 

function mostrarSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("ativo");
    if (i === index) {
      slide.classList.add("ativo");
    }
  });
}


function proximoSlide() {
  indiceAtual = (indiceAtual + 1) % slides.length;
  mostrarSlide(indiceAtual);
}


function slideAnterior() {
  indiceAtual = (indiceAtual - 1 + slides.length) % slides.length;
  mostrarSlide(indiceAtual);
}


function iniciarAutoplay() {
  intervalo = setInterval(proximoSlide, 3000); 
}


function pausarAutoplay() {
  clearInterval(intervalo);
}

btnProximo.addEventListener("click", () => {
  proximoSlide();
  pausarAutoplay();
  iniciarAutoplay(); 
});

btnAnterior.addEventListener("click", () => {
  slideAnterior();
  pausarAutoplay();
  iniciarAutoplay();
});

// Iniciar carrossel
mostrarSlide(indiceAtual);
iniciarAutoplay();
