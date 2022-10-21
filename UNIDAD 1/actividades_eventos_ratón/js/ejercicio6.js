let p2 = document.getElementsByTagName('p')[1];
let contador1 = 0;

p2.addEventListener('click', () => {
    contador1++;
    if (contador1 % 2 === 1) {
        p2.style.color = '#0892d0';
        p2.style.fontSize = '30px';
        p2.style.fontWeight = 'bold';
    } else {
        p2.style.color = 'black';
        p2.style.fontSize = '15px';
        p2.style.fontWeight = 'lighter';
    }
})