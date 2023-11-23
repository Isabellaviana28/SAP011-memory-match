import data from "./data/pokemon/pokemon.js";

//document.getElementById('items').appendChild(App());//
        // Use JavaScript para definir a fonte da imagem com a URL da API
       console.log (data)
        const container = document.getElementById ('pokemon');
        const pokemonsDuplicados = [...data.items, ...data.items];
          for (let pokemon of pokemonsDuplicados)  {
            const div = document.createElement('div'); 
            const img = document.createElement('img');
            div.classList.add("cards");
            img.src = pokemon.image;
            div.appendChild(img);
            container.appendChild(div);
            let primeiraCarta = "";
            let segundaCarta = "";
            div.addEventListener("click",(event)=>{
              //Ao clicar verifique: é a primeira ou a segunda carta? Se for a primeira fixa, se for a segunda
              // e estiver correto mantenha as duas fixadas, se for a incorreta, vire novamente as duas cartas.
               if (eSegundacarta ==true) {
              console.log ("É Segunda carta")
              segundaCarta = event.target.firstChild.src
              eSegundacarta = false
              console.log (segundaCarta);
              //Fazer aqui um if para comparar a primeira e a segunda carta (desfixar com o none)
               }
              else {
                console.log ("É Primeira carta")
                primeiraCarta= event.target.firstChild.src
                console.log (primeiraCarta)
                eSegundacarta = true
              }
               
              img.style.display = "block"
            });

            
          }
          let eSegundacarta =false
               

        