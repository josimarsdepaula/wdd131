let contador = Number(localStorage.getItem("contadorAvaliacoes")) || 0;

contador++;

localStorage.setItem("contadorAvaliacoes", contador);

document.getElementById("contador").textContent = contador;

document.getElementById("ano").textContent = new Date().getFullYear();

document.getElementById("modificado").textContent = document.lastModified;