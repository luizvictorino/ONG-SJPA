export{getDOM}
import { modalMan } from "./modal.js";
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
function apagaClass(){
  getDOM('divAdote', '.card-doe').classList.remove('animate')    
  getDOM('divApadrinhe', '.card-apadrinhe').classList.remove('animate')
  getDOM('divDoe', '.card-adote').classList.remove('animate')

}
getDOM('ancoraAdote', '.menu_link-doacao').addEventListener("click", ()=>{
  getDOM('divAdote', '.card-doe').classList.add('animate')
  setTimeout(apagaClass, 1700);
})
getDOM('ancoraApadrinhe', '.menu_link-Apadrinhe').addEventListener("click", ()=>{
  getDOM('divApadrinhe', '.card-apadrinhe').classList.add('animate')
  setTimeout(apagaClass, 1700);
})
getDOM('ancoraDoe', '.menu_link-Adote').addEventListener("click", ()=>{
  getDOM('divDoe', '.card-adote').classList.add('animate')
  setTimeout(apagaClass, 1700);
})
modalMan()

// const hamburger = document.getElementById('hamburger');
// const menu = document.querySelector('.menu');

// hamburger.addEventListener('click', () => {
//   hamburger.classList.toggle('active');
//   menu.classList.toggle('active');
// });
