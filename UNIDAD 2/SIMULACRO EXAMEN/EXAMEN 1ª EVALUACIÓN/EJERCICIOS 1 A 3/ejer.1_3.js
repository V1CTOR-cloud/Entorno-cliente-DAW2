/* 
1
*/

const title = document.getElementsByTagName('h1')[0];

title.addEventListener('mouseenter', (e) => {
    e.preventDefault();
    title.style.color = "#000";
    title.style.opacity = 0.5;
});

title.addEventListener('mouseleave', (e) => {
    e.preventDefault();
    title.style.color = "#FFF";
    title.style.opacity = 1;
});


/* 
2
*/
const parrafo = document.getElementsByTagName('p')[0];
const newparrafo = document.createElement('p');
parrafo.remove();
document.getElementsByTagName('article')[0].appendChild(newparrafo);

let arr = parrafo.textContent.split("");

function typeAnimation() {
    arr.length > 0 ? newparrafo.innerHTML += arr.shift() : "";
    setTimeout('typeAnimation()', 50);
}
typeAnimation();
/* 
3
*/

const nav = document.getElementsByTagName('nav')[0];
const title_lvl2 = document.getElementsByTagName('h2')[0];

nav.style.display = 'none';
let cont = 0;
title_lvl2.addEventListener('click', (e) => {
    e.preventDefault();
    cont++;
    if (cont % 2 !== 0) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }


});