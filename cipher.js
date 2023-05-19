const cipher = {
  // ...METER FUNCIONES ENCODE  y DECODE//


  //CIFRAR//

  encode(offset, string) {
    if (offset === undefined || offset === 0 || offset === null) {
      throw new TypeError("Número secreto NO válido 💔");
    }
    if (string === undefined || string.length === 0 || string === null) {
      alert("No has escrito un mensaje 💔");
    }

    let textResult = "";


    for (let i = 0; i < string.length; i++) {
      let ascii = string[i].charCodeAt();
      if (ascii !== 32) {
        const newAscci = ascii + offset;

        ascii = ((newAscci - 65) % 26 + 65);
      }


      textResult += String.fromCharCode(ascii);

    }
    return textResult;

  },

  // DECIFRAR // 

  decode(offset, string) {
    if (offset === undefined || offset === 0 || offset === null) {
      throw new TypeError("Número secreto NO válido 💔");
    }
    if (string === undefined || string.length === 0 || string === null) {
      alert("No has escrito un mensaje 💔");
    }

    let textResult = "";

    for (let i = 0; i < string.length; i++) {
      let ascii = string[i].charCodeAt();
      if (ascii !== 32) {
        ascii = ascii - (offset % 26);
        if (ascii < 65) {
          ascii += 26;
        }
      }
      textResult += String.fromCharCode(ascii);
    }


    return textResult;

  }


};

export default cipher;
