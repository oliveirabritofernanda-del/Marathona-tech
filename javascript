// Seleciona os elementos do HTML pelo ID
const botao = document.getElementById('meuBotao');
const mensagem = document.getElementById('mensagem');

// Adiciona um evento de clique ao botão
botao.addEventListener('click', function() {
    // Alterna a classe da mensagem para mostrar ou esconder
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
