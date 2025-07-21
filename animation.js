// 1. Espera o conteúdo da página carregar completamente. É uma boa prática.
document.addEventListener('DOMContentLoaded', () => {

    // 2. Seleciona o elemento que queremos animar.
    // O JavaScript agora "sabe" qual imagem observar.
    const elementoParaAnimar = document.querySelector('.imagem-animada');

    // 3. Cria a função que verifica se o elemento está na tela.
    function verificarAnimacao() {
        // Pega a posição do elemento em relação à janela do navegador.
        const posicaoDoElemento = elementoParaAnimar.getBoundingClientRect().top;
        
        // Pega a altura da janela do navegador.
        const alturaDaJanela = window.innerHeight;

        // Se a posição do topo do elemento for menor que a altura da janela,
        // significa que ele já apareceu na tela.
        // O "- 100" é um pequeno ajuste para a animação começar um pouco antes do elemento chegar totalmente na base da tela.
        if (posicaoDoElemento < alturaDaJanela - 100) {
            // Adiciona a classe "visivel" ao elemento!
            elementoParaAnimar.classList.add('visivel');

            // Opcional: depois que a animação acontece uma vez, podemos parar de "escutar" o evento de rolagem para melhorar um pouco o desempenho.
            window.removeEventListener('scroll', verificarAnimacao);
        }
    }

    // 4. Adiciona um "ouvinte de eventos" à janela.
    // Toda vez que o usuário ROLAR a página, a função verificarAnimacao será executada.
    window.addEventListener('scroll', verificarAnimacao);

    // Executa a função uma vez no início, caso o elemento já esteja visível sem rolar.
    verificarAnimacao();
});