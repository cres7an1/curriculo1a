document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links de navegação
    const navLinks = document.querySelectorAll('nav a');

    // Adiciona um evento de clique para rolar suavemente para a seção correspondente
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link

            // Obtém o destino do link
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Rola suavemente até a seção alvo
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

