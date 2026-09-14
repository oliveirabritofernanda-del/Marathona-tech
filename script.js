const baseConhecimentoEspecializada = {
    "tomate": {
        selo: "FALSO",
        classe: "falso",
        confianca: "99.8%",
        titulo: "Descarte Proposital de Tomates e Alimentos",
        imagem: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800",
        resumo: "É falso que produtores destruam toneladas de alimentos para forçar a alta dos preços nas grandes cidades.",
        analise: "O descarte pontual de produtos hortifrúti na lavoura é sempre a última e pior opção econômica do agricultor. Ele ocorre devido a <b>gargalos logísticos pontuais</b> (falta ou custo abusivo do frete), <b>interpéries climáticas</b> que estragam a qualidade comercial do produto, ou <b>quebras abruptas no preço de mercado</b>.",
        evidencias: [
            "Não existe atuação de cartel organizado entre pequenos e médios horticultores.",
            "Lavouras de tomate possuem ciclo de deterioração de poucos dias, exigindo escoamento imediato.",
            "A EMATER orienta o aproveitamento para compostagem e ração animal em casos de inviabilidade do frete."
        ],
        orientacao: "Não compartilhe vídeos alarmistas sem verificar a data e o local. O problema do descarte é logístico.",
        fontes: "Embrapa Hortaliças, EMATER-MG, CEASA e CONAB."
    },
    "desmatamento": {
        selo: "FORA DE CONTEXTO",
        classe: "contexto",
        confianca: "98.5%",
        titulo: "Expansão Agrícola vs. Preservação Ambiental",
        imagem: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
        resumo: "O crescimento da produção de grãos no Brasil é impulsionado pelo ganho de produtividade vertical.",
        analise: "As narrativas de que todo o agronegócio avança ilegalmente sobre florestas virgens ignoram os dados do <b>Código Florestal Brasileiro</b>. A produção de soja cresceu através de biotecnologia, manejo de solo e rotação de culturas.",
        evidencias: [
            "Propriedades na Amazônia Legal são obrigadas por lei a preservar 80% da área como Reserva Legal.",
            "O INPE e o MapBiomas monitoram via satélite alterações de cobertura do solo em tempo real.",
            "A Moratória da Soja impede o financiamento de grãos vindo de áreas desmatadas ilegalmente."
        ],
        orientacao: "Separe o produtor legalizado de atos de ilicitude ambiental combatidos pelos órgãos ambientais.",
        fontes: "INPE (PRODES/DETER), Embrapa Territorial e Ministério do Meio Ambiente."
    },
    "agrotoxico": {
        selo: "ANÁLISE CIENTÍFICA",
        classe: "ciencia",
        confianca: "97.9%",
        titulo: "Defensivos Agrícolas e Segurança do Consumidor",
        imagem: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800",
        resumo: "O uso de defensivos no Brasil passa por tripla regulação pública e rigorosos limites de resíduos.",
        analise: "Alegações de descontrole nos alimentos ignoram o monitoramento da <b>ANVISA (Programa PARA)</b>. Todo produto registrado passa por análises da ANVISA, IBAMA e Ministério da Agricultura.",
        evidencias: [
            "A aplicação exige obrigatoriamente Receituário Agronômico assinado por Engenheiro Agrônomo.",
            "Existem períodos de carência estritos que devem ser respeitados antes da colheita.",
            "O Brasil lidera a expansão global no uso de defensivos biológicos (bioinsumos)."
        ],
        orientacao: "Lave sempre frutas e verduras em água corrente antes do consumo.",
        fontes: "ANVISA, IBAMA e Ministério da Agricultura."
    },
    "arroz": {
        selo: "FALSO",
        classe: "falso",
        confianca: "99.1%",
        titulo: "Boatos sobre Desabastecimento de Arroz e Feijão",
        imagem: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800",
        resumo: "Alertas de pânico sobre falta de grãos nas gôndolas são falsos e causam inflação artificial.",
        analise: "Mensagens virais alegando desabastecimento total provocam corridas desnecessárias aos mercados, gerando um pico artificial de demanda que eleva temporariamente os preços.",
        evidencias: [
            "A CONAB realiza o acompanhamento contínuo dos estoques públicos e privados.",
            "O Brasil mantém fluxos de importação e exportação para equilibrar flutuações sazonais.",
            "A capacidade produtiva nacional supre com margem a demanda da cesta básica."
        ],
        orientacao: "Evite compras de estocagem por pânico. Mantenha seu consumo habitual.",
        fontes: "CONAB e IBGE."
    }
};

let curtidasAtuais = 0;
let jaCurtiu = false;

// Função do Botão de Curtir
function curtirResposta() {
    const likeBtn = document.getElementById('likeBtn');
    const likeCountSpan = document.getElementById('likeCount');
    const likeText = document.getElementById('likeText');

    if (!jaCurtiu) {
        curtidasAtuais++;
        jaCurtiu = true;
        likeBtn.classList.add('liked');
        likeText.innerText = "Você curtiu isto!";
    } else {
        curtidasAtuais--;
        jaCurtiu = false;
        likeBtn.classList.remove('liked');
        likeText.innerText = "Curtir esta análise";
    }
    likeCountSpan.innerText = curtidasAtuais;
}

// Alternar entre Modo Claro e Escuro
function alternarTema() {
    const body = document.body;
    const btn = document.getElementById('themeToggle');
    
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');

    btn.innerText = isDark ? "☀️ Modo Claro" : "🌙 Modo Escuro";
    localStorage.setItem('agroTema', isDark ? 'dark' : 'light');
}

// Carregar Tema Salvo nas Preferências
document.addEventListener("DOMContentLoaded", () => {
    const temaSalvo = localStorage.getItem('agroTema');
    if (temaSalvo === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('themeToggle').innerText = "☀️ Modo Claro";
    }
});

// Execução da Checagem IA
function executarChecagemIA() {
    const input = document.getElementById('searchInput');
    const prompt = input.value.trim();
    if (!prompt) return alert("Digite sua dúvida para checagem.");

    const loader = document.getElementById('aiLoader');
    const card = document.getElementById('aiResultCard');

    card.style.display = 'none';
    loader.style.display = 'block';

    setTimeout(() => {
        finalizarRespostaIA(prompt);
    }, 600);
}

function finalizarRespostaIA(prompt) {
    const loader = document.getElementById('aiLoader');
    const card = document.getElementById('aiResultCard');
    const p = prompt.toLowerCase();

    let resultado = null;

    for (let chave in baseConhecimentoEspecializada) {
        if (p.includes(chave)) {
            resultado = baseConhecimentoEspecializada[chave];
            break;
        }
    }

    if (!resultado) {
        resultado = {
            selo: "ANÁLISE CIENTÍFICA",
            classe: "ciencia",
            confianca: "96.5%",
            titulo: `Análise sobre: "${prompt}"`,
            imagem: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800",
            resumo: `A checagem automatizada processou os dados sobre "${prompt}" com base nos protocolos agrícolas brasileiros.`,
            analise: `Em relação ao tema consultado, o setor agropecuário brasileiro atua sob regulamentações estritas. A propagação de conteúdos não checados costuma descontextualizar os processos reais de campo.`,
            evidencias: [
                "A produção segue diretrizes da Embrapa e normas sanitárias federais.",
                "Fiscalizações periódicas inspecionam a qualidade nas centrais de distribuição.",
                "Consulte sempre canais oficiais do Ministério da Agricultura para validação."
            ],
            orientacao: "Valide as informações em sites institucionais antes de compartilhar em redes sociais.",
            fontes: "Embrapa, CONAB e Ministério da Agricultura."
        };
    }

    // Atualização dos elementos do DOM
    document.getElementById('badgeSelo').innerText = resultado.selo;
    document.getElementById('badgeSelo').className = 'badge ' + resultado.classe;
    document.getElementById('trustScore').innerText = 'Confiabilidade: ' + resultado.confianca;
    document.getElementById('aiTitle').innerText = resultado.titulo;
    document.getElementById('aiSummary').innerText = resultado.resumo;
    document.getElementById('aiDeepAnalysis').innerHTML = resultado.analise;

    // Imagem
    const imgElement = document.getElementById('aiResultImage');
    if (resultado.imagem) {
        imgElement.src = resultado.imagem;
        imgElement.style.display = 'inline-block';
    } else {
        imgElement.style.display = 'none';
    }

    // Evidências
    const listContainer = document.getElementById('aiEvidenceList');
    listContainer.innerHTML = '';
    resultado.evidencias.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = item;
        listContainer.appendChild(li);
    });

    document.getElementById('aiActionGuidance').innerText = resultado.orientacao;
    document.getElementById('aiSources').innerText = resultado.fontes;

    // Reset do Botão de Curtir para nova checagem
    curtidasAtuais = Math.floor(Math.random() * 45) + 12; // Valor inicial simulado
    jaCurtiu = false;
    const likeBtn = document.getElementById('likeBtn');
    likeBtn.classList.remove('liked');
    document.getElementById('likeText').innerText = "Curtir esta análise";
    document.getElementById('likeCount').innerText = curtidasAtuais;

    loader.style.display = 'none';
    card.style.display = 'block';
}

function preencherEBuscar(texto) {
    document.getElementById('searchInput').value = texto;
    executarChecagemIA();
}

document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') executarChecagemIA();
});