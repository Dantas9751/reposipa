const form = document.getElementById("formContato");

form.addEventListener("submit", function(event) {
    if (!form.checkValidity()) {
        event.preventDefault();
    }
});

const nomeInput = document.getElementById("nome");
nomeInput.addEventListener("input", () => {
    console.log(nomeInput.value);
    nomeInput.value = nomeInput.value.replace(/\d/g, "");
});

const emailInput = document.getElementById("email");
emailInput.addEventListener("input", () => {
    console.log(emailInput.value);
});

const assuntoInput = document.getElementById("assunto");
assuntoInput.addEventListener("input", () => {
    console.log(assuntoInput.value);
});

const mensagemInput = document.getElementById("mensagem");
mensagemInput.addEventListener("input", () => {
    console.log(mensagemInput.value);
});
