const ButtonMobile = document.querySelector('.button-mobile')
const Menumobile = document.getElementById('menumo')
const fundo = document.querySelector('.sect-mobile')
const ativo = document.getElementById('ativo')
const inicio = document.getElementById('inicios')
const sobre = document.getElementById('sobre')
const equipe = document.getElementById('equipe')
const contato = document.getElementById('contato')






   Menumobile.style.display = "none";
     fundo.style.display = "none";
     document.body.style.overflow = 'auto'; 


function  config (){

     Menumobile.style.display = "none"
     fundo.style.display = "none"
     document.body.style.overflow = 'auto'; 
}


ButtonMobile.addEventListener('click', () => {
    if (Menumobile.style.display == "none") {
        Menumobile.style.display = "block";
        fundo.style.display = "block";
        document.body.style.overflow = 'hidden';
    } else {
        Menumobile.style.display = "none";
        fundo.style.display = "none";
        document.body.style.overflow = 'auto'; 
    }
});
fundo.addEventListener('click', () => {
     Menumobile.style.display = "none";
     fundo.style.display = "none";
     document.body.style.overflow = 'auto'; 
   
    
});

inicio.addEventListener('click',()=>{
  config()
})


sobre.addEventListener('click',()=>{
    config()
   
})
equipe.addEventListener('click',()=>{
    config()
    

     if( ativo.style.display = "block"){
     document.body.style.overflow = 'hidden';
setTimeout(()=>{
    ativo.style.display = "none"
     document.body.style.overflow = 'auto'; 
}, 3000)
}
})
contato.addEventListener('click',()=>{
    config()

if( ativo.style.display = "block"){
     document.body.style.overflow = 'hidden';
setTimeout(()=>{
    ativo.style.display = "none"
     document.body.style.overflow = 'auto'; 
}, 3000)
}
    
})




