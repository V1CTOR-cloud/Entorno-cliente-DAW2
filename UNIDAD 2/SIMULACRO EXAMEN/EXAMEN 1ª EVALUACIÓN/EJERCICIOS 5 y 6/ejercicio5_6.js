/* 
5, 6
*/

const FRM = document.getElementsByTagName('form')[0];
const inputM = document.getElementById('monumento');
const inputP = document.getElementById('pais');
const inputF = document.getElementById('foto');

const contenedor_monumentos = document.getElementById('contenedor_monumentos');
const newcard = document.createElement('div');
newcard.className = 'card';
let cont = 0;
FRM.addEventListener('submit', (e) => {
    e.preventDefault();
    cont++;
    if (cont === 1) {
        const foto = document.getElementById('imagen');
        const nombre_monumento = document.getElementById('nombre_monumento');
        const pais = document.getElementById('nombre_pais');
        foto.src = inputF.value;
        nombre_monumento.textContent = inputM.value;
        pais.textContent = inputP.value;
    } else {
        const newfoto = document.createElement('img');
        const newnombre_monumento = document.createElement('h2');
        const newpais = document.createElement('h2');
        newfoto.src = inputF.value;
        newfoto.id = 'imagen';
        newnombre_monumento.textContent = inputM.value;
        newnombre_monumento.id = 'nombre_monumento';
        newpais.textContent = inputP.value;
        newpais.id = 'nombre_pais';


        newcard.appendChild(newfoto)
        newcard.appendChild(newnombre_monumento)
        newcard.appendChild(newpais)

        contenedor_monumentos.appendChild(newcard);
    }




});