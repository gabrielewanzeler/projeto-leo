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

function alternarSidebar2() {
    var sidebar2 = document.querySelector('.sidebar2');
    var cont1 = document.querySelector('.container-proj');
    sidebar2.classList.toggle('active');
    cont1.classList.toggle('blur');
}

//document.querySelector('.menu-button2').addEventListener('click', alternarSidebar2);
document.addEventListener('click', function(event) {
    var sidebar2 = document.querySelector('.sidebar2');
    var menuButton2 = document.querySelector('.menu-button2');
    
    if (!sidebar2.contains(event.target) && !menuButton2.contains(event.target)) {
        if (sidebar2.classList.contains('active')) {
            alternarSidebar2();
        }
    }
});

function alternarSidebar3() {
    var sidebar3 = document.querySelector('.sidebar3');
    var container1 = document.querySelector('.container1');
    sidebar3.classList.toggle('active');
    container1.classList.toggle('blur');
}

//document.querySelector('.menu-button3').addEventListener('click', alternarSidebar3);
document.addEventListener('click', function(event) {
    var sidebar3 = document.querySelector('.sidebar3');
    var menuButton3 = document.querySelector('.menu-button3');
    
    if (!sidebar3.contains(event.target) && !menuButton3.contains(event.target)) {
        if (sidebar3.classList.contains('active')) {
            alternarSidebar3();
        }
    }
});