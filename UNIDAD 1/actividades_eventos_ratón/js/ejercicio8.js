let p4 = document.getElementsByTagName('p')[3];
let contador3 = 0;

p4.addEventListener('click', () => {
    contador3++;
    if (contador3 % 2 === 1) {
        p4.style.color = '#e60000';
        p4.style.fontSize = '50px';
        p4.style.fontWeight = 'bold';
    } else {
        p4.style.color = 'black';
        p4.style.fontSize = '15px';
        p4.style.fontWeight = 'lighter';
    }
})