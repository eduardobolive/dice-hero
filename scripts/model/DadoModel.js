import Util from "../util.js";

export default class DadoModel {
  static normalMin = 0;
  static normalMax = 20;
  constructor(min, max, qtdUso) {
    this.min = min;
    this.max = max;
    this.qtdUso = qtdUso;
  }

  static rolarDado = (dado) => {
    if (dado === undefined) {
      return Util.getRandomInt(this.normalMin, this.normalMax);
    }
    return Util.getRandomInt(dado.min, dado.max);
  };
}
