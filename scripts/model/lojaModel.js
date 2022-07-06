import Dinheiro from "./dinheiroModel.js";
import TentativaModel from "./tentativaModel.js";

export default class LojaModel {
  static ataquesComprados = 0;
  static tentativasCompradas = 0;
  static valorUpgradeAtaque = 5;
  static valorUpgradeTentativa = 5;

  static _calculoValorUpgrade(upgrade) {
    if (upgrade === "ataque") {
      this.valorUpgradeAtaque = 5 + this.ataquesComprados * 5;
    } else if (upgrade === "tentativa") {
      this.valorUpgradeTentativa = 5 + this.tentativasCompradas * 5;
    }
  }

  static compraAtaque() {
    if (this.valorUpgradeAtaque <= Dinheiro.moedas) {
      this.ataquesComprados++;
      Dinheiro.moedasRemove(this.valorUpgradeAtaque);
      this._calculoValorUpgrade("ataque");
      return true;
    } else {
      return false;
    }
  }

  static compraTentativa() {
    if (this.valorUpgradeTentativa <= Dinheiro.moedas) {
      this.tentativasCompradas++;
      TentativaModel.tentativaAdd();
      TentativaModel.tentativasRestantes++;
      Dinheiro.moedasRemove(this.valorUpgradeTentativa);
      this._calculoValorUpgrade("tentativa");
      return true;
    } else {
      return false;
    }
  }
}
