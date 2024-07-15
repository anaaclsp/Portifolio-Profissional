document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    function adjustFooter() {
        const footer = document.querySelector('footer');
        const content = document.querySelector('.content');
        const contentHeight = content.offsetHeight;
        const windowHeight = window.innerHeight;

        if (contentHeight < windowHeight) {
            footer.style.position = 'absolute';
            footer.style.bottom = '0';
        } else {
            footer.style.position = 'static';
        }
    }

    window.addEventListener('resize', adjustFooter);
    window.addEventListener('scroll', adjustFooter);
    adjustFooter(); // Ajusta o footer ao carregar a página
});

// script.js
document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
  });