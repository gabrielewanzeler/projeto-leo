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

// Função para alternar o menu (sidebar) (abrir/fechar)
function alternarSidebar2() {
    var sidebar2 = document.querySelector('.sidebar2');
    sidebar2.classList.toggle('active');
}

// Adiciona evento de clique ao botão do menu
document.querySelector('.menu-button2').addEventListener('click', alternarSidebar2);

// Fecha o sidebar se clicar fora dele ou do botão
document.addEventListener('click', function(event) {
    var sidebar2 = document.querySelector('.sidebar2');
    var menuButton2 = document.querySelector('.menu-button2');
    
    if (!sidebar2.contains(event.target) && !menuButton2.contains(event.target)) {
        if (sidebar2.classList.contains('active')) {
            alternarSidebar2();
        }
    }
});
