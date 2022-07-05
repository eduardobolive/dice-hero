import Mago from "./model/heroi/mago.js";
import Monstro from "./model/monstro/monstro.js";

var qtdTentativas = 100;
var qtdTentativasAtual = 100;
var valorDado = 10;
var qtdMoedas = 0;
var valUpgradeAtk = 5;
var valUpgradeTentativas = 5;

var dado = document.querySelector(".dado");
var tentativas = document.querySelector(".tentativas");
var mensagem = document.querySelector(".mensagem");
var moedas = document.querySelector(".qtdMoedas");
var ataque = document.querySelector(".atkHero");
var hpMonstro = document.querySelector(".hpMonstro");
var nomeMonstro = document.querySelector(".nomeMonstro");
var nivelMonstro = document.querySelector(".nivelMonstro");
var nivelHeroi = document.querySelector(".nivelHeroi");
var upgradeAtk = document.querySelector(".upgradeAtk");
var upgradeTentativas = document.querySelector(".upgradeTentativas");
var qtdMoedaAtaque = document.querySelector(".qtdMoedaAtaque");
var qtdMoedaTentativa = document.querySelector(".qtdMoedaTentativa");

var nivelMonstroBatalha = 1;
var player = new Mago("Eduardo", "M", "Agua");
var monstro;

inicioGame(false);

function inicioGame(novoNivel) {
  if (novoNivel) {
    nivelMonstroBatalha++;
  }
  qtdTentativasAtual = qtdTentativas;
  monstro = new Monstro(nivelMonstroBatalha);
  atualizaBatalha();
}

function atualizaBatalha() {
  // Comum
  tentativas.innerHTML = qtdTentativasAtual;
  dado.innerHTML = valorDado;
  moedas.innerHTML = qtdMoedas;
  qtdMoedaAtaque.innerHTML = valUpgradeAtk;
  qtdMoedaTentativa.innerHTML = valUpgradeTentativas;

  //Herói
  ataque.innerHTML = player.ataque;
  nivelHeroi.innerHTML = player.nivel;

  //Monstro
  nomeMonstro.innerHTML = monstro.nome;
  nivelMonstro.innerHTML = monstro.nivel;
  hpMonstro.innerHTML = monstro.hp;
}

upgradeAtk.addEventListener("click", () => {
  if (qtdMoedas >= valUpgradeAtk) {
    player.ataque++;
    qtdMoedas -= valUpgradeAtk;
    valUpgradeAtk += 5;
    atualizaBatalha();
  }
});

upgradeTentativas.addEventListener("click", () => {
  if (qtdMoedas >= valUpgradeTentativas) {
    qtdTentativas++;
    qtdTentativasAtual++;
    qtdMoedas -= valUpgradeTentativas;
    valUpgradeTentativas += 5;
    atualizaBatalha();
  }
});

dado.addEventListener("click", () => {
  if (qtdTentativasAtual > 0) {
    valorDado = getRandomInt(0, 20);
    var multiplicadorDano = calculaMultDano(valorDado);

    var danoRodada = player.ataque * multiplicadorDano;

    monstro.hp -= danoRodada;
    qtdTentativasAtual--;
    mensagem.innerHTML = "Dano causado: " + danoRodada + ".";
    mensagem.classList.add("mensagemJogando");
    mensagem.classList.remove("mensagemInicio");

    if (valorDado > 15) {
      chanceMoeda(valorDado);
    }

    atualizaBatalha();

    if (monstro.hp <= 0) {
      chanceMoeda(20);
      alert("Monstro derrotado!");
      inicioGame(true);
    }

    if (qtdTentativasAtual <= 0) {
      alert("Perdeu! Melhore seus status e tente novamente!");
      inicioGame(false);
    }
  }
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

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
  if (valorDado === 20) {
    qtdMoedas += getRandomInt(0, 2);
  }
  if (valorDado > 15) {
    if (getRandomInt(0, 10) > 7) {
      qtdMoedas++;
    }
  }
}
