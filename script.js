const baseDadosAgro = {
    "tomate": {
        selo: "FALSO",
        classe: "falso",
        titulo: "Descarte Proposital de Alimentos para Aumentar Preços",
        explicacao: "O descarte pontual de lavouras não é uma ação de cartel. Ele ocorre devido a gargalos graves de logística (falta de frete ou estradas intrafegáveis), quebras de safras por eventos climáticos extremos ou quedas abruptas de mercado, situações nas quais o custo do transporte supera o próprio valor de venda do produto.",
        fonte: "Fonte Oficial: Relatórios de Mercado da Embrapa Hortaliças e EMATER."
    },
    "desmatamento": {
        selo: "FORA DE CONTEXTO",
        classe: "contexto",
        titulo: "Expansão Desenfreada e Ilegal da Área Agrícola",
        explicacao: "A tecnologia agrícola desenvolvida no Brasil impulsiona o fenômeno 'poupa-terra'. A produtividade cresce de forma verticalizada (mais alimentos na mesma área), reduzindo a necessidade de novas aberturas de terra. O Código Florestal exige a preservação de até 80% das propriedades na Amazônia.",
        fonte: "Fonte Oficial: Dados de Satélite do INPE (PRODES) e Levantamento do IBGE."
    },
    "chapeu": {
        selo: "FALSO",
        classe: "falso",
        titulo: "Proibição Trabalhista do Uso de Chapéu de Palha",
        explicacao: "Não existe qualquer legislação que proíba o uso de chapéu de palha ou trajes tradicionais de proteção no campo. Pelo contrário, as normas regulamentadoras (NR-31) exigem proteção solar e Equipamentos de Proteção Individual (EPI) para o trabalhador rural.",
        fonte: "Fonte Oficial: Ministério do Trabalho e Emprego / EMATER."
    },
    "eucalipto": {
        selo: "FALSO",
        classe: "falso",
        titulo: "Exigência de Licença Internacional para Plantio de Eucalipto",
        explicacao: "Pequenos produtores não necessitam de licenças ambientais internacionais nem pagam taxas estrangeiras para cultivar florestas plantadas de subsistência ou manejo local em suas propriedades.",
        fonte: "Fonte Oficial: Código Florestal Brasileiro e Secretarias de Meio Ambiente."
    },
    "arroz": {
        selo: "FALSO",
        classe: "falso",
        titulo: "Risco Iminente de Desabastecimento e Falta de Grãos",
        explicacao: "Boatos sobre a falta de itens essenciais na cesta básica induzem o consumidor urbano ao pânico, provocando corridas artificiais aos supermercados. Os estoques reguladores e o acompanhamento de safra garantem a estabilidade de oferta.",
        fonte: "Fonte Oficial: Boletins de Monitoramento de Safra da CONAB."
    }
};

function buscarChecagem() {
    const termo = document.getElementById('searchInput').value.toLowerCase().trim();
    const resultBox = document.getElementById('resultBox');
    const badge = document.getElementById('badge');
    const title = document.getElementById('resultTitle');
    const text = document.getElementById('resultText');
    const fonte = document.getElementById('resultFonte');

    if (!termo) {
        alert("Por favor, digite um termo ou palavra-chave para checar.");
        return;
    }

    let encontrado = null;
    for (let chave in baseDadosAgro) {
        if (termo.includes(chave)) {
            encontrado = baseDadosAgro[chave];
            break;
        }
    }

    if (encontrado) {
        badge.innerText = encontrado.selo;
        badge.className = 'badge ' + encontrado.classe;
        title.innerText = encontrado.titulo;
        text.innerText = encontrado.explicacao;
        fonte.innerText = encontrado.fonte;
    } else {
        badge.innerText = "EM ANÁLISE / NÃO ENCONTRADO";
        badge.className = 'badge neutro';
        title.innerText = "Informação ainda não indexada";
        text.innerText = "Este boato ainda não possui um relatório cadastrado na nossa base. Nossa equipe técnica de agronomia e os parceiros oficiais (Embrapa/EMATER) estão monitorando novas narrativas virais.";
        fonte.innerText = "Consulte os portais oficiais da Embrapa, CONAB ou EMATER.";
    }

    resultBox.style.display = 'block';
}