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

document.querySelectorAll(".faq-btn").forEach(function(button) {
  button.addEventListener("click", function() {
      var targetId = this.getAttribute("data-target");
      var targetDiv = document.getElementById(targetId);

      // Verificar se o faq ta aberto
      if (targetDiv.style.display === "block") {
          targetDiv.style.display = "none";
      } else {
          // Ocultar os faqs
          document.querySelectorAll(".faq-answer").forEach(function(div) {
              div.style.display = "none";
          });
          targetDiv.style.display = "block";
      }
  });
});
menuMobile()
modalMan()

