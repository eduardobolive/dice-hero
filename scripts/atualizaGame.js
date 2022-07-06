import Dinheiro from "./model/dinheiroModel.js";
import LojaModel from "./model/lojaModel.js";
import PO from "./pageObjects.js";

export default class AtualizaGame {
  static atualiza() {
    //loja
    PO.lojaAtaqueValor.innerHTML = LojaModel.valorUpgradeAtaque;
    PO.lojaUpgradeValor.innerHTML = LojaModel.valorUpgradeTentativa;
    PO.lojaCarteiraQtdMoedas.innerHTML = Dinheiro.moedas;
  }
}