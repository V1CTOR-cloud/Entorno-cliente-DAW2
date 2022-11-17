/* 
capturamos table_wrapper
*/
const table_wrapper = document.getElementsByClassName('table-wrapper')[0];

/* 
parametros iniciales API CALL
URL_API = dirección API
KEYWORD = campo API
index = elemento a consultar

carga inicial captura la primera posición
*/
const URL_API = 'https://www.breakingbadapi.com/api/';
const KEYWORD = 'characters/';
const index = 1;

Get_API_Data(URL_API, KEYWORD, index);

function Get_API_Data(URL_API, KEYWORD, indice) {
    fetch(URL_API + KEYWORD + indice).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('La petición falló');
    }, networkError => {
        console.log(networkError.message);
    }).then(jsonResponse => {

        /* mapeado de elementos recibidos */
        jsonResponse.map((item) => {

            /* 
            Creación de elementos
            */

            const p_table_wrapper = document.createElement('p');
            const img_table_wrapper = document.createElement('img');
            const anterior_table_wrapper = document.createElement('button');
            const siguiente_table_wrapper = document.createElement('button');

            /* 
            Estilos
            */
            img_table_wrapper.style.height = '400px';
            img_table_wrapper.style.width = '300px';
            anterior_table_wrapper.textContent = 'Anterior';
            siguiente_table_wrapper.textContent = 'Siguiente';

            /* 
            Estructura
            */
            table_wrapper.appendChild(p_table_wrapper);
            table_wrapper.appendChild(img_table_wrapper);
            table_wrapper.appendChild(anterior_table_wrapper);
            table_wrapper.appendChild(siguiente_table_wrapper);

            /* 
            Asignación de datos
            */
            p_table_wrapper.textContent = item.name + " Actor " + item.portrayed + " Rol " + item.occupation;
            img_table_wrapper.src = item.img;

            /* 
            Navegación
            */
            siguiente_table_wrapper.addEventListener('click', () => {
                p_table_wrapper.remove();
                img_table_wrapper.remove();
                anterior_table_wrapper.remove();
                siguiente_table_wrapper.remove();

                Get_API_Data(URL_API, KEYWORD, indice + 1);
            })

            anterior_table_wrapper.addEventListener('click', () => {
                p_table_wrapper.remove();
                img_table_wrapper.remove();
                anterior_table_wrapper.remove();
                siguiente_table_wrapper.remove();
                Get_API_Data(URL_API, KEYWORD, indice - 1);
            })
        });
    });
}