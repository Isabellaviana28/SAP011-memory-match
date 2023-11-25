import data from "./data/pokemon/pokemon.js";
let primeiraCarta = "";
let segundaCarta = "";

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
  div.addEventListener("click", (event) => {
    //Ao clicar verifique: é a primeira ou a segunda carta? Se for a primeira fixa, se for a segunda
    // e estiver correto mantenha as duas fixadas, se for a incorreta, vire novamente as duas cartas.
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
        
      } else{
        
        img.style.display = "block";
        setTimeout(function () {
          img.style.display = "none";
        }, 5000); // 5000 milissegundos = 5 segundos
        img.style.display = "block";
      }
    }
    else{

      primeiraCarta = event.target.firstChild.src;
      console.log(primeiraCarta);
      eSegundacarta = true;
      console.log("É Primeira carta");
      img.style.display = "block";
      setTimeout(function () {
        img.style.display = "none";
      }, 5000); // 5000 milissegundos = 5 segundos
      
    }

  });
}
let eSegundacarta = false;
