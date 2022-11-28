(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const conversor = require('./conversor.js');

document.getElementById("conversor").addEventListener("submit", (e) => {
    e.preventDefault();

    const cantidad = parseFloat(document.getElementById("cantidad").value);
    document.getElementById("respuesta").innerHTML = cantidad + " Euros " + Math.round(conversor.euroToDolar(cantidad), 2) + " Dolares";
});
},{"./conversor.js":2}],2:[function(require,module,exports){
module.exports.euroToDolar = function euroToDolar(euros) {
    var euro = 1.2; // 1 Euro equivale a 1.2 dolares

    return euro * parseFloat(euros);
}
},{}]},{},[1]);
