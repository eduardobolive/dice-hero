import DadoModel from "./dadoModel.js";
import Dinheiro from "./dinheiroModel.js";
import Mago from "./heroi/mago.js";
import TentativaModel from "./tentativaModel.js";

export default class LojaModel {
  static ataquesComprados = 0;
  static tentativasCompradas = 0;
  static valorUpgradeAtaque = 5;
  static valorUpgradeTentativa = 5;
  static valorUpgradeDadoMagico = 7;

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
      Mago.setMaisAtk(1);
      this._calculoValorUpgrade("ataque");
      this.atualizaBanco();
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
      this.atualizaBanco();

      return true;
    } else {
      return false;
    }
  }

  static compraDadoMagico() {
    if (this.valorUpgradeDadoMagico <= Dinheiro.moedas) {
      alert("Disponível em breve!");

      //var dadoMagico = new DadoModel(15, 20, 3);
      //adicionar dado na lista de dados;
      //Dinheiro.moedasRemove(this.valorUpgradeDadoMagico);
      return true;
    } else {
      return false;
    }
  }

  static toJson() {
    return JSON.stringify({
      ataquesComprados: this.ataquesComprados,
      tentativasCompradas: this.tentativasCompradas,
      valorUpgradeAtaque: this.valorUpgradeAtaque,
      valorUpgradeTentativa: this.valorUpgradeTentativa,
      valorUpgradeDadoMagico: this.valorUpgradeDadoMagico,
    });
  }

  static atualizaBanco() {
    localStorage.setItem("loja", this.toJson());
  }

  static atualizaLocal() {
    var lojaBanco = JSON.parse(localStorage.getItem("loja"));
    this.ataquesComprados = lojaBanco.ataquesComprados;
    this.tentativasCompradas = lojaBanco.tentativasCompradas;
    this.valorUpgradeAtaque = lojaBanco.valorUpgradeAtaque;
    this.valorUpgradeTentativa = lojaBanco.valorUpgradeTentativa;
    this.valorUpgradeDadoMagico = lojaBanco.valorUpgradeDadoMagico;
  }
}
