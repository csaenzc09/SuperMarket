
let header = document.querySelector(`#header`); 
let toogle = document.querySelector(`.toogle`);
let enlace = document.querySelector(`nav ul`);
 let titulo = document.querySelector(`.inicio h1`);
 let servicios = document.querySelector(`.contenedor_servicios`);


 titulo.textContent = "market";
 titulo.style.color = "darkblue"; 


toogle.addEventListener(`click` , ()=>{
    header.classList.toggle("activo");
});

enlace.addEventListener( `click` , () =>{
    header.classList.remove("activo");
});

servicios.children[2].style.display = "none";

