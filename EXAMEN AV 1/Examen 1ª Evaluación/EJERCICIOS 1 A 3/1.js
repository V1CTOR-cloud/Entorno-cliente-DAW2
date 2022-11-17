/* 
Capturamos los parrafos
*/
const p1 = document.getElementById('parrafoUno');
const p2 = document.getElementById('parrafoDos');
const p3 = document.getElementById('parrafoTres');
const p4 = document.getElementById('parrafoCuatro');

/* 
Ocultamos parrafos
*/
window.addEventListener('load', (event) => {
    p1.style.display = 'none';
    p2.style.display = 'none';
    p3.style.display = 'none';
    p4.style.display = 'none';
});

/* 
Controlamos la superficie de la imagen
*/
const divImage = document.getElementsByTagName('h1')[0];

divImage.addEventListener('mouseenter', () => {
    divImage.style.backgroundImage = 'url(https://sun9-8.userapi.com/impg/kLXGUoJYJ-l3GoTbag0NLZ8qpPhrXVGuJkiMMQ/vSlunzKBfps.jpg?size=510x343&quality=96&sign=dd626f76c9032ab1433e22dd1e618b8c&type=album)';

    divImage.style.color = '#FFF'
    divImage.textContent = 'La familia Polgár';


    p1.textContent = p2.textContent;
    p1.style.display = 'block';
});

divImage.addEventListener('mouseleave', () => {
    p1.style.display = 'none';
    p1.textContent = p1.textContent;
    divImage.style.backgroundImage = 'url(https://www.radiosefarad.com/wp-content/uploads/2018/12/los-polgar.png)';
    divImage.textContent = 'El experimento Polgár';
});

/* 
Capturamos el click
*/

divImage.addEventListener('click', () => {
    switch (divImage.textContent) {
        case 'La familia Polgár':
            divImage.style.backgroundImage = 'url(https://imgsrc.cineserie.com/2022/04/2079292.jpg?ver=1)';
            divImage.textContent = 'Las hermanas Polgár';

            p1.textContent = p3.textContent;
            break;

        case 'Las hermanas Polgár':
            divImage.style.backgroundImage = 'url(https://historia.nationalgeographic.com.es/medio/2020/11/20/judit-polgar_75243733_550x714.jpg)';
            divImage.textContent = 'Judit Polgár';
            p1.textContent = p4.textContent;
            break;
    }
});