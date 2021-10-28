
let header = document.querySelector(`#header`); 
let toogle = document.querySelector(`.toogle`);
let enlace = document.querySelector(`nav ul`);


toogle.addEventListener(`click` , ()=>{
    header.classList.toggle("activo");
});

enlace.addEventListener( `click` , () =>{
    header.classList.remove("activo");
});




