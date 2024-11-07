// Seleciona o botão
const backToTopButton = document.getElementById('backToTop');

// Exibe o botão quando o usuário rolar 100px para baixo
window.onscroll = function() {
    if (window.scrollY > 100) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
};

// Rola suavemente para o topo ao clicar no botão
backToTopButton.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};