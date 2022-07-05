import Hero from "./hero.js";

export default class Mago extends Hero {
  constructor(nome, sexo, classe) {
    super(nome, sexo, classe);
  }

  hp = 100;
  ataque = 5;
  sorteDado = 0.3;
  sorteMoeda = 0.08;
}
