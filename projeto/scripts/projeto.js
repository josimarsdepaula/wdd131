const servicos = [
    {
        id: 1,
        nome: "Desenvolvimento Web",
        categoria: "desenvolvimento",
        descricao: "Criação de sites responsivos, modernos e preparados para diferentes dispositivos.",
        icone: "🌐"
    },
    {
        id: 2,
        nome: "Desenvolvimento de Sistemas",
        categoria: "desenvolvimento",
        descricao: "Sistemas personalizados para organizar informações e melhorar processos empresariais.",
        icone: "💻"
    },
    {
        id: 3,
        nome: "Automação de Processos",
        categoria: "automacao",
        descricao: "Automação de tarefas repetitivas para reduzir trabalho manual e aumentar a produtividade.",
        icone: "⚙️"
    },
    {
        id: 4,
        nome: "Inteligência Artificial",
        categoria: "inteligencia",
        descricao: "Aplicações de inteligência artificial para atendimento, análise de informações e automação.",
        icone: "🤖"
    },
    {
        id: 5,
        nome: "Consultoria em Tecnologia",
        categoria: "consultoria",
        descricao: "Orientação para empresas que desejam escolher e utilizar tecnologias de forma estratégica.",
        icone: "💡"
    }
];

function atualizarRodape() {
    const ano = document.querySelector("#ano");
    const modificado = document.querySelector("#modificado");
    if (ano) {
        ano.textContent = `${new Date().getFullYear()}`;
    }
    if (modificado) {
        modificado.textContent = `${document.lastModified}`;
    }
}

function criarCardServico(servico) {
    return `
<article class="cartao">
<span class="icone-servico" aria-hidden="true">${servico.icone}</span>
<h3>${servico.nome}</h3>
<p>${servico.descricao}</p>
<a class="link-destaque" href="contato.html">Solicitar informações →</a>
</article>
`;
}

function mostrarServicos(lista, elemento) {
    if (!elemento) {
        return;
    }
    if (lista.length === 0) {
        elemento.innerHTML = `<p>Nenhum serviço encontrado para esta categoria.</p>`;
        return;
    }
    elemento.innerHTML = lista.map(criarCardServico).join("");
}

function carregarServicosInicio() {
    const elemento = document.querySelector("#cards-servicos");
    if (elemento) {
        const destaques = servicos.slice(0, 3);
        mostrarServicos(destaques, elemento);
    }
}

function carregarTodosServicos() {
    const elemento = document.querySelector("#lista-servicos");
    if (!elemento) {
        return;
    }
    mostrarServicos(servicos, elemento);
}

function filtrarServicos(categoria) {
    const elemento = document.querySelector("#lista-servicos");
    const mensagem = document.querySelector("#mensagem-servicos");
    if (!elemento) {
        return;
    }
    if (categoria === "todos") {
        mostrarServicos(servicos, elemento);
        if (mensagem) {
            mensagem.textContent = `Exibindo todos os ${servicos.length} serviços disponíveis.`;
        }
        return;
    }
    const resultado = servicos.filter((servico) => servico.categoria === categoria);
    mostrarServicos(resultado, elemento);
    if (mensagem) {
        if (resultado.length > 0) {
            mensagem.textContent = `Encontramos ${resultado.length} serviço(s) nesta categoria.`;
        } else {
            mensagem.textContent = `Nenhum serviço foi encontrado nesta categoria.`;
        }
    }
}

function configurarFiltros() {
    const botoes = document.querySelectorAll("[data-filtro]");
    if (botoes.length === 0) {
        return;
    }
    botoes.forEach((botao) => {
        botao.addEventListener("click", () => {
            botoes.forEach((item) => {
                item.classList.remove("filtro-ativo");
            });
            botao.classList.add("filtro-ativo");
            filtrarServicos(botao.dataset.filtro);
        });
    });
}

function configurarMenu() {
    const botao = document.querySelector(".menu-botao");
    const navegacao = document.querySelector("nav");
    if (!botao || !navegacao) {
        return;
    }
    botao.addEventListener("click", () => {
        const aberto = botao.getAttribute("aria-expanded") === "true";
        botao.setAttribute("aria-expanded", `${!aberto}`);
        navegacao.classList.toggle("menu-aberto");
        if (aberto) {
            botao.setAttribute("aria-label", "Abrir menu de navegação");
        } else {
            botao.setAttribute("aria-label", "Fechar menu de navegação");
        }
    });
}

function salvarSolicitacao(dados) {
    const solicitacoes = JSON.parse(localStorage.getItem("solicitacoesCodeCase")) || [];
    solicitacoes.push(dados);
    localStorage.setItem("solicitacoesCodeCase", JSON.stringify(solicitacoes));
    return solicitacoes.length;
}

function configurarFormulario() {
    const formulario = document.querySelector("#formulario-orcamento");
    const mensagem = document.querySelector("#mensagem-formulario");
    if (!formulario) {
        return;
    }
    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();
        const dados = new FormData(formulario);
        const solicitacao = {
            nome: dados.get("nome"),
            email: dados.get("email"),
            empresa: dados.get("empresa"),
            servico: dados.get("servico"),
            orcamento: dados.get("orcamento"),
            mensagem: dados.get("mensagem"),
            prazo: dados.get("prazo"),
            data: `${new Date().toLocaleDateString("pt-BR")}`
        };
        const total = salvarSolicitacao(solicitacao);
        if (mensagem) {
            mensagem.textContent = `Obrigado, ${solicitacao.nome}! Sua solicitação foi registrada. Esta é a solicitação número ${total}.`;
        }
        formulario.reset();
    });
}

function iniciarPagina() {
    atualizarRodape();
    carregarServicosInicio();
    carregarTodosServicos();
    configurarFiltros();
    configurarMenu();
    configurarFormulario();
}

iniciarPagina();