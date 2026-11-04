const formulario = document.getElementById("formContato");
const botaoEnviar = document.querySelector(".botao-enviar");

function verificarFormulario() {
    botaoEnviar.classList.toggle("botao-invalido", !formulario.checkValidity());
}

formulario.addEventListener("input", verificarFormulario);

formulario.addEventListener("reset", function () {
    setTimeout(verificarFormulario, 0);
});

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
});

verificarFormulario();
