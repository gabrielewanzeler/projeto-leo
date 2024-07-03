document.addEventListener("DOMContentLoaded", function() {
    // em todas as páginas
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('afterbegin', data);
        })
        .catch(error => console.error('Erro ao carregar o cabeçalho:', error));
});