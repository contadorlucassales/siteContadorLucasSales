var rendimentosTributaveis = document.getElementById("rendimentosTributaveis");
var naoTributaveis = document.getElementById("naoTributaveis");
var naoDedutiveis = document.getElementById("naoDedutiveis");

rendimentosTributaveis.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    salarioLiquido();
  }
});

naoTributaveis.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    salarioLiquido();
  }
});

naoDedutiveis.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    salarioLiquido();
  }
});

function salarioLiquido() {

  let rendimentosTributaveisValue = rendimentosTributaveis.value;

  if (rendimentosTributaveisValue >= 7507.49) {
    document.getElementById("percPrev").innerHTML = "(14% de 7.507,49)";
    document.getElementById("valorPrev").innerHTML = (7507.49 * 0.14).toFixed(2);
  } 

  else if (rendimentosTributaveisValue >= 3856.95) {
    document.getElementById("percPrev").innerHTML = "(14%)";
    document.getElementById("valorPrev").innerHTML = (rendimentosTributaveisValue * 0.14).toFixed(2);
  }

  else if (rendimentosTributaveisValue >= 2571.30) {
    document.getElementById("percPrev").innerHTML = "(12%)";
    document.getElementById("valorPrev").innerHTML = (rendimentosTributaveisValue * 0.12).toFixed(2);
  }

  else if (rendimentosTributaveisValue >= 1320.01) {
    document.getElementById("percPrev").innerHTML = "(9%)";
    document.getElementById("valorPrev").innerHTML = (rendimentosTributaveisValue * 0.09).toFixed(2);
  }

  else {
    document.getElementById("percPrev").innerHTML = "(7,5%)";
    document.getElementById("valorPrev").innerHTML = (rendimentosTributaveisValue * 0.075).toFixed(2);
  }

  let valorPrev = document.querySelector("#valorPrev").value;
  document.getElementById("BCIRRF").innerHTML = (rendimentosTributaveisValue - valorPrev).toFixed(2);
  let bcirrf = document.querySelector("#BCIRRF").value;

  if (bcirrf >= 4664.69) {
    document.getElementById("percIRRF").innerHTML = "(27,5%)";
    document.getElementById("valorAliquota").innerHTML = (bcirrf * 0.275).toFixed(2);
    document.getElementById("deducaoBC").innerHTML = 884.96;
  }

  else if (bcirrf >= 3751.06) {
    document.getElementById("percIRRF").innerHTML = "(22,5%)";
    document.getElementById("valorAliquota").innerHTML = (bcirrf * 0.225).toFixed(2);
    document.getElementById("deducaoBC").innerHTML = 651.73;
  }

  else if (bcirrf >= 2826.66) {
    document.getElementById("percIRRF").innerHTML = "(15,0%)";
    document.getElementById("valorAliquota").innerHTML = (bcirrf * 0.15).toFixed(2);
    document.getElementById("deducaoBC").innerHTML = (370.40).toFixed(2);
  }

  else if (bcirrf >= 2112.01) {
    document.getElementById("percIRRF").innerHTML = "(7,5%)";
    document.getElementById("valorAliquota").innerHTML = (bcirrf * 0.075).toFixed(2);
    document.getElementById("deducaoBC").innerHTML = (158.40).toFixed(2);
  }

  else {
    document.getElementById("percIRRF").innerHTML = "*Isento";
    document.getElementById("valorAliquota").innerHTML = (0.00).toFixed(2);
    document.getElementById("deducaoBC").innerHTML = (0.00).toFixed(2);
  }

  let valorAliquota = document.querySelector("#valorAliquota").value;
  let deducaoBC = document.querySelector("#deducaoBC").value;
  document.getElementById("valorIRRF").innerHTML = (valorAliquota - deducaoBC).toFixed(2);

  let valorIRRF = document.querySelector("#valorIRRF").value;
  document.getElementById("salarioDepoisIRRF").innerHTML = (bcirrf - valorIRRF).toFixed(2);

  let salarioDepoisIRRF = document.querySelector("#salarioDepoisIRRF").value;
  let naoTributaveisValue = naoTributaveis.value;
  let naoDedutiveisValue = naoDedutiveis.value;
  document.getElementById("salarioLiquido").innerHTML = (salarioDepoisIRRF + naoTributaveisValue - naoDedutiveisValue).toFixed(2);
}

function home() {
  window.location.href = "../index.html";
}