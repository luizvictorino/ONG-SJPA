export{getDOM}
import { modalMan } from "./modal.js"
import {menuMobile} from "./responsive.js"
/* função para deslizamento de tela ao clicar nas ancoras no topo */
document.querySelectorAll('a[href^="html#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function getDOM(varTag, nameTag){
   varTag = document.querySelector(nameTag)
   return varTag
}
menuMobile()
modalMan()
