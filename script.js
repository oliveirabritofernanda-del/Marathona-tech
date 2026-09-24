const database = [
  {
    keyword: "descarte",
    verdict: "FALSO / DESINFORMAÇÃO",
    text: "Vídeos de descarte usam imagens antigas fora de contexto. Perdas ocasionais no campo decorrem de falhas severas de logística, transporte ou fatores climáticos imprevistos, e não de estratégia deliberada para manipular preços."
  },
  {
    keyword: "arroz",
    verdict: "FALSO / PÂNICO INFUNDADO",
    text: "Alarde sobre falta de suprimento gera estocagem desnecessária. A produção nacional e os estoques de segurança atendem à demanda regular da população."
  },
  {
    keyword: "eucalipto",
    verdict: "FALSO",
    text: "O cultivo de florestas exóticas segue normas ambientais específicas e não há restrições absurdas de vestuário. Decisões no campo devem ser alinhadas com técnicos da EMATER ou agrônomos de confiança."
  }
];

function checkFact() {
  const input = document.getElementById("searchInput").value.toLowerCase().trim();
  const resultBox = document.getElementById("resultBox");

  if (!input) {
    resultBox.style.display = "block";
    resultBox.style.backgroundColor = "#fff3cd";
    resultBox.style.color = "#856404";
    resultBox.innerHTML = "<p><strong>Atenção:</strong> Digite um termo no campo de busca para verificar (ex: descarte, arroz, eucalipto).</p>";
    return;
  }

  const match = database.find(item => input.includes(item.keyword));

  resultBox.style.display = "block";
  if (match) {
    resultBox.style.backgroundColor = "#d4edda";
    resultBox.style.color = "#155724";
    resultBox.innerHTML = `<h4>Status: ${match.verdict}</h4><p>${match.text}</p>`;
  } else {
    resultBox.style.backgroundColor = "#e2e3e5";
    resultBox.style.color = "#383d41";
    resultBox.innerHTML = "<h4>Informação Não Catalogada</h4><p>Não encontramos registros para este boato específico. Antes de compartilhar, consulte orientação de agrônomos, Embrapa ou EMATER. Evite propagar informações sem respaldo técnico.</p>";
  }
}