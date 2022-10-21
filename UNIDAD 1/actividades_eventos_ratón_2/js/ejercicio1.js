const titulo = document.getElementsByTagName('h1')[0];
const table = document.getElementById('tablebot');
let cont = 0;
titulo.addEventListener('dblclick', () => {
    cont++;

    if (cont % 2 === 1) {
        table.style.display = 'none';
    } else {
        table.style.display = 'block';
    }
})