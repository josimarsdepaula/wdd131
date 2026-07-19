const temperatura = 8;
const velocidadeVento = 12;

function calcularSensacaoTermica(temp, vento) {
    let sensacao;

    if (temp <= 10 && vento > 4.8) {
        sensacao =
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(vento, 0.16) +
            0.3965 * temp * Math.pow(vento, 0.16);

        return sensacao.toFixed(1) + "°C";
    } else {
        return "N/A";
    }
}

document.getElementById("temperatura").textContent = temperatura + "°C";
document.getElementById("vento").textContent = velocidadeVento + " km/h";
document.getElementById("sensacao").textContent = calcularSensacaoTermica(temperatura, velocidadeVento);

document.getElementById("ano").textContent = new Date().getFullYear();
document.getElementById("ultimaModificacao").textContent = document.lastModified;