const form = document.getElementById("formContato");
const botaoEnviar = document.querySelector(".botao-enviar");

function verificarFormulario() {
    if (!form.checkValidity()) {
        botaoEnviar.classList.add("botao-invalido");
    } else {
        botaoEnviar.classList.remove("botao-invalido");
    }
}


verificarFormulario();


form.addEventListener("input", verificarFormulario);


form.addEventListener("submit", function(event) {
    if (!form.checkValidity()) {
        event.preventDefault(); 
    } else {
        alert("Mensagem enviada com sucesso!");
    }
});