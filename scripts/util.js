export default class Util {
  static getRandomInt(min, max) {
    max++;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
