import { iniciarPagina } from "./components/App";

document.body.innerHTML =
 `<div class="todosbotoes">
    <h2 id="cronometro">00:00</h2>
    <button class="botao1" id="botao1">Começar</button>
    <button class="botao2" id="botao2">Reiniciar</button>
  </div>
  <div id="pokemon"></div>`;

describe('testes da funções do main js', () => {
    it('Deve mostrar todos os cards na tela', () => {
        iniciarPagina();

        document.getElementById("botao1").click();
        document.getElementsByClassName("cards")[0].click();
        document.getElementsByClassName("cards")[1].click();
        document.getElementById("botao2").click();
     const container= document.querySelector('#pokemon');
      expect(container instanceof HTMLElement).toBe(true);
    });
  });
