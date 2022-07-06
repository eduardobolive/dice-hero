import AtualizaGame from "./atualizaGame.js";
import LojaModel from "./model/lojaModel.js";
import PO from "./pageObjects.js";
import TentativaModel from "./model/tentativaModel.js";

AtualizaGame.atualiza();

PO.lojaCardAtaque.addEventListener("click", () => {
  console.log(LojaModel.compraAtaque());
  AtualizaGame.atualiza();
});

PO.lojaCardTentativa.addEventListener("click", () => {
  console.log(LojaModel.compraTentativa());
  AtualizaGame.atualiza();
});
