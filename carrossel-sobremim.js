
const conteudos = [
    {
        titulo: "FAC 2024",
        imagem: "./Imagens/fac-2024.jpeg",
    },
    {
        titulo: "FAC 2026",
        imagem: "./Imagens/fac-2026.jpeg",
    },
    {
        titulo: "Fórmula 1 2025",
        imagem: "./Imagens/formula-1.jpeg",
    },
    {
        titulo: "Mirim 2023",
        imagem: "./Imagens/mirim-2023.jpeg",
    },
    {
        titulo: "Mirim 2025",
        imagem: "./Imagens/mirim-2025.jpeg",
    }
];

let indiceAtual = 0;
let animando = false;

// Container do carrossel
const container = document.getElementById("carrossel-sobremim");

// Exibir os conteúdos
function mostrarCarrossel() {

    const anterior = (indiceAtual - 1 + conteudos.length) % conteudos.length;
    const proximo = (indiceAtual + 1) % conteudos.length;

    container.innerHTML = `

        <div class="item lateral">
            <img src="${conteudos[anterior].imagem}" alt="${conteudos[anterior].titulo}">
            <h3>${conteudos[anterior].titulo}</h3>
        </div>

        <div class="item central">
            <img src="${conteudos[indiceAtual].imagem}" alt="${conteudos[indiceAtual].titulo}">
            <div class="descricao">
                <h2>${conteudos[indiceAtual].titulo}</h2>
            </div>
        </div>

        <div class="item lateral">
            <img src="${conteudos[proximo].imagem}" alt="${conteudos[proximo].titulo}">
            <h3>${conteudos[proximo].titulo}</h3>
        </div>

    `;
}

function mudarCarrossel(direcao) {

    indiceAtual = (indiceAtual + direcao + conteudos.length) % conteudos.length;

    mostrarCarrossel();

}

// Botão anterior
document.getElementById("anterior").addEventListener("click", () => {
    mudarCarrossel(-1);
});

// Botão próximo
document.getElementById("proximo").addEventListener("click", () => {
    mudarCarrossel(1);
});

// Iniciar carrossel
mostrarCarrossel();