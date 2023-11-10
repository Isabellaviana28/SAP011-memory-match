import data from "./data/pokemon/pokemon.js";

//document.getElementById('items').appendChild(App());//

        // Use JavaScript para definir a fonte da imagem com a URL da API
       console.log (data)
        const container = document.getElementById ('pokemon');
        const pokemonsDuplicados = [...data.items, ...data.items];
          for (let pokemon of pokemonsDuplicados)  {
            const img = document.createElement('img');
            img.src = pokemon.image;
            container.appendChild(img);
    
          }

        