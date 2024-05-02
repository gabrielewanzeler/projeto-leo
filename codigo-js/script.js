// Função para alternar o estado do sidebar (abrir/fechar)
function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    var sidebar = document.querySelector('.sidebar');
    var menuButton = document.querySelector('.menu-button');
    
    // Verifica se o clique ocorreu dentro do sidebar ou no botão do menu
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        // Se o clique ocorreu fora do sidebar e do botão do menu, e o sidebar está ativo, oculta o sidebar
        if (sidebar.classList.contains('active')) {
            toggleSidebar();
        }
    }
});
