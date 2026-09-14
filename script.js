const baseDados = {
    "tomate": {
        selo: "FALSO",
        classe: "falso",
        titulo: "Descarte Proposital de Alimentos",
        explicacao: "O descarte pontual ocorre devido a gargalos logísticos e custos de frete superiores ao valor de venda, e não por estratégia deliberada de inflacionar preços.",
        fonte: "Fonte Técnica: Relatórios de Mercado da Embrapa Horta e EMATER."
    },
    "desabastecimento": {
        selo: "FALSO",
        classe: "falso",
        titulo: "Pânico de Falta de Grãos",
        explicacao: "A produção nacional e o monitoramento dos estoques reguladores garantem a oferta normal nos supermercados.",
        fonte: "Fonte Técnica: Boletim de Abastecimento da CONAB."
    }
};

function buscarChecagem() {
    const termo = document.getElementById('searchInput').value.toLowerCase();
    const resultBox = document.getElementById('resultBox');
    const badge = document.getElementById('badge');
    const title = document.getElementById('resultTitle');
    const text = document.getElementById('resultText');
    const fonte = document.getElementById('resultFonte');

    let encontrado = null;
    for (let chave in baseDados) {
        if (termo.includes(chave)) {
            encontrado = baseDados[chave];
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
        badge.innerText = "NÃO ENCONTRADO";
        badge.className = 'badge';
        badge.style.backgroundColor = '#6c757d';
        title.innerText = "Informação em Análise";
        text.innerText = "Este termo ainda não foi checado ou necessita de revisão pela nossa equipe técnica.";
        fonte.innerText = "Consulte os canais oficiais da Embrapa ou EMATER.";
    }

    resultBox.style.display = 'block';
}