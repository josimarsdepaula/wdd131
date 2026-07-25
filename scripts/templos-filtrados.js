const templos = [
    { nomeDoTemplo: "Aba Nigeria", localizacao: "Aba, Nigéria", consagracao: "2005, 7 de agosto", area: 11500, urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" },
    { nomeDoTemplo: "Manti Utah", localizacao: "Manti, Utah, Estados Unidos", consagracao: "1888, 21 de maio", area: 74792, urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg" },
    { nomeDoTemplo: "Payson Utah", localizacao: "Payson, Utah, Estados Unidos", consagracao: "2015, 7 de junho", area: 96630, urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg" },
    { nomeDoTemplo: "Yigo Guam", localizacao: "Yigo, Guam", consagracao: "2020, 2 de maio", area: 6861, urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg" },
    { nomeDoTemplo: "Washington D.C.", localizacao: "Kensington, Maryland, Estados Unidos", consagracao: "1974, 19 de novembro", area: 156558, urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg" },
    { nomeDoTemplo: "Lima Peru", localizacao: "Lima, Peru", consagracao: "1986, 10 de janeiro", area: 9600, urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg" },
    { nomeDoTemplo: "Cidade do México, México", localizacao: "Cidade do México, México", consagracao: "1983, 2 de dezembro", area: 116642, urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg" },
    { nomeDoTemplo: "Roma Itália", localizacao: "Roma, Itália", consagracao: "2019, 10 de março", area: 41010, urlDaImagem: "https://www.churchofjesuschrist.org/imgs/17e2c70d687fffedfe115197e57fa8f5d1d369bb/full/200%2C/0/default" },
    { nomeDoTemplo: "Salt Lake", localizacao: "Salt Lake City, Utah, Estados Unidos", consagracao: "1893, 6 de abril", area: 253015, urlDaImagem: "https://www.churchofjesuschrist.org/imgs/64de5983126b11eca393eeeeac1e50dfc2db6c7e/full/200%2C/0/default" },
    { nomeDoTemplo: "Fortaleza Brasil", localizacao: "Fortaleza, Ceará, Brasil", consagracao: "2019, 2 de junho", area: 36120, urlDaImagem: "https://www.churchofjesuschrist.org/imgs/e2a28dbb2b14f5f71d79b359cf9f7b88dc480144/full/200%2C/0/default" }
];

const gallery = document.querySelector(".gallery");
const title = document.querySelector("main h2");
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

function displayTemples(templeList) {
    gallery.innerHTML = "";

    templeList.forEach((templo) => {
        const card = document.createElement("section");
        const image = document.createElement("img");

        card.classList.add("temple-card");
        card.innerHTML = `<h3>${templo.nomeDoTemplo}</h3><p><strong>Localização:</strong> ${templo.localizacao}</p><p><strong>Consagração:</strong> ${templo.consagracao}</p><p><strong>Área:</strong> ${templo.area.toLocaleString("pt-BR")} pés²</p>`;
        image.src = templo.urlDaImagem;
        image.alt = `Templo de ${templo.nomeDoTemplo}`;
        image.loading = "lazy";
        card.appendChild(image);
        gallery.appendChild(card);
    });
}

function filterTemples(filter) {
    let filteredTemples = templos;
    title.textContent = "Página Inicial";

    if (filter === "antigo") {
        filteredTemples = templos.filter((templo) => Number(templo.consagracao.split(",")[0]) < 1900);
        title.textContent = "Templos Antigos";
    } else if (filter === "novo") {
        filteredTemples = templos.filter((templo) => Number(templo.consagracao.split(",")[0]) > 2000);
        title.textContent = "Templos Novos";
    } else if (filter === "grande") {
        filteredTemples = templos.filter((templo) => templo.area > 90000);
        title.textContent = "Templos Grandes";
    } else if (filter === "pequeno") {
        filteredTemples = templos.filter((templo) => templo.area < 10000);
        title.textContent = "Templos Pequenos";
    }

    displayTemples(filteredTemples);
}

navigation.addEventListener("click", (event) => {
    if (event.target.dataset.filter) {
        event.preventDefault();
        filterTemples(event.target.dataset.filter);
        navigation.classList.remove("open");
        menuButton.classList.remove("open");
    }
});

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});

document.querySelector("#anoatual").textContent = new Date().getFullYear();
document.querySelector("#ultimaModificacao").textContent = `Última Modificação: ${document.lastModified}`;

displayTemples(templos);
