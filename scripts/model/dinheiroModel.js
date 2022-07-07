export default class Dinheiro {
  static moedas = 10;
  static moedaAdd(moedasGanhas) {
    this.moedas = +this.moedas + moedasGanhas;
    this.atualizaBanco();
  }
  static moedasRemove(moedasRemovidas) {
    this.moedas -= moedasRemovidas;
    this.atualizaBanco();
  }

  static atualizaBanco() {
    localStorage.setItem("moedas", this.moedas);
  }
}
