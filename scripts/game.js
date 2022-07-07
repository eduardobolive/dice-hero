import Mago from "./model/heroi/mago.js";
import Monstro from "./model/monstro/monstro.js";
import Dinheiro from "./model/dinheiroModel.js";
import PO from "./pageObjects.js";
import TentativaModel from "./model/tentativaModel.js";
import DadoModel from "./model/dadoModel.js";
import Util from "./util.js";
import AtualizaGame from "./atualizaGame.js";
import LojaModel from "./model/lojaModel.js";

var valorDado = 10;

var nivelMonstroBatalha = 1;
var monstro;
var player;

window.onload = function () {};

inicioGame(false);

function inicioGame(novoNivel) {
  if (localStorage.getItem("player") === null) {
    player = new Mago("Eduardo", "M", "Agua");
    localStorage.setItem("player", JSON.stringify(player));
  }
  if (localStorage.getItem("tentativas") === null) {
    localStorage.setItem("tentativas", TentativaModel.tentativas);
  } else {
    TentativaModel.tentativas = localStorage.getItem("tentativas");
    TentativaModel.tentativasRestantes = localStorage.getItem("tentativas");
    AtualizaGame.atualiza();
  }

  if (localStorage.getItem("moedas") === null) {
    localStorage.setItem("moedas", Dinheiro.moedas);
  } else {
    Dinheiro.moedas = localStorage.getItem("moedas");
    Dinheiro.moedas = localStorage.getItem("moedas");
    AtualizaGame.atualiza();
  }

  if (localStorage.getItem("loja") === null) {
    localStorage.setItem("loja", LojaModel.toJson());
  } else {
    LojaModel.atualizaLocal();
  }

  if (novoNivel) {
    nivelMonstroBatalha++;
  }
  TentativaModel.resetTentativas();
  monstro = new Monstro(nivelMonstroBatalha);
  atualizaBatalha();
  AtualizaGame.atualiza();
}

function atualizaBatalha() {
  PO.campoDado.innerHTML = valorDado;

  //Monstro
  PO.campoNomeMonstro.innerHTML = monstro.nome;
  PO.campoNivelMonstro.innerHTML = monstro.nivel;
  PO.campoHpMonstro.innerHTML = monstro.hp;
}

PO.campoDado.addEventListener("click", () => {
  if (TentativaModel.temTentativas()) {
    valorDado = DadoModel.rolarDado();
    var multiplicadorDano = calculaMultDano(valorDado);

    var danoRodada = Mago.getAtk() * multiplicadorDano;

    monstro.hp -= danoRodada;
    TentativaModel.menos1();
    PO.campoMensagem.innerHTML = "Dano causado: " + danoRodada + ".";
    PO.campoMensagem.classList.add("mensagemJogando");
    PO.campoMensagem.classList.remove("mensagemInicio");

    if (valorDado > 15) {
      chanceMoeda(valorDado);
    }

    atualizaBatalha();
    AtualizaGame.atualiza();

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
  var moedasGanhas = 0;
  if (valorDado === 20) {
    moedasGanhas = Util.getRandomInt(0, 2);
  }
  if (valorDado > 15) {
    if (Util.getRandomInt(0, 10) > 7) {
      moedasGanhas = 1;
    }
  }
  Dinheiro.moedaAdd(moedasGanhas);
}
