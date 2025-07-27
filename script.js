const slides = document.querySelectorAll(".slide");
const btnProximo = document.querySelector(".proximo");
const btnAnterior = document.querySelector(".anterior");
const buttonMobile = document.querySelector(".button-mobile");

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

 const header = document.querySelector('.header')
  const menu = document.querySelector('.menu-mobile')

buttonMobile.addEventListener('click', () => {
  const headerStyle = window.getComputedStyle(header);
  const alturaAtual = headerStyle.height;

  if (alturaAtual === '50px') {
    
    header.style.height = '220px';
    header.style.borderRadius = '0% 0% 0% 999%';
    buttonMobile.style.display = 'none';
    menu.style.display = "flex";
    menu.style.gap = "20px";

  } else {
  
    header.style.borderRadius = '0% 0% 0% 0%';
    menu.style.display = 'none';
    buttonMobile.style.display = 'block';
  }
});
 const Container = document.querySelector('.filtro')

Container.addEventListener('click',()=>{
   header.style.height = '50px'
 menu.style.display = 'none'
header.style.borderRadius = '0% 0% 0% 0%';
 buttonMobile.style.display = 'block';

 })



function  config(){
    header.style.height = '50px'
 menu.style.display = 'none'
header.style.borderRadius = '0% 0% 0% 0%';
buttonMobile.style.display = 'block'

  
}


window.addEventListener('resize', () => {
  if (window.innerWidth >= 769) {
    menu.style.display = "none";
    buttonMobile.style.display = "none";
    // location.reload();

       header.style.height = '50px'

header.style.borderRadius = '0% 0% 0% 0%';

  
  } else {
    menu.style.display = "flex";
    
   
  }
});
window.addEventListener('resize', () => {
  if (window.innerWidth <= 1024) {
    menu.style.display = "none";
    buttonMobile.style.display = "none";
    // location.reload();

       header.style.height = '50px'

header.style.borderRadius = '0% 0% 0% 0%';

  
  } else {
    menu.style.display = "flex";
    
   
  }
});
window.addEventListener('resize', () => {
  if (window.innerWidth <=  768) {
    menu.style.display = "none";
    buttonMobile.style.display = "block";
    // location.reload();
  
  } else {
    menu.style.display = "flex";
    
   
  }
});
