export default class Monstro {
  constructor(nivel, classe) {
    this.nivel = nivel;
    this.classe = classe;
    this.hp = +(50 * nivel * (1 + getRandomPercent(0, 20))).toFixed(2);
    this.ataque = +(nivel * 3 * (1 + getRandomPercent(0, 40))).toFixed(2);
    this.sorteDado = getRandomPercent(0, nivel < 70 ? nivel * 10 : 100);
  }
}

function getRandomPercent(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (Math.floor(Math.random() * (max - min)) + min) / 100;
}
