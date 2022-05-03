const divParaExpandir = document.querySelector("#bloco-para-expandir");

const botao = document.querySelector("#bot-aument");

let expandir = divParaExpandir.offsetHeight;

console.log(divParaExpandir.offsetHeight);

botao.addEventListener("click", (e) => {
  if (divParaExpandir.offsetHeight == 620) {
    divParaExpandir.style.height = `${expandir + 400}px`;
    console.log(divParaExpandir.offsetHeight);
  } else {
    divParaExpandir.style.height = `${divParaExpandir.offsetHeight - 400}px`;
    console.log(expandir);
  }
});
