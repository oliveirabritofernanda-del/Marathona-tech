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

const botao = document.getElementById('meuBotao');
const mensagem = document.getElementById('mensagem');
botao.addEventListener('click', function() {
    if (mensagem.classList.contains('escondido')) {
        mensagem.classList.remove('escondido');
        mensagem.classList.add('mostrar');
        botao.innerText = 'Fechar Mensagem';
    } else {
        mensagem.classList.remove('mostrar');
        mensagem.classList.add('escondido');
        botao.innerText = 'Clique Aqui';
    }
});

