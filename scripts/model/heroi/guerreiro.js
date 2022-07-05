import Hero from "./hero.js";

export default class Guerreiro extends Hero {
  constructor(nome, sexo, classe) {
    super(nome, sexo, classe);
  }

  hp = 80;
  ataque = 8;
  sorteDado = 0.05;
  sorteMoeda = 0.1;
}
