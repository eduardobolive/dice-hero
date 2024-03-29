import Dinheiro from "./model/dinheiroModel.js";
import Mago from "./model/heroi/mago.js";
import LojaModel from "./model/lojaModel.js";
import TentativaModel from "./model/tentativaModel.js";
import PO from "./pageObjects.js";

export default class AtualizaGame {
  static atualiza() {
    //loja
    PO.lojaAtaqueValor.innerHTML = LojaModel.valorUpgradeAtaque;
    PO.lojaTentativaValor.innerHTML = LojaModel.valorUpgradeTentativa;
    PO.lojaDadoMagicoValor.innerHTML = LojaModel.valorUpgradeDadoMagico;
    PO.lojaCarteiraQtdMoedas.innerHTML = Dinheiro.moedas;
    PO.campoTentativas.innerHTML = TentativaModel.tentativasRestantes;

    //campo
    PO.campoAtaque.innerHTML = Mago.getAtk();
    PO.campoNivelHeroi.innerHTML = Mago.getNivel();
    PO.lojaCarteiraQtdMoedas.innerHTML = Dinheiro.moedas;
    PO.campoTentativas.innerHTML = TentativaModel.tentativasRestantes;
  }
}
