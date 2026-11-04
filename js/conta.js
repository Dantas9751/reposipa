const formularioConta = document.querySelector(".formulario-conta");
const avisoConta = document.querySelector(".aviso-conta");
const campoSenha = document.getElementById("senha");
const campoConfirmarSenha = document.getElementById("confirmar-senha");
const erroConfirmarSenha = document.getElementById("erro-confirmar-senha");
const botoesMostrarSenha = document.querySelectorAll(".mostrar-senha");

function definirVisibilidadeSenha(botao, visivel) {
    const campo = botao.previousElementSibling;

    campo.type = visivel ? "text" : "password";
    botao.setAttribute("aria-pressed", visivel);
    botao.setAttribute("aria-label", visivel ? "Ocultar senha" : "Mostrar senha");
    botao.querySelector("i").className = visivel ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
}

function conferirSenhas() {
    const senhasIguais = campoSenha.value === campoConfirmarSenha.value;

    campoConfirmarSenha.setCustomValidity(senhasIguais ? "" : "As senhas não são iguais.");
    erroConfirmarSenha.hidden = senhasIguais || !campoConfirmarSenha.value;
}

botoesMostrarSenha.forEach(function (botao) {
    botao.addEventListener("click", function () {
        const visivel = botao.previousElementSibling.type === "password";
        definirVisibilidadeSenha(botao, visivel);
    });
});

if (campoConfirmarSenha) {
    campoSenha.addEventListener("input", conferirSenhas);
    campoConfirmarSenha.addEventListener("input", conferirSenhas);
}

formularioConta.addEventListener("input", function () {
    avisoConta.hidden = true;
});

formularioConta.addEventListener("submit", function (evento) {
    evento.preventDefault();

    avisoConta.querySelector("span").textContent = formularioConta.dataset.mensagem;
    avisoConta.hidden = false;

    formularioConta.reset();
    botoesMostrarSenha.forEach(function (botao) {
        definirVisibilidadeSenha(botao, false);
    });
});
