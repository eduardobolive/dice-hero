export default class Dinheiro {
  static moedas = 10;
  static moedaAdd = (moedasGanhas) => (this.moedas += moedasGanhas);
  static moedasRemove = (moedasRemovidas) => (this.moedas -= moedasRemovidas);
}
