const menu = document.querySelector(".menu");
const botaoMenu = document.querySelector(".botao-menu");
const iconeMenu = botaoMenu.querySelector("i");
const fundoMenu = document.createElement("div");

fundoMenu.className = "fundo-menu";
document.body.appendChild(fundoMenu);

function definirMenuAberto(aberto) {
    menu.classList.toggle("aberto", aberto);
    fundoMenu.classList.toggle("visivel", aberto);
    document.body.classList.toggle("menu-aberto", aberto);
    botaoMenu.setAttribute("aria-expanded", aberto);
    botaoMenu.title = aberto ? "Fechar menu" : "Abrir menu";
    iconeMenu.className = aberto ? "fa-solid fa-xmark" : "fa-solid fa-bars";
}

botaoMenu.addEventListener("click", function () {
    definirMenuAberto(!menu.classList.contains("aberto"));
});

fundoMenu.addEventListener("click", function () {
    definirMenuAberto(false);
});

document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
        definirMenuAberto(false);
    }
});

window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        definirMenuAberto(false);
    }
});
