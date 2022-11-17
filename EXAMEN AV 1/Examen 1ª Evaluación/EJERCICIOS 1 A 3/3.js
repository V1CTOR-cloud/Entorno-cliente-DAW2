/* 
capturamos nav,
ocultamos nav,
mediante un contador comprobamos nº veces click ( nºveces % 2 === par | impar),
*/
const nav = document.getElementsByTagName('nav')[0];
nav.style.display = 'none';
let cont = 0;
h2.addEventListener('click', () => { // recuperamos la constante h2 del ejer2
    cont++;
    cont % 2 !== 0 ?
        nav.style.display = 'block' :
        nav.style.display = 'none';
});

/* 
Capturamos ul,
recorremos ul,
capturamos a y asignamos datos
*/
const ul = nav.lastChild.previousSibling;

ul.childNodes.forEach((li) => {
    if (li.nodeType === 1) {
        li.childNodes.forEach(a => {
            switch (a.textContent) {
                case 'El experimento':
                    a.href = 'https://revistaorsai.com/el-experimento-polgar/';
                    break;

                case 'Criar genios':
                    a.href = 'https://es.scribd.com/document/382476791/Criar-Un-Genio-Laszlo-Polgar';
                    break;


                case 'Biografía':
                    a.href = 'https://es.wikipedia.org/wiki/L%C3%A1szl%C3%B3_Polg%C3%A1r';
                    break;
            }
        });
    }
});