    function encriptar() {
      var texto = document.getElementById("texto").value;
      var encriptado = "";
      var tieneMayusculas = /[A-ZÁÉÍÓÚÜ]/.test(texto);
      var tieneAcentos = /[ÁÉÍÓÚÜáéíóúü]/.test(texto);

      if (tieneMayusculas || tieneAcentos) {
        alert("El texto no puede contener mayúsculas o caracteres acentuados.");
        return;
      }

      for (var i = 0; i < texto.length; i++) {
        var letra = texto[i];
        var letraEncriptada = "";

        if (letra === "e") {
          letraEncriptada = "enter";
        } else if (letra === "i") {
          letraEncriptada = "imes";
        } else if (letra === "a") {
          letraEncriptada = "ai";
        } else if (letra === "o") {
          letraEncriptada = "ober";
        } else if (letra === "u") {
          letraEncriptada = "ufat";
        } else {
          letraEncriptada = letra;
        }

        encriptado += letraEncriptada;
      }

      document.getElementById("resultado").value = encriptado;
      document.getElementById("imag").style.display = "none";
      document.getElementById("parrafo1").style.display = "none";
      document.getElementById("parrafo2").style.display = "none";
      document.getElementById("boton-copiar").style.display = "block";

    }

    function desencriptar() {
      var encriptado = document.getElementById("texto").value;
      var desencriptado = "";

      var i = 0;
      while (i < encriptado.length) {
        var letraEncriptada = "";

        if (encriptado.substr(i, 5) === "enter") {
          letraEncriptada = "e";
          i += 5;
        } else if (encriptado.substr(i, 4) === "imes") {
          letraEncriptada = "i";
          i += 4;
        } else if (encriptado.substr(i, 2) === "ai") {
          letraEncriptada = "a";
          i += 2;
        } else if (encriptado.substr(i, 4) === "ober") {
          letraEncriptada = "o";
          i += 4;
        } else if (encriptado.substr(i, 4) === "ufat") {
          letraEncriptada = "u";
          i += 4;
        } else {
          letraEncriptada = encriptado[i];
          i++;
        }

        desencriptado += letraEncriptada;
      }

      document.getElementById("resultado").value = desencriptado;
      document.getElementById("imag").style.display = "none";
      document.getElementById("parrafo1").style.display = "none";
      document.getElementById("parrafo2").style.display = "none";
      document.getElementById("boton-copiar").style.display = "block";
  
    }

    function copiarTexto(){
      resultado.select();
      navigator.clipboard.writeText(resultado.value)
      resultado.value = "";
      alert("Texto Copiado")
  }

    
    
   