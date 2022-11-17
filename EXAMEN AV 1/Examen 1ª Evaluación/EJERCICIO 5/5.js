window.addEventListener('load', () => {
    const article = document.getElementsByTagName('article')[1];
    article.remove();
});

const formulario_monumentos = document.getElementById('formulario_monumentos');
const inputName = document.getElementById('monumento');
const inputURL = document.getElementById('foto');

formulario_monumentos.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem(inputName.value, inputURL.value)
});

const form_id = document.getElementById('ver_monumentos');

form_id.addEventListener('submit', (e) => {
    e.preventDefault();


    /* 
    Creación 
    */
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const contenedor_monumentos = document.createElement('div');
    const card = document.createElement('div');
    const img = document.createElement('img');
    const formul = document.createElement('form');
    const monumento = document.createElement('input');
    const ver_Monumento = document.createElement('button');


    /* 
    Estilos
    */
    h2.id = 'titulo';
    contenedor_monumentos.id = 'contenedor_monumentos';
    card.className = 'card';
    img.id = 'imagen';
    img.src = 'https://dbdzm869oupei.cloudfront.net/img/quadres/preview/40446.png';
    formul.id = 'formul';
    monumento.id = 'monumento';
    monumento.placeholder = 'Indica el nombre del monumento';
    ver_Monumento.textContent = 'Ver monumento';
    /* 
    Estructuramos
    */
    document.getElementsByTagName('article')[0].remove();
    document.getElementsByTagName('main')[0].appendChild(article);
    article.appendChild(h2);
    article.appendChild(contenedor_monumentos);
    contenedor_monumentos.appendChild(card);
    card.appendChild(img);
    card.appendChild(formul);
    formul.appendChild(monumento);
    formul.appendChild(ver_Monumento);

    /* 
    Selección monumento
    */

    formul.addEventListener('submit', (e) => {
        e.preventDefault();
        localStorage.getItem(monumento.value) ?
            img.src = localStorage.getItem(monumento.value) :
            null;
    })

});