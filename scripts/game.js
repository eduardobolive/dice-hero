import Mago from "./model/heroi/mago.js";
import Monstro from "./model/monstro/monstro.js";
import Dinheiro from "./model/dinheiroModel.js";
import PO from "./pageObjects.js";
import TentativaModel from "./model/tentativaModel.js";
import DadoModel from "./model/DadoModel.js";
import Util from "./util.js";

var valorDado = 10;

var nivelMonstroBatalha = 1;
var player = new Mago("Eduardo", "M", "Agua");
var monstro;

inicioGame(false);

function inicioGame(novoNivel) {
  if (novoNivel) {
    nivelMonstroBatalha++;
  }
  TentativaModel.resetTentativas();
  monstro = new Monstro(nivelMonstroBatalha);
  atualizaBatalha();
}

function atualizaBatalha() {
  // Comum
  PO.campoTentativas.innerHTML = TentativaModel.tentativasRestantes;
  PO.campoDado.innerHTML = valorDado;
  PO.lojaCarteiraQtdMoedas.innerHTML = Dinheiro.moedas;

  //Herói
  PO.campoAtaque.innerHTML = player.ataque;
  PO.campoNivelHeroi.innerHTML = player.nivel;

  //Monstro
  PO.campoNomeMonstro.innerHTML = monstro.nome;
  PO.campoNivelMonstro.innerHTML = monstro.nivel;
  PO.campoHpMonstro.innerHTML = monstro.hp;
}

PO.campoDado.addEventListener("click", () => {
  if (TentativaModel.temTentativas()) {
    valorDado = DadoModel.rolarDado();
    var multiplicadorDano = calculaMultDano(valorDado);

    var danoRodada = player.ataque * multiplicadorDano;

    monstro.hp -= danoRodada;
    TentativaModel.menos1();
    PO.campoMensagem.innerHTML = "Dano causado: " + danoRodada + ".";
    PO.campoMensagem.classList.add("mensagemJogando");
    PO.campoMensagem.classList.remove("mensagemInicio");

    if (valorDado > 15) {
      chanceMoeda(valorDado);
    }

    atualizaBatalha();

    if (monstro.hp <= 0) {
      chanceMoeda(20);
      alert("Monstro derrotado!");
      inicioGame(true);
    }

    if (!TentativaModel.temTentativas()) {
      alert("Perdeu! Melhore seus status e tente novamente!");
      inicioGame(false);
    }
  }
});

function calculaMultDano(valorDado) {
  if (valorDado === 20) {
    return 2.0;
  } else if (valorDado > 15) {
    return 1.2;
  } else if (valorDado > 10) {
    return 1;
  } else if (valorDado > 7) {
    return 0.5;
  } else {
    return 0.0;
  }
}

function chanceMoeda(valorDado) {
  console.log("chance moeda");
  var moedasGanhas = 0;
  if (valorDado === 20) {
    moedasGanhas = Util.getRandomInt(0, 2);
  }
  if (valorDado > 15) {
    if (Util.getRandomInt(0, 10) > 7) {
      moedasGanhas = 1;
    }
  }
  console.log("Moedas ganhas: " + moedasGanhas);
  Dinheiro.moedaAdd(moedasGanhas);
}
