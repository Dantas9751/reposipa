const formularioConta = document.querySelector(".formulario-conta");
const campoSenha = document.getElementById("senha");
const campoConfirmarSenha = document.getElementById("confirmar-senha");

function conferirSenhas() {
    const senhasIguais = campoSenha.value === campoConfirmarSenha.value;
    campoConfirmarSenha.setCustomValidity(senhasIguais ? "" : "As senhas não são iguais.");
}

if (campoConfirmarSenha) {
    campoSenha.addEventListener("input", conferirSenhas);
    campoConfirmarSenha.addEventListener("input", conferirSenhas);
}

formularioConta.addEventListener("submit", function (evento) {
    evento.preventDefault();
    alert(formularioConta.dataset.mensagem);
    formularioConta.reset();
});
