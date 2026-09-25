const painel = document.createElement("aside");
painel.className = "painel-acessibilidade";
painel.hidden = true;
painel.innerHTML = `
    <div class="topo-painel">
        <span class="material-symbols-outlined icone-painel">accessibility_new</span>
        <div>
            <h2 class="titulo-painel">Acessibilidade</h2>
            <p>Personalize sua experiência e navegue com mais conforto.</p>
        </div>
        <button class="fechar-painel" title="Fechar">
            <i class="fa-solid fa-xmark"></i>
        </button>
    </div>

    <section class="bloco-painel">
        <h3><i class="fa-solid fa-eye"></i> Daltonismo</h3>
        <div class="opcoes-daltonismo">
            <button class="opcao-daltonismo" data-modo="">
                <span class="bolinha desativado"><i class="fa-solid fa-eye-slash"></i></span>
                Desativado
            </button>
            <button class="opcao-daltonismo" data-modo="protanopia">
                <span class="bolinha protanopia"></span>
                Protanopia
            </button>
            <button class="opcao-daltonismo" data-modo="deuteranopia">
                <span class="bolinha deuteranopia"></span>
                Deuteranopia
            </button>
            <button class="opcao-daltonismo" data-modo="tritanopia">
                <span class="bolinha tritanopia"></span>
                Tritanopia
            </button>
        </div>
    </section>

    <section class="bloco-painel">
        <h3><i class="fa-solid fa-circle-half-stroke"></i> Alto Contraste</h3>
        <label class="linha-contraste">
            Desativado
            <input type="checkbox" id="alto-contraste" class="chave">
            Ativado
        </label>
    </section>

    <section class="bloco-painel">
        <h3><i class="fa-solid fa-text-height"></i> Tamanho de texto</h3>
        <div class="botoes-texto">
            <button class="botao-texto" data-texto="-10">A- Reduzir</button>
            <button class="botao-texto" data-texto="0">A Normal</button>
            <button class="botao-texto" data-texto="10">A+ Aumentar</button>
        </div>
    </section>

    <div class="dicas-painel">
        <i class="fa-solid fa-circle-info"></i>
        <div>
            <strong>Dicas de acessibilidade</strong>
            <p>Essas configurações são salvas automaticamente e podem ser alteradas a qualquer momento.</p>
        </div>
    </div>
`;
document.body.appendChild(painel);

const botaoAbrir = document.querySelector(".acessibilidade");
const botaoFechar = painel.querySelector(".fechar-painel");
const chaveContraste = painel.querySelector("#alto-contraste");
const botoesDaltonismo = painel.querySelectorAll(".opcao-daltonismo");
const botoesTexto = painel.querySelectorAll(".botao-texto");

let daltonismo = localStorage.getItem("daltonismo") || "";
let contraste = localStorage.getItem("contraste") === "sim";
let tamanhoTexto = Number(localStorage.getItem("tamanhoTexto")) || 100;

function aplicar() {
    const html = document.documentElement;

    html.classList.remove("protanopia", "deuteranopia", "tritanopia");
    if (daltonismo) {
        html.classList.add(daltonismo);
    }

    html.classList.toggle("alto-contraste", contraste);
    html.style.fontSize = tamanhoTexto + "%";

    botoesDaltonismo.forEach(function (botao) {
        botao.classList.toggle("selecionado", botao.dataset.modo === daltonismo);
    });
    chaveContraste.checked = contraste;

    localStorage.setItem("daltonismo", daltonismo);
    localStorage.setItem("contraste", contraste ? "sim" : "nao");
    localStorage.setItem("tamanhoTexto", tamanhoTexto);
}

botaoAbrir.addEventListener("click", function () {
    painel.hidden = !painel.hidden;
});

botaoFechar.addEventListener("click", function () {
    painel.hidden = true;
});

botoesDaltonismo.forEach(function (botao) {
    botao.addEventListener("click", function () {
        daltonismo = botao.dataset.modo;
        aplicar();
    });
});

chaveContraste.addEventListener("change", function () {
    contraste = chaveContraste.checked;
    aplicar();
});

botoesTexto.forEach(function (botao) {
    botao.addEventListener("click", function () {
        const passo = Number(botao.dataset.texto);

        if (passo === 0) {
            tamanhoTexto = 100;
        } else {
            tamanhoTexto = Math.min(140, Math.max(80, tamanhoTexto + passo));
        }
        aplicar();
    });
});

aplicar();
