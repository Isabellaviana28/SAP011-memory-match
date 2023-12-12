import pokemon from "./data/pokemon/pokemon.js";
import data from "./data/pokemon/pokemon.js";
let primeiraCarta = "";
let segundaCarta = "";
let imagemDaprimeiraCarta = "";
let clickBloqueado = false;
//document.getElementById('items').appendChild(App());//
// Use JavaScript para definir a fonte da imagem com a URL da API
console.log(data);
const container = document.getElementById("pokemon");
const pokemonsDuplicados = [...data.items, ...data.items];
for (let pokemon of pokemonsDuplicados) {
  const div = document.createElement("div");
  const img = document.createElement("img");
  div.classList.add("cards");
  img.src = pokemon.image;
  div.appendChild(img);
  container.appendChild(div);
  div.addEventListener("click", clickCarta);
  //Ao clicar verifique: é a primeira ou a segunda carta? Se for a primeira fixa, se for a segunda
  // e estiver correto mantenha as duas fixadas, se for a incorreta, vire novamente as duas cartas.

  function clickCarta(event) {
    if (clickBloqueado) {
      return;
    }

    if (eSegundacarta == true) {
      console.log("É Segunda carta");
      segundaCarta = event.target.firstChild.src;
      eSegundacarta = false;
      console.log(segundaCarta);
      img.style.display = "none";
      console.log(primeiraCarta);
      //Fazer aqui um if para comparar a primeira e a segunda carta (desfixar com o none)
      if (primeiraCarta === segundaCarta) {
        console.log("voce acertou");
        img.style.display = "block";
      } else {
        console.log(imagemDaprimeiraCarta);
        img.style.display = "none";
        clickBloqueado = true;
        setTimeout(function () {
          img.style.display = "none";
          imagemDaprimeiraCarta.style.display = "none";
          clickBloqueado = false;
        }, 2000); // 2000 milissegundos = 2 segundos
        img.style.display = "block";
      }
    } else {
      imagemDaprimeiraCarta = img;
      primeiraCarta = event.target.firstChild.src;
      console.log(primeiraCarta);
      eSegundacarta = true;
      console.log("É Primeira carta");
      img.style.display = "block";
    }
  }
}
let eSegundacarta = false;

document.getElementById('botao1').addEventListener("click", start);
function virarCards (){
  const imagens= document.getElementsByTagName('img')
  for (let img of imagens ){
    img.style.display = "none"; 
  }

}
let segundos = 0;
let intervalo;
function start() {
  segundos = 0;

  if(intervalo){
    clearInterval(intervalo);
  }

  intervalo = setInterval(crono, 1000);
  setTimeout(msgEncerramento, 5000);
  virarCards();
}
function crono() {
  segundos = segundos + 1;
    document.getElementById("cronometro").innerText = segundos;
}

function reiniciar() {
  start ();
  virarCards();
}

document.getElementById('botao2').addEventListener("click", reiniciar);

//Quando chegar em cinco minutos o usuario deverá tentar novamente
function msgEncerramento() {
  alert('Seu tempo acabou!! Tente novamente!!');
  clearInterval (intervalo)
  }

  