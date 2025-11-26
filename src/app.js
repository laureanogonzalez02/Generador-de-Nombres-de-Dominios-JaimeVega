import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let domain = document.querySelector("#domain");
  let pronouns = ["the", "our"];
  let adjectives = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".us", ".io"];

  let namePage = "";
  pronouns.forEach((pronoun) => {
    adjectives.forEach((adjective) => {
      nouns.forEach((noun) => {
        extensions.forEach((extension) => {
          namePage += pronoun + adjective + noun + extension + "<br>";
        });
      });
    });
  });

  domain.innerHTML = namePage;
};
