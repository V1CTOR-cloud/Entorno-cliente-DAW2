const conversor = require('./conversor.js');

document.getElementById("conversor").addEventListener("submit", function(event){
    event.preventDefault();

    const cantidad = parseFloat(document.getElementById("cantidad").value);
    document.getElementById("respuesta").innerHTML = cantidad + " grados Celsius son " + conversor.celsiusToFarenheit(cantidad) + " grados Farenheit";
});
