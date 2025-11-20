import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
    let dominio = document.querySelector("#dominio");
    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];
    let extensiones = ['.com', '.net', '.us', '.io'];

    /* let componentes= [pronoun,adj,noun] */
    let namePage = ''
    pronoun.forEach(part1 => {
      adj.forEach(part2 => {
        noun.forEach(part3 => {
          extensiones.forEach(ext => {
            namePage += part1+part2+part3+ext+'<br>';
          });
        });
      });
    });

    dominio.innerHTML = namePage; 
};
