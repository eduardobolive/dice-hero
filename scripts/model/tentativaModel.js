export default class TentativaModel {
  static tentativas = 10;
  static tentativasRestantes = this.tentativas;
  static tentativaAdd = () => {
    this.tentativas++;
    localStorage.setItem("tentativas", this.tentativas);
  };
  static menos1 = () => {
    this.tentativasRestantes--;
  };
  static resetTentativas = () => {
    this.tentativasRestantes = this.tentativas;
  };

  static temTentativas = () => {
    return this.tentativasRestantes > 0;
  };
}
