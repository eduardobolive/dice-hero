import Hero from "./hero.js";

export default class Ladrao extends Hero {
  constructor(nome, sexo, classe) {
    super(nome, sexo, classe);
  }

  hp = 110;
  ataque = 4;
  sorteDado = 0.1;
  sorteMoeda = 0.3;
}
