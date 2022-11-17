/* 
Capturamos el titulo de segundo nivel
*/
const h2 = document.getElementsByTagName('h2')[0];

/* 
Cuando la pantalla cargue,
Controlamos la posicion raton en el eje Y,
*/
window.addEventListener('load', () => {
    window.addEventListener('mousemove', (event) => {
        let y = event.clientY;
        (y > 0 & y <= 50) ? h2.style.color = "DarkGoldenRod": null;
        (y > 100 & y <= 200) ? h2.style.color = "LightGrey": null;
        (y > 200 & y <= 300) ? h2.style.color = "Blueviolet": null;
        (y > 300 & y <= 400) ? h2.style.color = "Coral": null;
        (y > 400) ? h2.style.color = "CornflowerBlue": null;
    });
});