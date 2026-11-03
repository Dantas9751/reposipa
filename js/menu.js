const menu = document.querySelector(".menu");
const botaoMenu = document.querySelector(".botao-menu");
const iconeMenu = botaoMenu.querySelector("i");

botaoMenu.addEventListener("click", function () {
    const aberto = menu.classList.toggle("aberto");

    botaoMenu.setAttribute("aria-expanded", aberto);
    botaoMenu.title = aberto ? "Fechar menu" : "Abrir menu";
    iconeMenu.className = aberto ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});
