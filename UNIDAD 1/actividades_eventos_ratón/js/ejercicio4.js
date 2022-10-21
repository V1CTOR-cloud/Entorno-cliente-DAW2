let nutrisection = document.querySelector(".nutrition");
let logo = document.getElementsByTagName('img')[0];
let contador = 0;

// FORMA 1
logo.addEventListener('click', () => {
    contador++;
    if (contador % 2 === 1) {
        nutrisection.style.display = 'none';
    } else {
        nutrisection.style.display = 'block';
    }
})

// FORMA 2

/* logo.addEventListener('click', () => {
    nutrisection.style.display = 'none';
})


logo.addEventListener('dblclick', () => {
    nutrisection.style.display = 'block';
}) */