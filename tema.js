
const botaoTema = document.getElementById("botao-tema");

let temaAtual = localStorage.getItem("tema") || "claro";

function aplicarTema() {
    document.documentElement.setAttribute("data-tema", temaAtual);

    botaoTema.textContent = temaAtual === "escuro"
        ? "Tema claro"
        : "Tema escuro";
}

botaoTema.addEventListener("click", () => {
    temaAtual = temaAtual === "claro" ? "escuro" : "claro";

    localStorage.setItem("tema", temaAtual);

    aplicarTema();
});

aplicarTema();
