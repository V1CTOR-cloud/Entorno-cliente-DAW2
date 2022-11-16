const data = [{
        title: 'Hemisferic',
        photo: 'https://www.cac.es/dam/jcr:c46e70e1-6d5c-4e2e-a5bb-5dc8e38836a9/Hemisferic%20ojo%20azul.jpg'
    },
    {
        title: 'Museo de las ciencias',
        photo: 'https://images.pexels.com/photos/14260474/pexels-photo-14260474.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
        title: 'Oceanografic',
        photo: 'https://images.pexels.com/photos/11346010/pexels-photo-11346010.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
        title: 'Palau de les Arts',
        photo: 'https://images.pexels.com/photos/13815029/pexels-photo-13815029.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
        title: 'Umbracle',
        photo: 'https://images.pexels.com/photos/13458913/pexels-photo-13458913.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },


];


const slider = document.getElementById('slider-wrapper');

const BtnAnteriores = document.querySelectorAll('#anterior');
const BtnSiguiente = document.querySelectorAll('#siguiente');
slider.remove();

data.map((item, index) => {
    const Card = document.createElement('div');
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const titleWrapper = document.createElement('div');
    const title = document.createElement('h2');
    const btnwrapper = document.createElement('div');
    const btnAnterior = document.createElement('a');
    const BtnSiguiente = document.createElement('a');
    Card.id = 'slider-wrapper';
    titleWrapper.className = 'hemisferic';
    btnwrapper.id = 'botones'

    document.body.appendChild(Card);
    Card.appendChild(ul)
    Card.appendChild(btnwrapper);
    ul.appendChild(li)
    li.appendChild(titleWrapper)
    titleWrapper.appendChild(title)
    btnwrapper.appendChild(btnAnterior)
    btnwrapper.appendChild(BtnSiguiente)
    btnAnterior.textContent = 'anterior'
    BtnSiguiente.textContent = 'siguiente'
    title.textContent = item.title;
    Card.style.backgroundImage = 'url(' + item.photo + ')';
    Card.style.backgroundRepeat = 'no-repeat';
    Card.style.backgroundPosition = 'center';
    Card.style.backgroundSize = 'cover';
    Card.style.overflow = 'hidden';
})