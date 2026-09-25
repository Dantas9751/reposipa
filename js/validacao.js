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


form.addEventListener("reset", function() {
    setTimeout(verificarFormulario, 0);
});


form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    alert("Mensagem enviada com sucesso!");
    form.reset(); 
    verificarFormulario(); 
});