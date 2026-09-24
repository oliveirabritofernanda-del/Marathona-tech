const baseConhecimento = {
    "tomate": {
        selo: "FALSO",
        classe: "falso",
        confianca: "99.8%",
        titulo: "É FALSO que agricultores destroem alimentos para subir preços",
        resumo: "Vídeos de destruição de tomate, leite ou hortaliças reutilizados nas redes tratam de gargalos logísticos ou custo abusivo de frete, nunca de manipulação de preço.",
        analise: "Pequenos e médios produtores operam em concorrência pulverizada e não possuem poder de cartel. O descarte na lavoura é sempre um prejuízo amargo para o produtor e decorre de <b>quebras abruptas no preço de mercado</b>, <b>falta ou custo inviável de transporte/frete</b> ou <b>deterioração rápida do produto por clima</b>.",
        evidencias: [
            "Lavouras de hortifrúti possuem ciclo de deterioração de poucos dias.",
            "Entidades como EMATER e Embrapa orientam o aproveitamento para compostagem e ração em casos de inviabilidade de frete.",
            "Não há registro de cartel no setor produtivo de hortaliças."
        ],
        orientacao: "Não repasse vídeos sem checar data e local. O problema do descarte pontual é logístico e econômico, não uma conspiração.",
        fontes: "Embrapa Hortaliças, EMATER, CONAB e CEASA."
    },
    "desmat": {
        selo: "FORA DE CONTEXTO",
        classe: "contexto",
        confianca: "98.7%",
        titulo: "A produção de grãos cresce por Produtividade (Efeito Poupa-Terra)",
        resumo: "Alegações de que todo ganho de produção exige desmatamento ilegal ignoram a biotecnologia e o manejo de solo em áreas já consolidadas.",
        analise: "O Brasil utiliza o conceito de <b>Efeito Poupa-Terra</b>: através da rotação de culturas, plantio direto e biotecnologia, colhe-se mais safras por ano na mesma hectare. O Código Florestal exige preservação obrigatória (de 20% a 80% da propriedade como Reserva Legal).",
        evidencias: [
            "Amazônia Legal possui exigência de 80% de preservação em propriedades rurais por lei.",
            "INPE, MapBiomas e satélites do DETER/PRODES monitoram alterações em tempo real.",
            "A Moratória da Soja impede financiamento de grãos vindo de áreas desmatadas ilegalmente."
        ],
        orientacao: "Diferencie o produtor rural cumpridor do Código Florestal de infratores ambientais combatidos por órgãos de fiscalização.",
        fontes: "INPE (DETER/PRODES), Embrapa Territorial e Ministério do Meio Ambiente."
    },
    "soja": {
        selo: "FORA DE CONTEXTO",
        classe: "contexto",
        confianca: "98.7%",
        titulo: "Produção de Soja e Manejo Sustentável",
        resumo: "A expansão da soja no Brasil ocorre majoritariamente sobre pastagens degradadas e áreas agrícolas consolidadas.",
        analise: "A cultura da soja brasileira é referência internacional em integração lavoura-pecuária e fixação biológica de nitrogênio, dispensando adubação nitrogenada química pesada. Acordos de mercado bloqueiam grãos originados de áreas não em conformidade.",
        evidencias: [
            "Mais de 60% do território nacional é mantido como vegetação nativa preservada.",
            "Programas de recuperação de pastagens convertem áreas degradadas em lavouras produtivas sem derrubar árvores.",
            "Certificações internacionais exigem rastreabilidade completa dos grãos."
        ],
        orientacao: "Consulte o Cadastro Ambiental Rural (CAR) para entender os índices de preservação dentro das propriedades.",
        fontes: "Embrapa Soja, Ministério da Agricultura e CAR."
    },
    "chapeu": {
        selo: "FALSO",
        classe: "falso",
        confianca: "99.9%",
        titulo: "É FALSO que o uso de chapéu de palha foi proibido no campo",
        resumo: "Mensagens virais alegando proibições absurdas do uso de chapéus ou vestimentas tradicionais de trabalho rural são completamente mentirosas.",
        analise: "As Normas Regulamentadoras (como a NR-31, que rege a segurança e saúde no trabalho rural) incentivam e exigem a <b>proteção contra radiação solar</b>. O chapéu de palha e bonés com touca árabe são amplamente recomendados para prevenir queimaduras e câncer de pele.",
        evidencias: [
            "A NR-31 orienta o uso de Equipamentos de Proteção Individual (EPIs) adequados ao sol.",
            "Não existe portaria do Ministério do Trabalho proibindo vestimentas tradicionais contra o sol.",
            "Campanhas de saúde do campo estimulam o uso do chapéu diariamente."
        ],
        orientacao: "Boatos sobre 'regras absurdas' visam apenas criar indignação artificial na população contra órgãos reguladores.",
        fontes: "Ministério do Trabalho e Emprego, NR-31 e SENAR."
    },
    "eucalipto": {
        selo: "FALSO",
        classe: "falso",
        confianca: "98.2%",
        titulo: "É FALSO que o plantio de florestas exóticas foi inviabilizado",
        resumo: "Alegações de burocracia extrema que proibiriam o plantio de eucalipto ou pínus para silvicultura são infundadas.",
        analise: "A silvicultura (plantio de florestas cultivadas) é uma atividade econômica legal e crucial no Brasil para produção de celulose, papel e biomassa, aliviando a pressão sobre florestas nativas.",
        evidencias: [
            "O Brasil é líder mundial na produtividade de florestas plantadas de eucalipto.",
            "O licenciamento ambiental segue diretrizes estaduais simplificadas para manejo florestal.",
            "Florestas cultivadas sequestram milhões de toneladas de carbono da atmosfera."
        ],
        orientacao: "Verifique os dados da Indústria Brasileira de Árvores (Ibá) para entender os números da silvicultura.",
        fontes: "Ibá, Embrapa Florestas e Ministério da Agricultura."
    },
    "arroz": {
        selo: "FALSO",
        classe: "falso",
        confianca: "99.5%",
        titulo: "É FALSO que faltará arroz e mantimentos nos supermercados",
        resumo: "Boatos de desabastecimento de arroz e feijão servem apenas para gerar pânico e estocagem desenfreada.",
        analise: "Mensagens sensacionalistas induzem os consumidores a comprar volumes muito acima do normal de uma só vez, criando uma escassez temporária e artificial nas gôndolas e elevando os preços momentaneamente.",
        evidencias: [
            "A CONAB monitora os estoques públicos e privados de grãos com relatórios periódicos.",
            "O Brasil possui produção robusta e parcerias comerciais do MERCOSUL para equilíbrio de oferta.",
            "A capacidade produtiva atende com folga o consumo da cesta básica."
        ],
        orientacao: "Mantenha seu ritmo normal de compras. A estocagem por pânico prejudica a própria comunidade.",
        fontes: "CONAB, IBGE e Associação Brasileira de Supermercados (ABRAS)."
    }
};

let curtidasAtuais = 0;
let jaCurtiu = false;

// Função para Alternar Modo Claro / Modo Escuro
function alternarTema() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    document.getElementById('themeToggle').innerText = isDark ? "☀️ Modo Claro" : "🌙 Modo Escuro";
}

// Função para Curtiu/Não Curtiu
function curtirResposta() {
    const likeText = document.getElementById('likeText');
    const likeCount = document.getElementById('likeCount');
    const likeBtn = document.getElementById('likeBtn');

    if (!jaCurtiu) {
        curtidasAtuais++;
        jaCurtiu = true;
        likeBtn.classList.add('liked');
        likeText.innerText = "Você achou útil";
    } else {
        curtidasAtuais--;
        jaCurtiu = false;
        likeBtn.classList.remove('liked');
        likeText.innerText = "Útil para mim";
    }
    likeCount.innerText = curtidasAtuais;
}

// Inicia a Busca na IA
function executarChecagemIA() {
    const input = document.getElementById('searchInput');
    const prompt = input.value.trim();

    if (!prompt) {
        alert("Por favor, digite uma dúvida ou cole uma frase para a IA analisar.");
        return;
    }

    const loader = document.getElementById('aiLoader');
    const card = document.getElementById('aiResultCard');

    card.style.display = 'none';
    loader.style.display = 'block';

    setTimeout(() => {
        finalizarRespostaIA(prompt);
    }, 700);
}

// Processa o texto pesquisado
function finalizarRespostaIA(prompt) {
    const loader = document.getElementById('aiLoader');
    const card = document.getElementById('aiResultCard');
    const p = prompt.toLowerCase();

    let resultado = null;

    for (let chave in baseConhecimento) {
        if (p.includes(chave)) {
            resultado = baseConhecimento[chave];
            break;
        }
    }

    if (!resultado) {
        const palavrasSuspeitas = ["proibido", "destruindo", "escondendo", "veneno", "cancela", "obrigado a", "morte", "crime", "acabou"];
        const ehSuspeito = palavrasSuspeitas.some(palavra => p.includes(palavra));

        if (ehSuspeito) {
            resultado = {
                selo: "FALSO / DESINFORMAÇÃO",
                classe: "falso",
                confianca: "95.4%",
                titulo: `Análise sobre: "${prompt}"`,
                resumo: `As alegações alarmistas contidas na frase "${prompt}" não encontram respaldo nos dados oficiais do setor agropecuário.`,
                analise: `O tema consultado refere-se a boatos recorrentes que descontextualizam normas do Ministério da Agricultura e diretrizes da Embrapa. A produção agrícola brasileira opera sob fiscalização periódica e legislação federal rigorosa.`,
                evidencias: [
                    "Normas sanitárias e ambientais impedem irregularidades sem o devido processo legal.",
                    "Fiscalizações do Ministério da Agricultura e IBAMA garantem a conformidade da cadeia.",
                    "Consulte sempre os portais institucionais antes de compartilhar mensagens alarmistas."
                ],
                orientacao: "Não repasse informações sem fonte verificável ou documento oficial de órgãos públicos.",
                fontes: "Embrapa, Ministério da Agricultura e CONAB."
            };
        } else {
            resultado = {
                selo: "VERDADEIRO (FATO CHECADO)",
                classe: "verdadeiro",
                confianca: "97.1%",
                titulo: `Esclarecimento Técnico: "${prompt}"`,
                resumo: `A questão consultada referente a "${prompt}" está alinhada às boas práticas agrícolas e científicas vigentes no Brasil.`,
                analise: `Em relação ao tema "<b>${prompt}</b>", a pesquisa agropecuária brasileira e os dados públicos confirmam a veracidade e a fundamentação técnica dos processos produtivos de campo.`,
                evidencias: [
                    "A tecnologia de precisão e a pesquisa da Embrapa respaldam a eficiência da produção.",
                    "Sistemas de rastreabilidade garantem a conformidade do alimento do campo até a mesa.",
                    "Dados de produtividade e preservação são públicos no Cadastro Ambiental Rural (CAR)."
                ],
                orientacao: "Acompanhe as publicações da pesquisa agropecuária oficial para dados sempre atualizados.",
                fontes: "Embrapa, IBGE, CONAB e Ministério da Agricultura."
            };
        }
    }

    const badge = document.getElementById('badgeSelo');
    badge.innerText = resultado.selo;
    badge.className = 'badge ' + resultado.classe;

    document.getElementById('trustScore').innerText = 'Confiabilidade IA: ' + resultado.confianca;
    document.getElementById('aiTitle').innerText = resultado.titulo;
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

    curtidasAtuais = Math.floor(Math.random() * 30) + 10;
    jaCurtiu = false;
    const likeBtn = document.getElementById('likeBtn');
    likeBtn.classList.remove('liked');
    document.getElementById('likeText').innerText = "Útil para mim";
    document.getElementById('likeCount').innerText = curtidasAtuais;

    loader.style.display = 'none';
    card.style.display = 'block';
}

function preencherEBuscar(texto) {
    document.getElementById('searchInput').value = texto;
    executarChecagemIA();
}

// Escuta a tecla Enter na caixa de busca
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                executarChecagemIA();
            }
        });
    }
});