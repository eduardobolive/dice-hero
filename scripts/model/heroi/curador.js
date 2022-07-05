import Hero from "./hero.js";

export default class Curador extends Hero {
  constructor(nome, sexo, classe) {
    super(nome, sexo, classe);
  }

  hp = 170;
  ataque = 3;
  sorteDado = 0.2;
  sorteMoeda = 0.2;
}
