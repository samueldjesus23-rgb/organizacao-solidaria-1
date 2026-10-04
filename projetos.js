const projetos = [
    {
        nome: "Reforço Escolar Comunitário",
        descricao: "Auxílio a crianças do ensino fundamental para recuperar defasagens de aprendizagem.",
        imagem: "assets/images/quem-somos.webp",
        acao: "Quero ser Professor Voluntário"
    },
    {
        nome: "Distribuição de Alimentos",
        descricao: "Organização e entrega de cestas básicas para famílias em situação de vulnerabilidade.",
        imagem: "assets/images/apoios.webp",
        acao: "Quero ajudar na Distribuição"
    },
    {
        nome: "Apoio Financeiro Mensal",
        descricao: "Doações recorrentes que ajudam a manter os projetos sociais durante todo o ano.",
        imagem: "assets/images/trabalho-ap.webp",
        acao: "Tornar-se Doador Mensal"
    },
    {
        nome: "Doação de Roupas e Agasalhos",
        descricao: "Arrecadação de itens em bom estado para campanhas de inverno e apoio às famílias.",
        imagem: "assets/images/apoios.webp",
        acao: "Agendar Coleta de Agasalho"
    }
];

export function initProjetos() {
    const container = document.querySelector("#lista-projetos");
    if (!container) return;

    container.innerHTML = projetos.map((projeto, index) => `
        <article class="project-card">
            <img src="${projeto.imagem}" alt="Imagem ilustrativa do projeto ${projeto.nome}" loading="lazy" width="800" height="450">
            <h3>${projeto.nome}</h3>
            <p>${projeto.descricao}</p>
            <div class="card-actions">
                <a class="button primary" href="cadastro.html?interesse=${index}">
                    ${projeto.acao}
                </a>
                <button class="button secondary" type="button" data-info="${index}">
                    Ver informações
                </button>
            </div>
        </article>
    `).join("");

    container.querySelectorAll("[data-info]").forEach(button => {
        button.addEventListener("click", () => abrirModal(projetos[Number(button.dataset.info)]));
    });
}

function abrirModal(projeto) {
    const modal = document.querySelector("#info-modal");
    if (!modal) return;
    document.querySelector("#modal-titulo").textContent = projeto.nome;
    document.querySelector("#modal-texto").textContent = projeto.descricao;
    if (typeof modal.showModal === "function") modal.showModal();
}
