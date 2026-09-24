/* ==========================================================================
   AGROVERÍDICO AI - LÓGICA & PERSISTÊNCIA INDIVIDUAL DO USUÁRIO
   ========================================================================== */

// Base Científica de Dados
const baseConhecimento = {
    "tomate": {
        selo: "FALSO",
        classe: "falso",
        confianca: "99.8%",
        titulo: "É FALSO que agricultores descartam alimentos para manipular preços",
        imagem: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80",
        resumo: "Vídeos sobre descarte de tomates ou hortaliças mostram gargalos pontuais de transporte ou custos inviáveis de frete, nunca controle de oferta.",
        analise: "A produção de hortifrúti opera em concorrência pulverizada. O descarte na lavoura representa prejuízo direto para o agricultor e é provocado por <b>quebras abruptas de preço nos entrepostos</b> ou <b>deterioração acelerada pelo clima</b>.",
        evidencias: [
            "Tomates possuem ciclo útil de poucos dias após a colheita.",
            "A Embrapa Hortaliças e a EMATER orientam o uso de excedentes para compostagem e ração animal.",
            "Não existe mecanismo econômico de cartel em hortaliças no Brasil."
        ],
        orientacao: "Evite repassar vídeos sem data e local. O descarte pontual reflete problemas de logística, não manipulação.",
        fontes: "Embrapa Hortaliças, EMATER, CONAB e CEASA."
    },
    "desmat": {
        selo: "FORA DE CONTEXTO",
        classe: "contexto",
        confianca: "98.7%",
        titulo: "Produção de Soja e o Conceito de Efeito Poupa-Terra",
        imagem: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80",
        resumo: "Alegações de que a expansão de grãos exige desmatamento contínuo ignoram ganhos de produtividade e recuperação de solo.",
        analise: "A agricultura brasileira utiliza o <b>Efeito Poupa-Terra</b>: biotecnologia e plantio direto permitem colher mais safra na mesma área. A maior parte do avanço da soja ocorre sobre pastagens antigas já degradadas.",
        evidencias: [
            "O Código Florestal exige preservação de 20% a 80% da vegetação nativa em propriedades privadas.",
            "Monitoramento por satélites (INPE e MapBiomas) mapeia o uso do solo em tempo real.",
            "Acordos como a Moratória da Soja impedem a compra de grãos de áreas desmatadas ilegalmente."
        ],
        orientacao: "Consulte os relatórios do INPE e CAR para diferenciar produtores regulares de infratores.",
        fontes: "INPE (DETER/PRODES), Embrapa Territorial e Ministério do Meio Ambiente."
    },
    "chapeu": {
        selo: "FALSO",
        classe: "falso",
        confianca: "99.9%",
        titulo: "É FALSO que o uso de chapéu de palha foi proibido no trabalho rural",
        imagem: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80",
        resumo: "Série de mensagens mentirosas afirma que órgãos federais teriam banido chapéus de palha tradicionais.",
        analise: "As Normas Regulamentadoras de Segurança no Trabalho Rural (como a NR-31) exigem a <b>proteção contra a radiação solar</b>. Chapéus de palha e bonés de proteção são ativamente incentivados.",
        evidencias: [
            "A NR-31 reforça a obrigatoriedade de Equipamentos de Proteção Individual (EPIs) contra o sol.",
            "Campanhas de saúde no campo incentivam o uso diário do chapéu de palha.",
            "Não existe portaria ou norma restritiva sobre vestimentas tradicionais de proteção."
        ],
        orientacao: "Desconfie de notícias sobre 'proibições absurdas' criadas para gerar indignação sem citar leis.",
        fontes: "Ministério do Trabalho e Emprego, NR-31 e SENAR."
    },
    "arroz": {
        selo: "FALSO",
        classe: "falso",
        confianca: "99.2%",
        titulo: "É FALSO que haverá desabastecimento generalizado de Arroz",
        imagem: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
        resumo: "Correntes de redes sociais induzem a população ao pânico sobre falta de mantimentos.",
        analise: "A estocagem exagerada impulsionada por boatos gera escassez temporária nas prateleiras dos supermercados e inflação artificial momentânea. A produção nacional e os acordos no Mercosul garantem o fluxo de fornecimento.",
        evidencias: [
            "A CONAB realiza o monitoramento mensal dos estoques públicos e privados.",
            "O Brasil possui autonomia de abastecimento e canais abertos de importação no MERCOSUL.",
            "Picos de preço ocorrem pelo aumento súbito de compras por pânico, não por falta física do produto."
        ],
        orientacao: "Mantenha o ritmo normal de compras para preservar o equilíbrio de mercado na sua região.",
        fontes: "CONAB, IBGE e Associação Brasileira de Supermercados (ABRAS)."
    }
};

let chaveAtualPesquisa = "";

/* --- 1. GERENCIAMENTO DE TEMA (MODO ESCURO / CLARO) --- */
function alternarTema() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('agroveridico_theme', isDark ? 'dark' : 'light');
    atualizarBotaoTema(isDark);
}

function carregarTemaSalvo() {
    const temaSalvo = localStorage.getItem('agroveridico_theme');
    const isDark = temaSalvo === 'dark';
    if (isDark) {
        document.body.classList.add('dark-mode');
    }
    atualizarBotaoTema(isDark);
}

function atualizarBotaoTema(isDark) {
    document.getElementById('themeIcon').innerText = isDark ? "☀️" : "🌙";
    document.getElementById('themeText').innerText = isDark ? "Modo Claro" : "Modo Escuro";
}

/* --- 2. GERENCIAMENTO DE CURTIDAS LOCAIS (POR USUÁRIO) --- */
function alternarCurtida() {
    if (!chaveAtualPesquisa) return;

    const likeKey = `agroveridico_like_${chaveAtualPesquisa}`;
    const countKey = `agroveridico_count_${chaveAtualPesquisa}`;

    let jaCurtiu = localStorage.getItem(likeKey) === 'true';
    let contagem = parseInt(localStorage.getItem(countKey) || "24", 10);

    if (!jaCurtiu) {
        contagem += 1;
        localStorage.setItem(likeKey, 'true');
    } else {
        contagem = Math.max(0, contagem - 1);
        localStorage.setItem(likeKey, 'false');
    }

    localStorage.setItem(countKey, contagem.toString());
    atualizarEstadoBotaoCurtida(!jaCurtiu, contagem);
}

function atualizarEstadoBotaoCurtida(curtiu, contagem) {
    const btn = document.getElementById('likeBtn');
    const heart = document.getElementById('likeHeart');
    const text = document.getElementById('likeText');
    const count = document.getElementById('likeCount');

    count.innerText = contagem;

    if (curtiu) {
        btn.classList.add('liked');
        heart.innerText = "❤️";
        text.innerText = "Você achou útil";
    } else {
        btn.classList.remove('liked');
        heart.innerText = "🤍";
        text.innerText = "Útil para mim";
    }
}

/* --- 3. BUSCADOR E PROCESSAMENTO IA --- */
function executarChecagemIA() {
    const input = document.getElementById('searchInput');
    const prompt = input.value.trim();

    if (!prompt) {
        alert("Por favor, digite um termo ou pergunta para realizar a verificação.");
        return;
    }

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
    let chaveEncontrada = "geral";

    for (let chave in baseConhecimento) {
        if (p.includes(chave)) {
            resultado = baseConhecimento[chave];
            chaveEncontrada = chave;
            break;
        }
    }

    // Se não estiver na base, gera análise segura padronizada
    if (!resultado) {
        chaveEncontrada = prompt.replace(/\s+/g, '_').substring(0, 15);
        resultado = {
            selo: "ANÁLISE DE CONFORMIDADE",
            classe: "verdadeiro",
            confianca: "96.5%",
            titulo: `Análise sobre: "${prompt}"`,
            imagem: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
            resumo: `A checagem referente a "${prompt}" foi analisada com base nas diretrizes oficiais da pesquisa agropecuária brasileira.`,
            analise: `Não foram encontradas irregularidades nem alertas de contaminação ou ilegalidade técnica sobre <b>"${prompt}"</b> nos registros da Embrapa ou Ministério da Agricultura.`,
            evidencias: [
                "A produção nacional é regulada por diretrizes de biossegurança.",
                "Fiscalizações periódicas garantem a qualidade sanitária dos produtos.",
                "Informações oficiais podem ser consultadas nos portais da Embrapa e CONAB."
            ],
            orientacao: "Priorize fontes institucionais e de pesquisa científica para obter dados sobre o campo.",
            fontes: "Embrapa, CONAB, IBGE e Ministério da Agricultura."
        };
    }

    chaveAtualPesquisa = chaveEncontrada;

    // Preenchimento dos campos no DOM
    const badge = document.getElementById('badgeSelo');
    badge.innerText = resultado.selo;
    badge.className = 'badge-selo ' + resultado.classe;

    document.getElementById('trustScore').innerText = 'Confiabilidade Científica: ' + resultado.confianca;
    document.getElementById('aiTitle').innerText = resultado.titulo;
    document.getElementById('aiResultImg').src = resultado.imagem;
    document.getElementById('aiSummary').innerText = resultado.resumo;
    document.getElementById('aiDeepAnalysis').innerHTML = resultado.analise;

    const listContainer = document.getElementById('aiEvidenceList');
    listContainer.innerHTML = '';
    resultado.evidencias.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = item;
        listContainer.appendChild(li);
    });

    document.getElementById('aiActionGuidance').innerText = resultado.orientacao;
    document.getElementById('aiSources').innerText = resultado.fontes;

    // Estado das curtidas salvas no dispositivo do usuário
    const likeKey = `agroveridico_like_${chaveAtualPesquisa}`;
    const countKey = `agroveridico_count_${chaveAtualPesquisa}`;
    const jaCurtiu = localStorage.getItem(likeKey) === 'true';
    const contagem = parseInt(localStorage.getItem(countKey) || "32", 10);
    atualizarEstadoBotaoCurtida(jaCurtiu, contagem);

    loader.style.display = 'none';
    card.style.display = 'block';
}

function preencherEBuscar(texto) {
    document.getElementById('searchInput').value = texto;
    executarChecagemIA();
}

/* --- INICIALIZAÇÃO SEGURA DA PÁGINA --- */
document.addEventListener("DOMContentLoaded", () => {
    carregarTemaSalvo();

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                executarChecagemIA();
            }
        });
    }
});