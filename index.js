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

var button1 = document.getElementById('button-ver-mais1');

function entrar1(){
  button1.style.backgroundColor = 'gray'
}
function mudarcor1(){
  button1.style.backgroundColor = 'darkgray';
}
function voltacor1(){
  button1.style.backgroundColor = 'black';
}

var button2 = document.getElementById('button-ver-mais2');

function entrar2(){
  button2.style.backgroundColor = 'gray'
}
function mudarcor(){
  button2.style.backgroundColor = 'darkgray';
}
function voltacor(){
  button2.style.backgroundColor = 'black';
}

var button3 = document.getElementById('button-ver-mais3');

function entrar3(){
  button3.style.backgroundColor = 'gray'
}
function mudarcor3(){
  button3.style.backgroundColor = 'darkgray';
}
function voltacor3(){
  button3.style.backgroundColor = 'black';
}
