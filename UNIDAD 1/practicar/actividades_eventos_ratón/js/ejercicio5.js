let p1 = document.getElementsByTagName('p')[0];
let cont = 0;


p1.addEventListener('click', () => {
    cont++;
    if (cont % 2 === 1) {
        p1.style.color = '#8f00ff';
        p1.style.fontSize = '20px';
        p1.style.fontWeight = 'bold';
    } else {
        p1.style.color = 'black';
        p1.style.fontSize = '15px';
        p1.style.fontWeight = 'lighter';
    }
})