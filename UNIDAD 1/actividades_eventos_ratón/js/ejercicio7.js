let p3 = document.getElementsByTagName('p')[2];
let contador2 = 0;

p3.addEventListener('click', () => {
    contador2++;
    if (contador2 % 2 === 1) {
        p3.style.color = '#00ff00';
        p3.style.fontSize = '40px';
        p3.style.fontWeight = 'bold';
    } else {
        p3.style.color = 'black';
        p3.style.fontSize = '15px';
        p3.style.fontWeight = 'lighter';
    }
})