export { getDOM };
import { modalMan } from "./modal.js";
import { menuMobile } from "./responsive.js";

/* função para deslizamento de tela ao clicar nas ancoras no topo */
document.querySelectorAll('a[href^="html#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function getDOM(varTag, nameTag) {
  varTag = document.querySelector(nameTag);
  return varTag;
}

const buttons = document.querySelectorAll(".faq-btn");
const divs = document.querySelectorAll(".faq-answer");

buttons.forEach(button => {
  button.addEventListener('click', function () {

    var targetId = this.getAttribute("data-target");
    var targetDiv = document.getElementById(targetId);
    var icon = this.querySelector('i');

    // Verificar se o faq atual está aberto
    if (targetDiv.style.display === "block") {
      targetDiv.style.display = "none";
      icon.classList.remove('fa-minus');
      icon.classList.add('fa-plus');
    } else {
      // Ocultar todas as respostas e redefinir ícones para "+"
      divs.forEach((div, index) => {
        div.style.display = "none";
        buttons[index].querySelector('i').classList.remove('fa-minus');
        buttons[index].querySelector('i').classList.add('fa-plus');
      });
      
      // Mostrar a resposta do botão clicado e mudar o ícone para "-"
      targetDiv.style.display = "block";
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-minus');
    }
  });
});


menuMobile()
modalMan()

