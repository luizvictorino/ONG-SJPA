/* função para deslizamento de tela ao clicar nas ancoras no topo */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

function pegaDOM(varTag, nameTag){
   varTag = document.querySelector(nameTag)
   return varTag
}
function apagaClass(){
  pegaDOM('divAdote', '.card-doe').classList.remove('animate')    
  pegaDOM('divApadrinhe', '.card-apadrinhe').classList.remove('animate')
  pegaDOM('divDoe', '.card-adote').classList.remove('animate')

}
pegaDOM('ancoraAdote', '.menu_link-doacao').addEventListener("click", ()=>{
  pegaDOM('divAdote', '.card-doe').classList.add('animate')
  setTimeout(apagaClass, 1700);
})
pegaDOM('ancoraApadrinhe', '.menu_link-Apadrinhe').addEventListener("click", ()=>{
  pegaDOM('divApadrinhe', '.card-apadrinhe').classList.add('animate')
  setTimeout(apagaClass, 1700);
})
pegaDOM('ancoraDoe', '.menu_link-Adote').addEventListener("click", ()=>{
  pegaDOM('divDoe', '.card-adote').classList.add('animate')
  setTimeout(apagaClass, 1700);
})

    