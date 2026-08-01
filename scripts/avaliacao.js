const contador = document.querySelector("#contador");

let totalAvaliacoes = Number(localStorage.getItem("avaliacoes")) || 0;

totalAvaliacoes++;

localStorage.setItem("avaliacoes", totalAvaliacoes);

contador.textContent = totalAvaliacoes;

document.querySelector("#ano").textContent = new Date().getFullYear();

document.querySelector("#modificado").textContent = document.lastModified;