const form = document.getElementById("formContato");

form.addEventListener("submit", function(event) {

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const regexNome = /^[A-Za-zÀ-ÿ\s]+$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexNome.test(nome)) {
        alert("Favor inserir nome completo.");
        event.preventDefault();
        return;
    }

    if (!regexEmail.test(email)) {
        alert("E-mail inválido.");
        event.preventDefault();
        return;
    }

    if (mensagem.length < 20) {
        alert("A mensagem deve ter pelo menos 20 caracteres.");
        event.preventDefault();
        return;
    }

    alert("Formulário enviado.");

});
