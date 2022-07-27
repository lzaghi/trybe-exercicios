const header = document.getElementById("header-container");
header.style.backgroundColor = "green";

const urgente = document.getElementsByClassName("emergency-tasks");
urgente[0].style.backgroundColor = "coral"

const faixas1 = document.querySelectorAll(".emergency-tasks h3");
faixas1[0].style.backgroundColor = "purple"
faixas1[1].style.backgroundColor = "purple"

const naoUrgente = document.getElementsByClassName("no-emergency-tasks");
naoUrgente[0].style.backgroundColor = "yellow"

const faixas2 = document.querySelectorAll(".no-emergency-tasks h3");
faixas2[0].style.backgroundColor = "black"
faixas2[1].style.backgroundColor = "black"

const footer = document.getElementById("footer-container");
footer.style.backgroundColor = "darkgreen";