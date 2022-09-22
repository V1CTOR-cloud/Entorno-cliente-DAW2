let titulo = document.getElementsByTagName('h1')[0];

titulo.addEventListener('mouseenter', function() {
    titulo.textContent = "Texto de ejemplo";
});

titulo.addEventListener('mouseleave', function() {
    titulo.textContent = "CA VICENT";
})