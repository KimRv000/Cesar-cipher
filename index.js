import cipher from './cipher.js';
// CONSTANTES PARA CIFRAR //
const texto = document.getElementById("textToCode"); //MENSAJE A CIFRAR//
const textoCifrado = document.getElementById("codedText") //MENSAJE CIFRADO//
const botonCifrar = document.getElementById("buttonCifrar"); //BOTON PARA CIFRAR//


// CONSTANTES PARA DECIFRAR //
const textoDecifrar = document.getElementById("textToDecode"); //MENSAJE A DECIFRAR//
const textoDecifrado = document.getElementById("decodedText"); //MENSAJE DECIFRADO //
const botonDecifrar = document.getElementById("buttonDecifrar"); // BOTON DECIFRAR//

// INPUT - NUM SECRETO (offset) //
const num = (document.getElementById("offsetNumber"));


//BOTON CIFRAR - LLAMANDO FUNCION ENCODE//
botonCifrar.addEventListener("click", function () {
  const newText = cipher.encode(parseInt(num.value), texto.value.toUpperCase())
  textoCifrado.value = newText;


});


//BOTON DECIFRAR - LLAMANDO FUNCION DECODE//
botonDecifrar.addEventListener("click", function () {
  const newText2 = cipher.decode(parseInt(num.value), textoDecifrar.value.toUpperCase())
  textoDecifrado.value = newText2;


});




//console.log(cipher);

