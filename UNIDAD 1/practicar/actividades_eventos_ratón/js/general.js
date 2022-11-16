/* 
1
*/

const imgMenu = document.getElementsByTagName('img')[0];
imgMenu.src = 'https://images.pexels.com/photos/7664118/pexels-photo-7664118.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load';


/* 
2
*/
const header = document.querySelector('.header');
header.style.backgroundImage = 'url(https://images.pexels.com/photos/10026524/pexels-photo-10026524.png?auto=compress&cs=tinysrgb&w=600&lazy=load)';

/* 
3
*/

const titulo = document.getElementsByTagName('h1')[0];
titulo.addEventListener('mouseenter', (e) => {
    titulo.textContent = 'Restaurante fino';
});

titulo.addEventListener('mouseleave', (e) => {
    titulo.textContent = 'CA VICENT';
});

/* 
4
*/
const nutrisection = document.getElementsByClassName('nutrition')[0];
let cont = 0;
titulo.addEventListener('click', (e) => {
    cont++;
    (cont % 2 !== 0) ? nutrisection.style.display = 'none':
        nutrisection.style.display = 'block';
});

/* 
5, 6, 7, 8
*/

const p1 = document.getElementsByTagName('p')[0];
p1.addEventListener('click', () => {
    p1.style.color = 'lightblue';
    p1.style.fontWeight = 'bold';
    p1.style.fontSize = '20px';
});

const p2 = document.getElementsByTagName('p')[1];
p2.addEventListener('click', () => {
    p2.style.color = 'salmon';
    p2.style.fontWeight = 'bold';
    p2.style.fontSize = '30px';
});

const p3 = document.getElementsByTagName('p')[2];
p3.addEventListener('click', () => {
    p3.style.color = 'brown';
    p3.style.fontWeight = 'bold';
    p3.style.fontSize = '40px';
});

const p4 = document.getElementsByTagName('p')[3];
p4.addEventListener('click', () => {
    p4.style.color = 'fuchsia';
    p4.style.fontWeight = 'bold';
    p4.style.fontSize = '50px';
});