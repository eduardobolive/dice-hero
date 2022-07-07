import Hero from "./hero.js";

export default class Mago extends Hero {
  constructor(nome, sexo, classe) {
    super(nome, sexo, classe);
  }

  hp = 100;
  ataque = 5;
  sorteDado = 0.3;
  sorteMoeda = 0.08;

  static getAtk() {
    if (JSON.parse(localStorage.getItem("player") != null)) {
      return JSON.parse(localStorage.getItem("player")).ataque;
    }
  }

  static getNivel() {
    if (JSON.parse(localStorage.getItem("player") != null)) {
      return JSON.parse(localStorage.getItem("player")).nivel;
    }
  }

  static setMaisAtk(aumentoEm) {
    if (JSON.parse(localStorage.getItem("player") != null)) {
      var player = JSON.parse(localStorage.getItem("player"));
      player.ataque += aumentoEm;

      localStorage.setItem("player", JSON.stringify(player));
    }
  }
}
