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
            div.addEventListener("click",()=>{
                img.style.display = "block"
            });
            
          }
               

        