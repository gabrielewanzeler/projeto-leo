// Função para alternar o menu(sidebar) (abrir/fechar)
function alternarSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    var sidebar = document.querySelector('.sidebar');
    var menuButton = document.querySelector('.menu-button');
    
    // Verifica se o clique aconteceu dentro do sidebar ou no botão do menu
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        // Se foi fora do sidebar ou do botão, e o sidebar está ativo, oculta o sidebar
        if (sidebar.classList.contains('active')) {
            alternarSidebar();
        }
    }
});