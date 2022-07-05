initAtaque = 1;
initTentativas = 3;
initMoedas = 0;
initHpInimigo = 100;

valAtaque = 5;
valTentativas = 3;
valMoedas = 0;
valHpInimigo = 100;
valDado = 0;

dado = document.querySelector(".dado");
tentativas = document.querySelector(".tentativas");
mensagem = document.querySelector(".mensagem");
moedas = document.querySelector(".qtdMoedas");
ataque = document.querySelector(".atkHero");
hpInimigo = document.querySelector(".hpInimigo");

inicioGame();

function inicioGame() {
  moedas.innerHTML = initMoedas;
  tentativas.innerHTML = initTentativas;
  ataque.innerHTML = initAtaque;
  hpInimigo.innerHTML = initHpInimigo;
}

function atualizaGame() {
  moedas.innerHTML = valMoedas;
  tentativas.innerHTML = valTentativas;
  hpInimigo.innerHTML = valHpInimigo;
  dado.innerHTML = valDado;
}

dado.addEventListener("click", () => {
  tentativasRestantes = tentativas.innerHTML;
  if (+tentativasRestantes > 0) {
    valorDado = getRandomInt(0, 20);
    valDado = valorDado;

    mult = calculaDano(valorDado);

    dano = valAtaque * mult;

    valHpInimigo -= dano;
    valTentativas--;

    mensagem.innerHTML = "Dano causado: " + dano + ".";
    mensagem.classList.add("mensagemJogando");
    mensagem.classList.remove("mensagemInicio");
    chanceMoeda(valorDado);

    atualizaGame();
  }
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function calculaDano(valorDado) {
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
    valMoedas += getRandomInt(0, 2);
  }
  if (valorDado > 15) {
    if (getRandomInt(0, 10) > 7) {
      valMoedas++;
    }
  }
}
