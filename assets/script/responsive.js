document.addEventListener('DOMContentLoaded', () => {
  
  // Função para abrir e mechar menu hamburger
  const hamburgerButton = document.querySelector("#hamburgerButton");
  const closeButton = document.querySelector("#closeButton");
  const mobileMenu = document.querySelector("#mobileMenu");

  // Função para esconder ou exibir os botões e o menu com base na largura da tela
  function handleMenuDisplay() {
    if (window.innerWidth > 1300) {
      // Esconde o menu e os botões em telas maiores que 1300px
      hamburgerButton.style.display = "none";
      closeButton.style.display = "none";
      mobileMenu.classList.remove("flex"); // Remove o menu caso esteja aberto
    } else {
      // Exibe o botão do hamburger em telas menores ou iguais a 1300px
      hamburgerButton.style.display = "block";
      closeButton.style.display = "none"; // Esconde o botão de fechar inicialmente
    }
  }

  // Inicialmente, chama a função para garantir que os elementos estejam corretos
  handleMenuDisplay();

  // Adiciona o event listener para o resize da tela
  window.addEventListener("resize", handleMenuDisplay);

  // Evento de clique para abrir o menu
  hamburgerButton.addEventListener("click", function () {
    mobileMenu.classList.add("flex");
    hamburgerButton.style.display = "none";
    closeButton.style.display = "block";
  });

  // Evento de clique para fechar o menu
  closeButton.addEventListener("click", function () {
    mobileMenu.classList.remove("flex");
    closeButton.style.display = "none";
    hamburgerButton.style.display = "block";
  });
});

