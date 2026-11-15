
const conteudos = [
    {
        titulo: "Casa Aberta Senac",
        imagem: "./Imagens/casa-aberta.jpeg",
        descricao: "Um evento que reuniu várias atrações de cursos e oficinas muito interessantes."
    },
    {
        titulo: "Aula de Pintura",
        imagem: "./Imagens/aula-pintura.jpeg",
        descricao: "Atividade extracurricular que nos ensinou a explorar nossa criatividade."
    },
    {
        titulo: "Passeio na UNESP",
        imagem: "./Imagens/unesp-passeio.jpeg",
        descricao: "Dia em que conhecemos uma das maiores universidades públicas do estado."
    },
    {
        titulo: "Dia no SESC",
        imagem: "./Imagens/sesc-passeio.jpeg",
        descricao: "Passeio em que pudemos aproveitar as atividades do SESC."
    },
    {
        titulo: "Visita ao Museu",
        imagem: "./Imagens/museu-passeio.jpeg",
        descricao: "Uma visita que mudou o nosso olhar sobre a cidade de Presidente Prudente."
    }
];

let indiceAtual = 0;
let animando = false;

// Container do carrossel
const container = document.getElementById("carrossel-container");

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
                <p>${conteudos[indiceAtual].descricao}</p>
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