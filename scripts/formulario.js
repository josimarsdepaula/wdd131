const select = document.getElementById("produto");

produtos.forEach((produto) => {
    const option = document.createElement("option");
    option.value = produto.id;
    option.textContent = produto.nome;
    select.appendChild(option);
});

document.getElementById("ano").textContent = new Date().getFullYear();

document.getElementById("modificado").textContent = document.lastModified;