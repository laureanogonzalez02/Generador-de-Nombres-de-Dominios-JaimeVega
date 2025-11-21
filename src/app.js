import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
    let dominio = document.querySelector("#dominio");
    let pronombres = ['the', 'our'];
    let adjetivos = ['great', 'big'];
    let sustantivos = ['jogger', 'racoon'];
    let extensiones = ['.com', '.net', '.us', '.io'];

    let namePage = ''
    pronombres.forEach(pronombre => {
      adjetivos.forEach(adjetivo => {
        sustantivos.forEach(sustantivo => {
          extensiones.forEach(extension => {
            namePage += pronombre + adjetivo + sustantivo + extension +'<br>';
          });
        });
      });
    });

    dominio.innerHTML = namePage; 
};
