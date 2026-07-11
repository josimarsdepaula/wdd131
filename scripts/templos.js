const anoAtual = new Date().getFullYear();
document.getElementById("anoatual").textContent = anoAtual;

document.getElementById("ultimaModificacao").textContent =
"Última Modificação: " + document.lastModified;

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav.navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});