let inputAdultos = document.getElementById("adulto");
let inputCriancas = document.getElementById("crianca");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

let calcular = document.getElementById("calcular");
calcular.addEventListener("click", calculo);

function calculo() {
  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let horas = inputDuracao.value;
  let total = carneP(horas) * adultos + carneP(horas) * (criancas / 2);
  let totalBebidas = bebidasP(horas) * adultos + carneP(horas) * (criancas / 2);
  let totalCerveja = cervejaP(horas) * adultos;
  document.getElementById("resultado").innerHTML =
    "Para um evento de churrasco com duração de " +
    horas +
    " horas com " +
    adultos +
    " adultos e " +
    criancas +
    " crianças, em média é consumido " +
    total +
    "kg de proteína e " +
    totalBebidas +
    "ml de bebidas não alcolicas e " +
    totalCerveja +
    "ml de bebida alcoolica.";
  document.getElementById("resultado").innerHTML +=
    `<p>${total}g de carne.</p>`;
  document.getElementById("resultado").innerHTML +=
    `<p>${totalBebidas}ml de bebidas.</p>`;
  document.getElementById("resultado").innerHTML +=
    `<p>${totalCerveja}ml de cerveja</p>`;
}

function carneP(horas) {
  if (horas >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function cervejaP(horas) {
  if (horas >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}
function bebidasP(horas) {
  if (horas >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}
