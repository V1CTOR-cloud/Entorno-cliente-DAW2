const conversor = require('./conversor.js');

document.getElementById("conversor").addEventListener("submit", (e) => {
    e.preventDefault();

    const cantidad = parseFloat(document.getElementById("cantidad").value);
    document.getElementById("respuesta").innerHTML = cantidad + " Euros " + Math.round(conversor.euroToDolar(cantidad), 2) + " Dolares";
});