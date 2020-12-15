/*  Prova 2 - Lógica de Programação
    Desenvolvedor: Antônio Marques Pedra
    
    Link do vídeo no Drive: https://drive.google.com/file/d/123dMzLZxmigBVDNcbVvp-s8nQf2bTA5d/view?usp=sharing
    
    Link do P5js: https://editor.p5js.org/antoniomarqueslife/sketches/YO-wC9Szd
    
    

Algoritmo descritivo do jogo

Tela 1 
contém 3 botoes 
Começar 
Instruçoes 
Creditos 

clicando com o mouse ou com o teclado no botão de começar o jogador será direcionado para a tela 2
clicando com o mouse ou com o teclado no botão de instruções o jogador será direcionado para a tela 3
clicando com o mouse ou com o teclado no botão de começar o jogador será direcionado para a tela 4


tela = 2 
na tela 2 temos as fases do jogo que sao os botoes de 1 até 9 
clicando no botão da fase 1 com o mouse ou com o teclado o jogador será direcionado para uma questão
clicando no botão da fase 2 com o mouse ou com o teclado o jogador será direcionado para uma questão
clicando no botão da fase 3 com o mouse ou com o teclado o jogador será direcionado para uma questão
clicando no botão da fase 4 com o mouse ou com o teclado o jogador será direcionado para uma questão
clicando no botão da fase 5 com o mouse ou com o teclado o jogador será direcionado para uma questão
clicando no botão da fase 6 com o mouse ou com o teclado o jogador será direcionado para uma questão
clicando no botão da fase 7 com o mouse ou com o teclado o jogador será direcionado para uma questão
clicando no botão da fase 8 com o mouse ou com o teclado o jogador será direcionado para uma questão
clicando no botão da fase 9 com o mouse ou com o teclado o jogador sera direcionado para uma questão


tela = 3 
tela que tem as instruções do jogo e a opção de voltar com o mouse (voltar) e com o teclado (esc)

tela = 4
tela que tem os créditos do jogo e a opção de voltar com o mouse (voltar) e com o teclado (esc)

tela = 5 
tela da fase 1, com questões 
são dois botões de questões incorretas  e um botão de questão correta
clicando em alguma questão incorreta com o mouse ou com o teclado, o jogador será direcionado para tela de perdeu
clicando na questão correta com o mouse ou com o teclado, o jogador será direcionado para tela de parabéns

tela = 6
tela da fase 2, com questões 
são dois botões de questões incorretas  e um botão de questão correta
clicando em alguma questão incorreta com o mouse ou com o teclado, o jogador será direcionado para tela de perdeu
clicando na questão correta com o mouse ou com o teclado, o jogador será direcionado para tela de parabéns

tela = 7
tela da fase 3, com questões 
são dois botões de questões incorretas  e um botão de questão correta
clicando em alguma questão incorreta com o mouse ou com o teclado, o jogador será direcionado para tela de perdeu
clicando na questão correta com o mouse ou com o teclado, o jogador será direcionado para tela de parabéns

tela = 8 
tela da fase 4, com questões 
são dois botões de questões incorretas  e um botão de questão correta
clicando em alguma questão incorreta com o mouse ou com o teclado, o jogador será direcionado para tela de perdeu
clicando na questão correta com o mouse ou com o teclado, o jogador será direcionado para tela de parabéns

tela = 9
tela da fase 5, com questões 
são dois botões de questões incorretas  e um botão de questão correta
clicando em alguma questão incorreta com o mouse ou com o teclado, o jogador será direcionado para tela de perdeu
clicando na questão correta com o mouse ou com o teclado, o jogador será direcionado para tela de parabéns

tela = 10 
tela da fase 6, com questões 
são dois botões de questões incorretas  e um botão de questão correta
clicando em alguma questão incorreta com o mouse ou com o teclado, o jogador será direcionado para tela de perdeu
clicando na questão correta com o mouse ou com o teclado, o jogador será direcionado para tela de parabéns

tela = 11
tela da fase 7, com questões 
são dois botões de questões incorretas  e um botão de questão correta
clicando em alguma questão incorreta com o mouse ou com o teclado, o jogador será direcionado para tela de perdeu
clicando na questão correta com o mouse ou com o teclado, o jogador será direcionado para tela de parabéns

tela = 12
tela da fase 8, com questões 
são dois botões de questões incorretas  e um botão de questão correta
clicando em alguma questão incorreta com o mouse ou com o teclado, o jogador será direcionado para tela de perdeu
clicando na questão correta com o mouse ou com o teclado, o jogador será direcionado para tela de parabéns

tela = 13
tela da fase 9, com questões 
são dois botões de questões incorretas  e um botão de questão correta
clicando em alguma questão incorreta com o mouse ou com o teclado, o jogador será direcionado para tela de perdeu
clicando na questão correta com o mouse ou com o teclado, o jogador será direcionado para tela de parabéns

tela = 20 
tela da animação do jogo (bonequinho) 
e preenchimento do retângulo (barrinha)

tela = 21 
tela de perdeu 
tela que aparece sempre que o jogador responde incorretamente

tela = 22
tela de parabéns 
tela que aparece sempre que o jogador responde corretamente

*/


var tela = 1
var x1 = 110
var x2 = 111
var x3 = 110
var y1 = 105
var y2 = 170
var y3 = 240
var largura1 = 150
var largura2 = 170
var largura3 = 170
var altura1 = 40
var altura2 = 40
var altura3 = 40
var botao = 1
var tecla = false
var titulo = "MIND POWER"
var texto = "É um jogo educacional que tem como objetivo criar uma nova forma de ver os números para facilitar o entendimento de operações matemáticas, onde o jogador realizará diversas tarefas que desenvolvem a visão 360 graus do problema. Trabalhando diversas habilidades, tendo como principal intuito mostrar as diversas formas de resolver as expressões "
var habilidade = '(EF02MA04) Compor e decompor números naturais de até três ordens, com suporte de material manipulável, por meio de diferentes adições'
var anoescolar = "Ano Escolar : A partir do 5ano"
var esc = "aperte ESC para retornar"

var professora = "PEDAGOGA: Denisia Lima";
var formacao = "FORMAÇÃO: Pedagogia Licenciatura Plena";

var aluno = "Desenvolvedor: Antonio Marques"
var formacao1 = "FORMAÇÃO :cursando ciências e tecnologia (UFRN)"
var questaoum = "Como podemos reescrever o número 80 através da soma?"
var questaodois = "Como podemos reescrever o número 91 através da subtração? "
var questaotres = "Como podemos reescrever o número 25 através da divisão?"
var questaoquatro = "Como podemos reescrever o número 49 através da multiplicação?"
var questaocinco = "Em uma expressão numérica qual a prioridade entre as operações"
var questaoseis = "Qual o resutado da expressão numérica: 1 + 3 x 4 x 2 + 7"
var questaosete = "Qual o resultado da expressão : 1 - 7 x 3 + 2 x 7 + 1 + 3 - 4 / 2"
var questaooito = "Resolva a expressão numérica : 2 x 12 / 4 - 4 + 4 - 8 x 7 x 9 + 24"
var questaonove = "Resolva a expressão numérica : 7 x 6 x 3 x 10 x 5 x 3 x 8 x 9 x 0 "
var controledomouse = false
var opcao = 1
var opcao2 = 1
var opcao3 = 1
var cor = 20
var tela = 1
var x = 50
var y = 300
var l = 300
var l2 = 10
var h = 30
var b = 10
var xb = 15
var yb = 180

var contador = 0;
var tempo = 0;

var boneco = []

var fase = 1
var fasea = 1
var multX = 200
var multY = 170
var maisX = 100
var maisY = 170
var gucci1X = 200
var gucci1Y = 170
var gucci2X = 100
var gucci2Y = 170
var gucci3X = 300
var gucci3Y = 170
var gucci4X = 200
var gucci4Y = 170
var gucci5X = 100
var gucci5Y = 170
var gucci6X = 300
var gucci6Y = 170
var gucci = []
var w = 90
var p = 50
var s = 0
var fx = 40
var fy = 60
var som;


function setup() {
  createCanvas(400, 400);
  imagem = loadImage('cidade.jpg')
  chicagonewyork = loadImage('chicago.jpeg')
  fotodenisia = loadImage('prof.jpeg')
  fotoantonio = loadImage('antonio.jpeg')
  plano = loadImage('planob.jpg')
  mult = loadImage('xed.png')
  mais = loadImage('mais.png')
  som = createAudio('heart.mpeg');

  for (let cont = 1; cont <= 6; cont++) {
    gucci[cont - 1] = loadImage('r' + cont + '.png');
  }

  for (let conta = 1; conta <= 6; conta++) {
    boneco[conta - 1] = loadImage('b' + conta + '.png');
  }

}

function draw() {
  som.loop(true);

  // tela de menu 
  if (tela == 1) {
    l2 = 10
    xb = 15

    if (mouseIsPressed == false && keyIsPressed == false) {
      tecla = false
      controledomouse = false
    }
    if (controledomouse == false) {
      noStroke()
      imageMode(CORNER)
      background(plano);

      fill(0, 0, 0, 95)
      stroke(128, 128, 128)
      rect(x1, y1, largura1, altura1, 20);
      rect(x2, y2, largura2, altura2, 20);
      rect(x3, y3, largura3, altura3, 20);
      textSize(30);
      fill(255, 255, 255);
      text('começar', 130, 130);
      text('instruções', 130, 200);
      text('créditos', 130, 270);
      fill(0, 0, 255);
      text('M', 100, 50);
      fill(0, 0, 0);
      text('i', 130, 50);
      fill(255, 0, 0);
      text('n', 140, 50);
      fill(255, 255, 0);
      text('d', 160, 50);
      fill(0, 255, 0);
      text('P', 200, 50);
      fill(255, 255, 0);
      text('o', 220, 50);
      fill(255, 0, 0);
      text('w', 240, 50);
      fill(0, 255, 255);
      text('e', 262, 50);
      fill(0, 0, 0);
      text('r', 280, 50);
      //botão começar
      if (mouseX >= x1 && mouseX <= x1 + largura1 && mouseY >= y1 && mouseY <= y1 + altura1) {
        botao = 1
        if (mouseIsPressed) {
          tela = 20
          controledomouse = true
        }

      }
      //Botão Intruções
      else if (mouseX >= x2 && mouseX <= x2 + largura2 && mouseY >= y2 && mouseY <= y2 + altura2) {
        botao = 2
        if (mouseIsPressed) {
          tela = 3
          controledomouse = true

        }
      }
      //Botão creditos
      else if (mouseX >= x3 && mouseX <= x3 + largura3 && mouseY >= y3 && mouseY <= y3 + altura3) {
        botao = 3
        if (mouseIsPressed) {
          tela = 4
          controledomouse = true

        }
      }


      //movimentando com o teclado
      // botao de começar
      if (botao == 1) {
        if (keyIsPressed === false) {
          tecla = false
        }
        if (tecla == false) {

          fill(0, 0, 0, 150)
          rect(x1, y1, largura1, altura1, 20);
          fill(255, 255, 255);
          text('começar', 130, 130);


          if (keyIsDown(UP_ARROW)) {
            botao = 3
            tecla = true

          } else if (keyIsDown(DOWN_ARROW)) {
            botao = 2
            tecla = true

          } else if (keyIsDown(ENTER)) {

            tela = 20
            tecla = true
            botao = 11
          }
        }
      }
      // botao de instruçoes
      else if (botao == 2) {
        if (keyIsPressed === false) {
          tecla = false
        }
        if (tecla == false) {

          fill(0, 0, 0, 150)
          rect(x2, y2, largura2, altura2, 20);
          fill(255, 255, 255);
          text('instruções', 130, 200);

          if (keyIsDown(UP_ARROW)) {
            botao = 1
            tecla = true

          } else if (keyIsDown(DOWN_ARROW)) {
            botao = 3
            tecla = true

          } else if (keyIsDown(ENTER)) {

            tela = 3
            tecla = true

          }
        }
      }
      // botao de creditos
      else if (botao == 3) {
        if (keyIsPressed === false) {
          tecla = false
        }
        if (tecla == false) {
          fill(0, 0, 0, 150)
          rect(x3, y3, largura3, altura3, 20);
          fill(255, 255, 255);
          text('créditos', 130, 270);
          if (keyIsDown(UP_ARROW)) {
            botao = 2
            tecla = true

          } else if (keyIsDown(DOWN_ARROW)) {
            botao = 1
            tecla = true

          } else if (keyIsDown(ENTER)) {

            tela = 4
            tecla = true
          }
        }
      }

    }
  }
  // iniciando a tela 2 depois do botao de começar
  else if (tela == 2) {
    if (mouseIsPressed == false && keyIsPressed == false) {
      tecla = false
      controledomouse = false
    }
    if (controledomouse == false && tecla == false) {
      imageMode(CORNER)
      background(plano)
      textSize(16)





      //Botão de voltar
      textSize(14)
      noStroke()
      fill(cor)
      text("Voltar", 195, 370)

      if (mouseX > 180 && mouseX < 230 && mouseY > 350 && mouseY < 380) {
        stroke(200)
        fill(20)
        rect(190, 350, 50, 30, 15)
        noStroke()
        fill(240)
        text("Voltar", 195, 370)

        if (mouseIsPressed) {
          tela = 1
          controledomouse = true
          botao = 1

        }
      }
      if (keyIsDown(ESCAPE)) {

        tela = 1
        tecla = true
        botao = 1
      }
      textSize(10)
      fill(cor)
      text(esc, 278, 380, 300)
      textSize(14)



      //Botão da questao 1 
      textSize(30)
      if (mouseX > 10 && mouseX < 90 && mouseY > 10 && mouseY < 90) {
        stroke(200)
        fill(20)
        rect(10, 10, 80, 80, 15)
        botao = 11
        if (mouseIsPressed) {
          tela = 5
          controledomouse = true
          botao = 12 - 1

        }
      }
      fill(cor)
      noStroke()
      text("1", 40, 60)



      //Botão da questao 2
      if (mouseX > 110 && mouseX < 190 && mouseY > 10 && mouseY < 90) {
        stroke(200)
        fill(20)
        rect(110, 10, 80, 80, 15)
        botao = 22
        if (mouseIsPressed) {
          tela = 6
          controledomouse = true
          botao = 15 - 1


        }
      }
      fill(cor)
      noStroke()
      text("2", 140, 60)



      //Botão da questao 3
      if (mouseX > 210 && mouseX < 290 && mouseY > 10 && mouseY < 90) {
        stroke(200)
        fill(20)
        rect(210, 10, 80, 80, 15)
        botao = 33
        if (mouseIsPressed) {
          tela = 7
          controledomouse = true
          botao = 18 - 1


        }
      }
      fill(cor)
      noStroke()
      text("3", 240, 60)



      //Botão da questao 4
      if (mouseX > 310 && mouseX < 390 && mouseY > 10 && mouseY < 90) {
        stroke(200)
        fill(20)
        rect(310, 10, 80, 80, 15)
        botao = 44
        if (mouseIsPressed) {
          tela = 8
          controledomouse = true
          botao = 21 - 1


        }
      }
      fill(cor)
      noStroke()
      text("4", 340, 60)



      //Botão da questao 5
      textSize(35)
      if (mouseX > 50 && mouseX < 145 && mouseY > 100 && mouseY < 195) {
        stroke(200)
        fill(20)
        rect(50, 100, 95, 95, 15)
        botao = 55
        if (mouseIsPressed) {
          tela = 9
          controledomouse = true
          botao = 92
        }
      }
      fill(cor)
      noStroke()
      text("5", 85, 155)


      //Botão da questao 6
      if (mouseX > 170 && mouseX < 265 && mouseY > 100 && mouseY < 195) {
        stroke(200)
        fill(20)
        rect(170, 100, 95, 95, 15)
        botao = 66
        if (mouseIsPressed) {
          tela = 10
          controledomouse = true
          botao = 24 - 1


        }
      }
      fill(cor)
      noStroke()
      text("6", 205, 155)

      //Botão da questao 7
      if (mouseX > 280 && mouseX < 375 && mouseY > 100 && mouseY < 195) {
        stroke(200)
        fill(20)
        rect(280, 100, 95, 95, 15)
        botao = 77
        if (mouseIsPressed) {
          tela = 11
          controledomouse = true
          botao = 28 - 1


        }
      }
      fill(cor)
      noStroke()
      text("7", 315, 155)


      //Botão da questao 8
      textSize(50)
      if (mouseX > 80 && mouseX < 190 && mouseY > 200 && mouseY < 310) {
        stroke(200)
        fill(20)
        rect(80, 200, 110, 110, 15)
        botao = 88
        if (mouseIsPressed) {
          tela = 12
          controledomouse = true
          botao = 91

        }
      }
      fill(cor)
      noStroke()
      text("8", 120, 270)



      //Botão da questao 9
      if (mouseX > 220 && mouseX < 330 && mouseY > 200 && mouseY < 310) {
        stroke(200)
        fill(20)
        rect(220, 200, 110, 110, 15)
        botao = 99
        if (mouseIsPressed) {
          tela = 13
          controledomouse = true
          botao = 90
        }
      }
      fill(cor)
      noStroke()
      text("9", 260, 270)

    }


    //movimentando com o teclado
    // botao da questao 1
    textSize(30)
    if (botao == 11) {
      if (keyIsPressed === false) {
        tecla = false
      }
      if (tecla == false) {
        stroke(200)
        fill(0, 0, 0, 150)
        rect(10, 10, 80, 80, 15);
        noStroke()
        fill(255, 255, 255);
        text("1", 40, 60)


        if (keyIsDown(UP_ARROW)) {
          botao = 88
          tecla = true

        } else if (keyIsDown(DOWN_ARROW)) {
          botao = 55
          tecla = true

        } else if (keyIsDown(ENTER)) {

          tela = 5
          tecla = true
          botao = 11
        } else if (keyIsDown(RIGHT_ARROW)) {
          botao = 22
          tecla = true

        } else if (keyIsDown(LEFT_ARROW)) {
          botao = 44
          tecla = true

        }
      }
    }
    // botao da questao 2
    else if (botao == 22) {
      if (keyIsPressed === false) {
        tecla = false
      }
      if (tecla == false) {
        stroke(200)
        fill(0, 0, 0, 150)
        rect(110, 10, 80, 80, 15);
        noStroke()
        fill(255, 255, 255);
        text('2', 140, 60);

        if (keyIsDown(UP_ARROW)) {
          botao = 99
          tecla = true

        } else if (keyIsDown(DOWN_ARROW)) {
          botao = 66
          tecla = true

        } else if (keyIsDown(ENTER)) {

          tela = 6
          tecla = true
          botao = 14

        } else if (keyIsDown(RIGHT_ARROW)) {
          botao = 33
          tecla = true

        } else if (keyIsDown(LEFT_ARROW)) {
          botao = 11
          tecla = true

        }
      }
    }

    // botao da questao 3
    else if (botao == 33) {
      if (keyIsPressed === false) {
        tecla = false
      }
      if (tecla == false) {
        stroke(200)
        fill(0, 0, 0, 150)
        rect(210, 10, 80, 80, 15);
        noStroke()
        fill(255, 255, 255);
        text('3', 240, 60);

        if (keyIsDown(UP_ARROW)) {
          botao = 99
          tecla = true

        } else if (keyIsDown(DOWN_ARROW)) {
          botao = 77
          tecla = true

        } else if (keyIsDown(ENTER)) {

          tela = 7
          tecla = true
          botao = 17

        } else if (keyIsDown(RIGHT_ARROW)) {
          botao = 44
          tecla = true

        } else if (keyIsDown(LEFT_ARROW)) {
          botao = 22
          tecla = true

        }

      }
    }
    // botao da questao 4
    else if (botao == 44) {
      if (keyIsPressed === false) {
        tecla = false
      }
      if (tecla == false) {
        stroke(200)
        fill(0, 0, 0, 150)
        rect(310, 10, 80, 80, 15);
        noStroke()
        fill(255, 255, 255);
        text('4', 340, 60);

        if (keyIsDown(UP_ARROW)) {
          botao = 99
          tecla = true

        } else if (keyIsDown(DOWN_ARROW)) {
          botao = 77
          tecla = true

        } else if (keyIsDown(ENTER)) {

          tela = 8
          tecla = true
          botao = 20

        } else if (keyIsDown(RIGHT_ARROW)) {
          botao = 11
          tecla = true

        } else if (keyIsDown(LEFT_ARROW)) {
          botao = 33
          tecla = true

        }
      }
    }

    // botao da questao 5
    else if (botao == 55) {
      if (keyIsPressed === false) {
        tecla = false
      }
      textSize(35)
      if (tecla == false) {
        stroke(200)
        fill(0, 0, 0, 150)
        rect(50, 100, 95, 95, 15);
        noStroke()
        fill(255, 255, 255);
        text('5', 85, 155);

        if (keyIsDown(UP_ARROW)) {
          botao = 11
          tecla = true

        } else if (keyIsDown(DOWN_ARROW)) {
          botao = 88
          tecla = true

        } else if (keyIsDown(ENTER)) {

          tela = 9
          tecla = true
          botao = 92

        } else if (keyIsDown(RIGHT_ARROW)) {
          botao = 66
          tecla = true

        } else if (keyIsDown(LEFT_ARROW)) {
          botao = 77
          tecla = true

        }
      }
    }

    // botao da questao 6
    else if (botao == 66) {
      if (keyIsPressed === false) {
        tecla = false
      }
      textSize(35)
      if (tecla == false) {
        stroke(200)
        fill(0, 0, 0, 150)
        rect(170, 100, 95, 95, 15);
        noStroke()
        fill(255, 255, 255);
        text('6', 205, 155);

        if (keyIsDown(UP_ARROW)) {
          botao = 22
          tecla = true

        } else if (keyIsDown(DOWN_ARROW)) {
          botao = 99
          tecla = true

        } else if (keyIsDown(ENTER)) {

          tela = 10
          tecla = true
          botao = 23

        } else if (keyIsDown(RIGHT_ARROW)) {
          botao = 77
          tecla = true

        } else if (keyIsDown(LEFT_ARROW)) {
          botao = 55
          tecla = true

        }
      }
    }

    // botao da questao 7
    else if (botao == 77) {
      if (keyIsPressed === false) {
        tecla = false
      }
      textSize(35)
      if (tecla == false) {
        stroke(200)
        fill(0, 0, 0, 150)
        rect(280, 100, 95, 95, 15);
        noStroke()
        fill(255, 255, 255);
        text('7', 315, 155);

        if (keyIsDown(UP_ARROW)) {
          botao = 33
          tecla = true

        } else if (keyIsDown(DOWN_ARROW)) {
          botao = 99
          tecla = true

        } else if (keyIsDown(ENTER)) {

          tela = 11
          tecla = true
          botao = 23 + 3

        } else if (keyIsDown(RIGHT_ARROW)) {
          botao = 55
          tecla = true

        } else if (keyIsDown(LEFT_ARROW)) {
          botao = 66
          tecla = true

        }
      }
    }

    // botao da questao 8
    else if (botao == 88) {
      if (keyIsPressed === false) {
        tecla = false
      }
      textSize(50)
      if (tecla == false) {
        stroke(200)
        fill(0, 0, 0, 150)
        rect(80, 200, 110, 110, 15);
        noStroke()
        fill(255, 255, 255);
        text('8', 120, 270);

        if (keyIsDown(UP_ARROW)) {
          botao = 55
          tecla = true

        } else if (keyIsDown(DOWN_ARROW)) {
          botao = 22
          tecla = true

        } else if (keyIsDown(ENTER)) {

          tela = 12
          tecla = true
          botao = 91

        } else if (keyIsDown(RIGHT_ARROW)) {
          botao = 99
          tecla = true

        } else if (keyIsDown(LEFT_ARROW)) {
          botao = 99
          tecla = true

        }
      }
    }
    // botao da questao 9
    else if (botao == 99) {
      if (keyIsPressed === false) {
        tecla = false
      }
      textSize(50)
      if (tecla == false) {
        stroke(200)
        fill(0, 0, 0, 150)
        rect(220, 200, 110, 110, 15);
        noStroke()
        fill(255, 255, 255);
        text('9', 260, 270);

        if (keyIsDown(UP_ARROW)) {
          botao = 66
          tecla = true

        } else if (keyIsDown(DOWN_ARROW)) {
          botao = 44
          tecla = true

        } else if (keyIsDown(ENTER)) {

          tela = 13
          tecla = true
          botao = 90

        } else if (keyIsDown(RIGHT_ARROW)) {
          botao = 88
          tecla = true

        } else if (keyIsDown(LEFT_ARROW)) {
          botao = 88
          tecla = true

        }
      }
    }

    textSize(14)

  }

  // iniciando a tela 3 depois do botao de instruçoes 
  else if (tela == 3) {
    if (mouseIsPressed == false && keyIsPressed == false) {
      tecla = false
      controledomouse = false
    }
    if (controledomouse == false) {
      imageMode(CORNER)
      background(plano)
      fill(240)
      rect(5, 30, 360, 300, 15)
      textSize(14)
      fill(cor)
      text(anoescolar, 80, 40, 300)
      text(habilidade, 20, 80, 300)
      text(titulo, 130, 180)
      text(texto, 20, 200, 350)
      textSize(10)
      text(esc, 278, 380, 300)
      textSize(14)

      //Botão de voltar
      fill(cor)
      noStroke()
      text("Voltar", 195, 370)
      if (mouseX > 180 && mouseX < 230 && mouseY > 350 && mouseY < 380) {
        stroke(200)
        fill(20)
        rect(190, 350, 50, 30, 15)
        fill(240)
        noStroke()
        text("Voltar", 195, 370)
        if (mouseIsPressed) {
          tela = 1
          controledomouse = true

        }
      }

      if (keyIsDown(ESCAPE)) {

        tela = 1
        tecla = true
      }




    }
  }
  // iniciando a tela 4 depois do botao de creditos 
  else if (tela == 4) {
    if (mouseIsPressed == false && keyIsPressed == false) {
      tecla = false
      controledomouse = false
    }
    if (controledomouse == false) {
      imageMode(CORNER)
      background(plano)
      fill(240)
      rect(5, 10, 360, 325, 15)


      //perfil da pedagoga
      image(fotodenisia, 10, 20, 100, 140)
      textSize(18 - 4)
      fill(cor)
      noStroke()
      text(professora, 120, 20, 180)
      text(formacao, 120, 67, 200)


      // perfil antonio
      image(fotoantonio, 10, 180, 100, 140)
      textSize(14)
      fill(cor)
      noStroke()
      text(aluno, 120, 180, 200)
      text(formacao1, 120, 220, 200)
      textSize(10)
      text(esc, 278, 380, 300)
      textSize(14)


      //Botão de voltar
      fill(cor)
      noStroke()
      text("Voltar", 195, 370)
      if (mouseX > 180 && mouseX < 230 && mouseY > 350 && mouseY < 380) {
        stroke(200)
        fill(20)
        rect(190, 350, 50, 30, 15)
        fill(240)
        noStroke()
        text("Voltar", 195, 370)

        if (mouseIsPressed) {
          tela = 1
          controledomouse = true

        }
      }
      if (keyIsDown(ESCAPE)) {

        tela = 1
        tecla = true
      }



    }
  }

  // iniciando a tela 5 depois do botao da questao 1
  else if (tela == 5) {
    if (mouseIsPressed == false && keyIsPressed == false) {
      tecla = false
      controledomouse = false
    }
    if (controledomouse == false && tecla == false) {
      imageMode(CORNER)
      background(plano)
      fill(0, 0, 0, 95)
      stroke(128, 128, 128)
      rect(x1, 155, largura2, altura1, 20);
      rect(x2, 200, largura2, altura2, 20);
      rect(x3, 245, largura2, altura3, 20);
      textSize(30);
      fill(255, 255, 255);
      text('54 + 27', 143, 185);
      text('56 + 26', 143, 230);
      text('53 + 27', 143, 275);
      //botão resposta errada
      if (mouseX >= x1 && mouseX <= x1 + largura2 && mouseY >= 155 && mouseY <= 155 + altura1) {
        botao = 10
        if (mouseIsPressed) {
          tela = 21
          controledomouse = true
          fasea = 1

          botao = 30
        }

      }
      //Botão resposta2
      else if (mouseX >= x2 && mouseX <= x2 + largura2 && mouseY >= 200 && mouseY <= 200 + altura2) {
        botao = 11
        if (mouseIsPressed) {
          tela = 21
          controledomouse = true
          fasea = 1
          botao = 30

        }
      }
      //Botão resposta correta
      else if (mouseX >= x3 && mouseX <= x3 + largura2 && mouseY >= 245 && mouseY <= 245 + altura3) {
        botao = 12
        if (mouseIsPressed) {
          tela = 22
          controledomouse = true
          fasea = 1
          fase = 2
          botao = 40
        }
      }
      //movimentando com o teclado
      // botao de resposta1
      if (botao == 10) {
        if (keyIsPressed === false) {
          tecla = false
        }
        if (tecla == false) {

          fill(0, 0, 0, 150)
          rect(x1, 155, largura2, altura1, 20);
          fill(255, 255, 255);
          text('54 + 27', 143, 185);


          if (keyIsDown(UP_ARROW)) {
            botao = 12
            tecla = true

          } else if (keyIsDown(DOWN_ARROW)) {
            botao = 11
            tecla = true

          } else if (keyIsDown(ENTER)) {

            tela = 21
            tecla = true
            botao = 30
            fasea = 1

          }
        }
      }
      // botao de resposta2
      else if (botao == 11) {
        if (keyIsPressed === false) {
          tecla = false
        }
        if (tecla == false) {

          fill(0, 0, 0, 150)
          rect(x2, 200, largura2, altura2, 20);
          fill(255, 255, 255);
          text('56 + 26', 143, 230);

          if (keyIsDown(UP_ARROW)) {
            botao = 10
            tecla = true

          } else if (keyIsDown(DOWN_ARROW)) {
            botao = 12
            tecla = true

          } else if (keyIsDown(ENTER)) {

            tela = 21
            tecla = true
            fasea = 1
            botao = 30

          }
        }
      }
      // botao de resposta correta
      else if (botao == 12) {
        if (keyIsPressed === false) {
          tecla = false
        }
        if (tecla == false) {
          fill(0, 0, 0, 150)
          rect(x3, 245, largura2, altura3, 20);
          fill(255, 255, 255);
          text('53 + 27', 143, 275);
          if (keyIsDown(UP_ARROW)) {
            botao = 11
            tecla = true

          } else if (keyIsDown(DOWN_ARROW)) {
            botao = 10
            tecla = true

          } else if (keyIsDown(ENTER)) {

            tela = 22
            tecla = true
            fase = 2
            fasea = 1
            botao = 40
          }
        }
      }


      fill(240)
      rect(30, 30, 360, 80, 15)
      textSize(20)
      fill(cor)
      text(questaoum, 80, 40, 300)
    }
    //Botão de voltar
    textSize(14)
    noStroke()
    fill(cor)
    text("Voltar", 195, 370)
    if (mouseX > 180 && mouseX < 230 && mouseY > 350 && mouseY < 380) {
      stroke(200)
      fill(20)
      rect(190, 350, 50, 30, 15)
      noStroke()
      fill(240)
      text("Voltar", 195, 370)
      if (mouseIsPressed) {
        tela = 2
        botao = 11
        controledomouse = true

      }
    }
    if (keyIsDown(ESCAPE)) {

      tela = 2
      botao = 11
      tecla = true
    }
    textSize(10)
    fill(cor)
    text(esc, 278, 380, 300)
    textSize(14)
  }


  // iniciando a tela 6 depois do botao da questao 2
  else if (tela == 6) {
    if (mouseIsPressed == false && keyIsPressed == false) {
      tecla = false
      controledomouse = false
    }
    if (controledomouse == false && tecla == false) {
      imageMode(CORNER)
      background(plano)
      fill(0, 0, 0, 95)
      stroke(128, 128, 128)
      rect(x1, 155, largura2, altura1, 20);
      rect(x2, 200, largura2, altura2, 20);
      rect(x3, 245, largura2, altura3, 20);
      textSize(30);
      fill(255, 255, 255);
      text('100 - 8', 143, 185);
      text('134 - 42', 143, 230);
      text('133 - 42', 143, 275);
      //botão resposta
      if (mouseX >= x1 && mouseX <= x1 + largura2 && mouseY >= 155 && mouseY <= 155 + altura1) {
        botao = 13
        if (mouseIsPressed) {
          tela = 21
          controledomouse = true
          fasea = 2
          botao = 30
        }

      }
      //Botão resposta
      else if (mouseX >= x2 && mouseX <= x2 + largura2 && mouseY >= 200 && mouseY <= 200 + altura2) {
        botao = 14
        if (mouseIsPressed) {
          tela = 21
          controledomouse = true
          fasea = 2
          botao = 30

        }
      }
      //Botão resposta correta
      else if (mouseX >= x3 && mouseX <= x3 + largura2 && mouseY >= 245 && mouseY <= 245 + altura3) {
        botao = 15
        if (mouseIsPressed) {
          tela = 22
          controledomouse = true
          fasea = 2
          fase = 3
          botao = 40
        }
      }

      //movimentando com o teclado
      // botao de resposta1
      if (botao == 13) {
        if (keyIsPressed === false) {
          tecla = false
        }
        if (tecla == false) {

          fill(0, 0, 0, 150)
          rect(x1, 155, largura2, altura1, 20);
          fill(255, 255, 255);
          text('100 - 8', 143, 185);


          if (keyIsDown(UP_ARROW)) {
            botao = 15
            tecla = true

          } else if (keyIsDown(DOWN_ARROW)) {
            botao = 14
            tecla = true

          } else if (keyIsDown(ENTER)) {

            tela = 21
            tecla = true
            botao = 30
            fasea = 2
          }
        }
      }
      // botao de resposta2
      else if (botao == 14) {
        if (keyIsPressed === false) {
          tecla = false
        }
        if (tecla == false) {

          fill(0, 0, 0, 150)
          rect(x2, 200, largura2, altura2, 20);
          fill(255, 255, 255);
          text('134 - 42', 143, 230);

          if (keyIsDown(UP_ARROW)) {
            botao = 13
            tecla = true

          } else if (keyIsDown(DOWN_ARROW)) {
            botao = 15
            tecla = true

          } else if (keyIsDown(ENTER)) {

            tela = 21
            tecla = true
            fasea = 2
            botao = 30

          }
        }
      }
      // botao de resposta correta
      else if (botao == 15) {
        if (keyIsPressed === false) {
          tecla = false
        }
        if (tecla == false) {
          fill(0, 0, 0, 150)
          rect(x3, 245, largura2, altura3, 20);
          fill(255, 255, 255);
          text('133 - 42', 143, 275);
          if (keyIsDown(UP_ARROW)) {
            botao = 14
            tecla = true

          } else if (keyIsDown(DOWN_ARROW)) {
            botao = 13
            tecla = true

          } else if (keyIsDown(ENTER)) {

            tela = 22
            tecla = true
            fase = 3
            fasea = 2
            botao = 40
          }
        }
      }


      fill(240)
      rect(30, 30, 360, 80, 15)
      textSize(20)
      fill(cor)
      text(questaodois, 80, 40, 300)
    }
    //Botão de voltar
    textSize(14)
    noStroke()
    fill(cor)
    text("Voltar", 195, 370)
    if (mouseX > 180 && mouseX < 230 && mouseY > 350 && mouseY < 380) {
      stroke(200)
      fill(20)
      rect(190, 350, 50, 30, 15)
      noStroke()
      fill(240)
      text("Voltar", 195, 370)
      if (mouseIsPressed) {
        tela = 2
        controledomouse = true
        botao = 22

      }
    }

    if (keyIsDown(ESCAPE)) {

      tela = 2
      tecla = true
      botao = 22
    }
    textSize(10)
    fill(cor)
    text(esc, 278, 380, 300)
    textSize(14)

  }


  // iniciando a tela 7 depois do botao da questao 3
  else if (tela == 7) {
    if (mouseIsPressed == false && keyIsPressed == false) {
      tecla = false
      controledomouse = false
    }
    if (controledomouse == false && tecla == false) {
      imageMode(CORNER)
      background(plano)
      fill(0, 0, 0, 95)
      stroke(128, 128, 128)
      rect(x1, 155, largura2, altura1, 20);
      rect(x2, 200, largura2, altura2, 20);
      rect(x3, 245, largura2, altura3, 20);
      textSize(30);
      fill(255, 255, 255);
      text('100 / 4', 150, 185);
      text('50 / 4', 150, 230);
      text('125 / 4', 150, 275);
      //botão resposta correta
      if (mouseX >= x1 && mouseX <= x1 + largura2 && mouseY >= 155 && mouseY <= 155 + altura1) {
        botao = 16
        if (mouseIsPressed) {
          tela = 22
          controledomouse = true
          fasea = 3
          fase = 4
          botao = 40

        }

      }
      //Botão resposta
      else if (mouseX >= x2 && mouseX <= x2 + largura2 && mouseY >= 200 && mouseY <= 200 + altura2) {
        botao = 17
        if (mouseIsPressed) {
          tela = 21
          controledomouse = true
          fasea = 3
          botao = 30

        }
      }
      //Botão resposta
      else if (mouseX >= x3 && mouseX <= x3 + largura2 && mouseY >= 245 && mouseY <= 245 + altura3) {
        botao = 18
        if (mouseIsPressed) {
          tela = 21
          controledomouse = true
          fasea = 3
          botao = 30

        }
      }


      //movimentando com o teclado
      // botao de resposta correta
      if (botao == 16) {
        if (keyIsPressed === false) {
          tecla = false
        }
        if (tecla == false) {

          fill(0, 0, 0, 150)
          rect(x1, 155, largura2, altura1, 20);
          fill(255, 255, 255);
          text('100 / 4', 150, 185);


          if (keyIsDown(UP_ARROW)) {
            botao = 18
            tecla = true

          } else if (keyIsDown(DOWN_ARROW)) {
            botao = 17
            tecla = true

          } else if (keyIsDown(ENTER)) {

            tela = 22
            tecla = true
            botao = 40
            fase = 4
            fasea = 3
          }
        }
      }
      // botao de resposta2
      else if (botao == 17) {
        if (keyIsPressed === false) {
          tecla = false
        }
        if (tecla == false) {

          fill(0, 0, 0, 150)
          rect(x2, 200, largura2, altura2, 20);
          fill(255, 255, 255);
          text('50 / 4', 150, 230);

          if (keyIsDown(UP_ARROW)) {
            botao = 16
            tecla = true

          } else if (keyIsDown(DOWN_ARROW)) {
            botao = 18
            tecla = true

          } else if (keyIsDown(ENTER)) {

            tela = 21
            tecla = true
            fasea = 3
            botao = 30

          }
        }
      }
      // botao de resposta3
      else if (botao == 18) {
        if (keyIsPressed === false) {
          tecla = false
        }
        if (tecla == false) {
          fill(0, 0, 0, 150)
          rect(x3, 245, largura2, altura3, 20);
          fill(255, 255, 255);
          text('125 / 4', 150, 275);
          if (keyIsDown(UP_ARROW)) {
            botao = 17
            tecla = true

          } else if (keyIsDown(DOWN_ARROW)) {
            botao = 16
            tecla = true

          } else if (keyIsDown(ENTER)) {

            tela = 21
            tecla = true
            fasea = 3
            botao = 30
          }
        }
      }

      fill(240)
      rect(30, 30, 360, 80, 15)
      textSize(20)
      fill(cor)
      text(questaotres, 80, 40, 300)
    }
    //Botão de voltar
    textSize(14)
    noStroke()
    fill(cor)
    text("Voltar", 195, 370)
    if (mouseX > 180 && mouseX < 230 && mouseY > 350 && mouseY < 380) {
      stroke(200)
      fill(20)
      rect(190, 350, 50, 30, 15)
      noStroke()
      fill(240)
      text("Voltar", 195, 370)
      if (mouseIsPressed) {
        tela = 2
        controledomouse = true
        botao = 33

      }
    }

    if (keyIsDown(ESCAPE)) {

      tela = 2
      tecla = true
      botao = 33
    }
    textSize(10)
    fill(cor)
    text(esc, 278, 380, 300)
    textSize(14)

  }

  // iniciando a tela 8 depois do botao da questao 4
  else if (tela == 8) {
    if (mouseIsPressed == false && keyIsPressed == false) {
      tecla = false
      controledomouse = false
    }
    if (controledomouse == false && tecla == false) {
      imageMode(CORNER)
      background(plano)
      fill(0, 0, 0, 95)
      stroke(128, 128, 128)
      rect(x1, 155, largura2, altura1, 20);
      rect(x2, 200, largura2, altura2, 20);
      rect(x3, 245, largura2, altura3, 20);
      textSize(30);
      fill(255, 255, 255);
      text('9 X 5', 150, 185);
      text('6 X 7', 150, 230);
      text('7 X 7', 150, 275);
      //botão resposta
      if (mouseX >= x1 && mouseX <= x1 + largura2 && mouseY >= 155 && mouseY <= 155 + altura1) {
        botao = 19
        if (mouseIsPressed) {
          tela = 21
          controledomouse = true
          fasea = 4
          botao = 30
        }

      }
      //Botão resposta
      else if (mouseX >= x2 && mouseX <= x2 + largura2 && mouseY >= 200 && mouseY <= 200 + altura2) {
        botao = 20
        if (mouseIsPressed) {
          tela = 21
          controledomouse = true
          fasea = 4
          botao = 30

        }
      }
      //Botão resposta correta
      else if (mouseX >= x3 && mouseX <= x3 + largura2 && mouseY >= 245 && mouseY <= 245 + altura3) {
        botao = 21
        if (mouseIsPressed) {
          tela = 22
          controledomouse = true
          fase = 5
          fasea = 4
          botao = 40

        }
      }
      //movimentando com o teclado
      // botao de resposta1
      if (botao == 19) {
        if (keyIsPressed === false) {
          tecla = false
        }
        if (tecla == false) {

          fill(0, 0, 0, 150)
          rect(x1, 155, largura2, altura1, 20);
          fill(255, 255, 255);
          text('9 X 5', 150, 185);


          if (keyIsDown(UP_ARROW)) {
            botao = 21
            tecla = true

          } else if (keyIsDown(DOWN_ARROW)) {
            botao = 20
            tecla = true

          } else if (keyIsDown(ENTER)) {

            tela = 21
            tecla = true
            botao = 30
            fasea = 4
          }
        }
      }
      // botao de resposta2
      else if (botao == 20) {
        if (keyIsPressed === false) {
          tecla = false
        }
        if (tecla == false) {

          fill(0, 0, 0, 150)
          rect(x2, 200, largura2, altura2, 20);
          fill(255, 255, 255);
          text('6 X 7', 150, 230);

          if (keyIsDown(UP_ARROW)) {
            botao = 19
            tecla = true

          } else if (keyIsDown(DOWN_ARROW)) {
            botao = 21
            tecla = true

          } else if (keyIsDown(ENTER)) {

            tela = 21
            tecla = true
            fasea = 4
            botao = 30

          }
        }
      }
      // botao de resposta correta
      else if (botao == 21) {
        if (keyIsPressed === false) {
          tecla = false
        }
        if (tecla == false) {
          fill(0, 0, 0, 150)
          rect(x3, 245, largura2, altura3, 20);
          fill(255, 255, 255);
          text('7 X 7', 150, 275);
          if (keyIsDown(UP_ARROW)) {
            botao = 20
            tecla = true

          } else if (keyIsDown(DOWN_ARROW)) {
            botao = 19
            tecla = true

          } else if (keyIsDown(ENTER)) {

            tela = 22
            tecla = true
            fase = 5
            fasea = 4
            botao = 40
          }
        }
      }

      fill(240)
      rect(30, 30, 360, 80, 15)
      textSize(20)
      fill(cor)
      text(questaoquatro, 80, 40, 300)
    }
    //Botão de voltar
    textSize(14)
    noStroke()
    fill(cor)
    text("Voltar", 195, 370)
    if (mouseX > 180 && mouseX < 230 && mouseY > 350 && mouseY < 380) {
      stroke(200)
      fill(20)
      rect(190, 350, 50, 30, 15)
      noStroke()
      fill(240)
      text("Voltar", 195, 370)
      if (mouseIsPressed) {
        tela = 2
        controledomouse = true
        botao = 44

      }
    }
    if (keyIsDown(ESCAPE)) {

      tela = 2
      tecla = true
      botao = 44
    }
    textSize(10)
    fill(cor)
    text(esc, 278, 380, 300)
    textSize(14)

  }


  // iniciando a tela 9 depois do botao da questao 5
  else if (tela == 9) {
    if (mouseIsPressed == false && keyIsPressed == false) {
      tecla = false
      controledomouse = false
    }
    if (controledomouse == false && tecla == false) {
      imageMode(CORNER)
      background(plano)
      fill(240)
      rect(20, 30, 360, 100, 15)
      textSize(20)
      fill(cor)
      text(questaocinco, 80, 40, 300)
      noFill()
      stroke(cor)
      rect(50, 260, w + 10, p + 10);
      rect(190, 260, w + 10, p + 10);
      imageMode(CENTER)
      image(mult, multX, multY, w, p);
      image(mais, maisX, maisY, w, p);
      if ((mouseIsPressed) && dist(multX, multY, mouseX, mouseY) < p) {
        multX = mouseX;
        multY = mouseY;
      } else if ((mouseIsPressed) && dist(maisX, maisY, mouseX, mouseY) < p) {
        maisX = mouseX;
        maisY = mouseY;
      }


      //botao de responder
      noStroke()
      fill(0, 0, 0, 150)
      rect(20, y1 + 240, 120, altura1, 20);
      fill(255, 255, 255);
      text('responder', 30, 130 + 240)
      if ((mouseIsPressed) && (mouseX >= 20 && mouseX <= 20 + 120 && mouseY >= y1 + 240 && mouseY <= y1 + 240 + altura1)) {
        if ((multX >= 50 && multX <= 50 + 10 + w && multY >= 260 && multY <= 260 + p + 10) && (maisX >= 190 && maisX <= 190 + 10 + w && maisY >= 260 && maisY <= 260 + p + 10)) {
          botao = 40

          tela = 22
          controledomouse = true
          fasea = 5
          fase = 6

        } else if ((multX >= 190 && multX <= 190 + 10 + w && multY >= 260 && multY <= 260 + p + 10) && (maisX >= 50 && maisX <= 50 + 10 + w && maisY >= 260 && maisY <= 260 + p + 10)) {
          tela = 21
          botao = 30
          controledomouse = true
          fasea = 5
          fase = 6

        }
      }
      //movimentando com o teclado
      else if (botao == 92) {
        if (keyIsPressed === false) {
          tecla = false
        }
        if (tecla == false) {
          noStroke()
          fill(0, 0, 0, 150)
          rect(20, y1 + 240, 120, altura1, 20);
          fill(255, 255, 255);
          text('responder', 30, 130 + 240)
          if (keyIsDown(ENTER)) {
            if ((multX >= 50 && multX <= 50 + 10 + w && multY >= 260 && multY <= 260 + p + 10) && (maisX >= 190 && maisX <= 190 + 10 + w && maisY >= 260 && maisY <= 260 + p + 10)) {
              botao = 40

              tela = 22
              controledomouse = true
              fasea = 5
              fase = 6

            } else if ((multX >= 190 && multX <= 190 + 10 + w && multY >= 260 && multY <= 260 + p + 10) && (maisX >= 50 && maisX <= 50 + 10 + w && maisY >= 260 && maisY <= 260 + p + 10)) {
              tela = 21
              botao = 30
              controledomouse = true
              fasea = 5

            }

          }
        }
      }
      //Botão de voltar
      textSize(14)
      noStroke()
      fill(cor)
      text("Voltar", 195, 370)
      if (mouseX > 180 && mouseX < 230 && mouseY > 350 && mouseY < 380) {
        stroke(200)
        fill(20)
        rect(190, 350, 50, 30, 15)
        noStroke()
        fill(240)
        text("Voltar", 195, 370)
        if (mouseIsPressed) {
          tela = 2
          controledomouse = true
          botao = 55

        }
      }
      if (keyIsDown(ESCAPE)) {

        tela = 2
        tecla = true
        botao = 55
      }
      textSize(10)
      fill(cor)
      text(esc, 278, 380, 300)
      textSize(14)
    }
  }

  // iniciando a tela 10 depois do botao da questao 6
  else if (tela == 10) {
    if (mouseIsPressed == false && keyIsPressed == false) {
      tecla = false
      controledomouse = false
    }
    if (controledomouse == false && tecla == false) {
      imageMode(CORNER)
      background(plano)
      fill(0, 0, 0, 95)
      stroke(128, 128, 128)
      rect(x1, 155, largura2, altura1, 20);
      rect(x2, 200, largura2, altura2, 20);
      rect(x3, 245, largura2, altura3, 20);
      textSize(30);
      fill(255, 255, 255);
      text('31', 170, 185);
      text('24', 170, 230);
      text('32', 170, 275);
      //botão resposta
      if (mouseX >= x1 && mouseX <= x1 + largura2 && mouseY >= 155 && mouseY <= 155 + altura1) {
        botao = 22
        if (mouseIsPressed) {
          tela = 21
          controledomouse = true
          fasea = 6
          botao = 30
        }

      }
      //Botão resposta
      else if (mouseX >= x2 && mouseX <= x2 + largura2 && mouseY >= 200 && mouseY <= 200 + altura2) {
        botao = 23
        if (mouseIsPressed) {
          tela = 21
          controledomouse = true
          fasea = 6
          botao = 30

        }
      }
      //Botão resposta correta
      else if (mouseX >= x3 && mouseX <= x3 + largura2 && mouseY >= 245 && mouseY <= 245 + altura3) {
        botao = 24
        if (mouseIsPressed) {
          tela = 22
          controledomouse = true
          fasea = 6
          fase = 7
          botao = 40
        }
      }
      //movimentando com o teclado
      // botao de resposta1
      if (botao == 22) {
        if (keyIsPressed === false) {
          tecla = false
        }
        if (tecla == false) {

          fill(0, 0, 0, 150)
          rect(x1, 155, largura2, altura1, 20);
          fill(255, 255, 255);
          text('31', 170, 185);


          if (keyIsDown(UP_ARROW)) {
            botao = 24
            tecla = true

          } else if (keyIsDown(DOWN_ARROW)) {
            botao = 23
            tecla = true

          } else if (keyIsDown(ENTER)) {

            tela = 21
            tecla = true
            botao = 11
            fasea = 6
            botao = 30
          }
        }
      }
      // botao de resposta2
      else if (botao == 23) {
        if (keyIsPressed === false) {
          tecla = false
        }
        if (tecla == false) {

          fill(0, 0, 0, 150)
          rect(x2, 200, largura2, altura2, 20);
          fill(255, 255, 255);
          text('24', 170, 230);

          if (keyIsDown(UP_ARROW)) {
            botao = 22
            tecla = true

          } else if (keyIsDown(DOWN_ARROW)) {
            botao = 24
            tecla = true

          } else if (keyIsDown(ENTER)) {

            tela = 21
            tecla = true
            fasea = 6
            botao = 30

          }
        }
      }
      // botao de resposta correta
      else if (botao == 24) {
        if (keyIsPressed === false) {
          tecla = false
        }
        if (tecla == false) {
          fill(0, 0, 0, 150)
          rect(x3, 245, largura2, altura3, 20);
          fill(255, 255, 255);
          text('32', 170, 275);
          if (keyIsDown(UP_ARROW)) {
            botao = 23
            tecla = true

          } else if (keyIsDown(DOWN_ARROW)) {
            botao = 22
            tecla = true

          } else if (keyIsDown(ENTER)) {

            tela = 22
            tecla = true
            fase = 7
            fasea = 6
            botao = 40
          }
        }
      }

      fill(240)
      rect(20, 30, 360, 100, 15)
      textSize(20)
      fill(cor)
      text(questaoseis, 80, 40, 300)
    }
    //Botão de voltar
    textSize(14)
    noStroke()
    fill(cor)
    text("Voltar", 195, 370)
    if (mouseX > 180 && mouseX < 230 && mouseY > 350 && mouseY < 380) {
      stroke(200)
      fill(20)
      rect(190, 350, 50, 30, 15)
      noStroke()
      fill(240)
      text("Voltar", 195, 370)
      if (mouseIsPressed) {
        tela = 2
        controledomouse = true
        botao = 66

      }
    }
    if (keyIsDown(ESCAPE)) {

      tela = 2
      tecla = true
      botao = 66
    }
    textSize(10)
    fill(cor)
    text(esc, 278, 380, 300)
    textSize(14)

  }

  // iniciando a tela 11 depois do botao da questao 7
  else if (tela == 11) {
    if (mouseIsPressed == false && keyIsPressed == false) {
      tecla = false
      controledomouse = false
    }
    if (controledomouse == false && tecla == false) {
      imageMode(CORNER)
      background(plano)
      fill(0, 0, 0, 95)
      stroke(128, 128, 128)
      rect(x1, 155, largura2, altura1, 20);
      rect(x2, 200, largura2, altura2, 20);
      rect(x3, 245, largura2, altura3, 20);
      textSize(30);
      fill(255, 255, 255);
      text('45', 170, 185);
      text('72', 170, 230);
      text('36', 170, 275);
      //botão resposta
      if (mouseX >= x1 && mouseX <= x1 + largura2 && mouseY >= 155 && mouseY <= 155 + altura1) {
        botao = 25
        if (mouseIsPressed) {
          tela = 21
          controledomouse = true
          fasea = 7
          botao = 30
        }

      }
      //Botão resposta
      else if (mouseX >= x2 && mouseX <= x2 + largura2 && mouseY >= 200 && mouseY <= 200 + altura2) {
        botao = 26
        if (mouseIsPressed) {
          tela = 21
          controledomouse = true
          fasea = 7
          botao = 30

        }
      }
      //Botão resposta correta
      else if (mouseX >= x3 && mouseX <= x3 + largura2 && mouseY >= 245 && mouseY <= 245 + altura3) {
        botao = 27
        if (mouseIsPressed) {
          tela = 22
          controledomouse = true
          fasea = 7

          fase = 8
          botao = 40
        }
      }


      //movimentando com o teclado
      // botao de resposta1
      if (botao == 25) {
        if (keyIsPressed === false) {
          tecla = false
        }
        if (tecla == false) {

          fill(0, 0, 0, 150)
          rect(x1, 155, largura2, altura1, 20);
          fill(255, 255, 255);
          text('45', 170, 185);


          if (keyIsDown(UP_ARROW)) {
            botao = 27
            tecla = true

          } else if (keyIsDown(DOWN_ARROW)) {
            botao = 26
            tecla = true

          } else if (keyIsDown(ENTER)) {

            tela = 21
            tecla = true
            fasea = 7
            botao = 30

          }
        }
      }
      // botao de resposta2
      else if (botao == 26) {
        if (keyIsPressed === false) {
          tecla = false
        }
        if (tecla == false) {

          fill(0, 0, 0, 150)
          rect(x2, 200, largura2, altura2, 20);
          fill(255, 255, 255);
          text('72', 170, 230);

          if (keyIsDown(UP_ARROW)) {
            botao = 25
            tecla = true

          } else if (keyIsDown(DOWN_ARROW)) {
            botao = 27
            tecla = true

          } else if (keyIsDown(ENTER)) {

            tela = 21
            tecla = true
            fasea = 7
            botao = 30


          }
        }
      }
      // botao de resposta correta
      else if (botao == 27) {
        if (keyIsPressed === false) {
          tecla = false
        }
        if (tecla == false) {
          fill(0, 0, 0, 150)
          rect(x3, 245, largura2, altura3, 20);
          fill(255, 255, 255);
          text('36', 170, 275);
          if (keyIsDown(UP_ARROW)) {
            botao = 26
            tecla = true

          } else if (keyIsDown(DOWN_ARROW)) {
            botao = 25
            tecla = true

          } else if (keyIsDown(ENTER)) {

            tela = 22
            tecla = true
            fase = 8
            fasea = 7
            botao = 40
          }
        }
      }
      fill(240)
      rect(20, 30, 360, 100, 15)
      textSize(20)
      fill(cor)
      text(questaosete, 80, 40, 300)
    }
    //Botão de voltar
    textSize(14)
    noStroke()
    fill(cor)
    text("Voltar", 195, 370)
    if (mouseX > 180 && mouseX < 230 && mouseY > 350 && mouseY < 380) {
      stroke(200)
      fill(20)
      rect(190, 350, 50, 30, 15)
      noStroke()
      fill(240)
      text("Voltar", 195, 370)
      if (mouseIsPressed) {
        tela = 2
        controledomouse = true
        botao = 77

      }
    }
    if (keyIsDown(ESCAPE)) {

      tela = 2
      tecla = true
      botao = 77
    }
    textSize(10)
    fill(cor)
    text(esc, 278, 380, 300)
    textSize(14)

  }
  // iniciando a tela 12 depois do botao da questao 8
  else if (tela == 12) {
    if (mouseIsPressed == false && keyIsPressed == false) {
      tecla = false
      controledomouse = false
    }
    if (controledomouse == false && tecla == false) {
      imageMode(CORNER)
      background(plano)
      fill(240)
      rect(20, 30, 360, 100, 15)
      textSize(20)
      fill(cor)
      text(questaooito, 80, 40, 300)
      noFill()
      stroke(cor)
      rect(140, 260, w + 10, p + 10)
      imageMode(CENTER)
      image(gucci[0], gucci1X, gucci1Y, w, p);
      image(gucci[1], gucci2X, gucci2Y, w, p);
      image(gucci[2], gucci3X, gucci3Y, w - 60, p);
      if ((mouseIsPressed) && dist(gucci1X, gucci1Y, mouseX, mouseY) < p) {
        gucci1X = mouseX;
        gucci1Y = mouseY;
      } else if ((mouseIsPressed) && dist(gucci2X, gucci2Y, mouseX, mouseY) < p) {
        gucci2X = mouseX;
        gucci2Y = mouseY;
      } else if ((mouseIsPressed) && dist(gucci3X, gucci3Y, mouseX, mouseY) < p) {
        gucci3X = mouseX;
        gucci3Y = mouseY;
      }
      //botao de responder
      noStroke()
      fill(0, 0, 0, 150)
      rect(20, y1 + 240, 120, altura1, 20);
      fill(255, 255, 255);
      text('responder', 30, 130 + 240)
      if ((mouseIsPressed) && (mouseX >= 20 && mouseX <= 20 + 120 && mouseY >= y1 + 240 && mouseY <= y1 + 240 + altura1)) {
        if (gucci1X >= 140 && gucci1X <= 140 + 10 + w && gucci1Y >= 260 && gucci1Y <= 260 + p + 10) {
          botao = 40

          tela = 22
          controledomouse = true
          fasea = 8
          fase = 9

        } else if ((gucci2X >= 140 && gucci2X <= 140 + 10 + w && gucci2Y >= 260 && gucci2Y <= 260 + p + 10) || (gucci3X >= 140 && gucci3X <= 140 + 10 + w && gucci3Y >= 260 && gucci3Y <= 260 + p + 10)) {
          tela = 21
          botao = 30
          controledomouse = true
          fasea = 8

        }
      }
      //movimentando com o teclado
      else if (botao == 91) {
        if (keyIsPressed === false) {
          tecla = false
        }
        if (tecla == false) {
          noStroke()
          fill(0, 0, 0, 150)
          rect(20, y1 + 240, 120, altura1, 20);
          fill(255, 255, 255);
          text('responder', 30, 130 + 240)
          if (keyIsDown(ENTER)) {
            if (gucci1X >= 140 && gucci1X <= 140 + 10 + w && gucci1Y >= 260 && gucci1Y <= 260 + p + 10) {
              botao = 40

              tela = 22
              controledomouse = true
              fasea = 9
              fase = 10

            } else if ((gucci2X >= 140 && gucci2X <= 140 + 10 + w && gucci2Y >= 260 && gucci2Y <= 260 + p + 10) || (gucci3X >= 140 && gucci3X <= 140 + 10 + w && gucci3Y >= 260 && gucci3Y <= 260 + p + 10)) {
              tela = 21
              botao = 30
              controledomouse = true
              fasea = 8

            }

          }
        }
      }
      //Botão de voltar
      textSize(14)
      noStroke()
      fill(cor)
      text("Voltar", 195, 370)
      if (mouseX > 180 && mouseX < 230 && mouseY > 350 && mouseY < 380) {
        stroke(200)
        fill(20)
        rect(190, 350, 50, 30, 15)
        noStroke()
        fill(240)
        text("Voltar", 195, 370)
        if (mouseIsPressed) {
          tela = 2
          controledomouse = true
          botao = 88

        }
      }
      if (keyIsDown(ESCAPE)) {

        tela = 2
        tecla = true
        botao = 88
      }

      textSize(10)
      fill(cor)
      text(esc, 278, 380, 300)
      textSize(14)
    }
  }

  // iniciando a tela 13 depois do botao da questao 9
  else if (tela == 13) {
    if (mouseIsPressed == false && keyIsPressed == false) {
      tecla = false
      controledomouse = false
    }
    if (controledomouse == false && tecla == false) {
      imageMode(CORNER)
      background(plano)
      fill(240)
      rect(20, 30, 360, 100, 15)
      textSize(20)
      fill(cor)
      text(questaonove, 80, 40, 300)
      noFill()
      stroke(cor)
      rect(140, 260, w + 10, p + 10)
      imageMode(CENTER)
      image(gucci[3], gucci4X, gucci4Y, w - 40, p);
      image(gucci[4], gucci5X, gucci5Y, w - 40, p);
      image(gucci[5], gucci6X, gucci6Y, w, p);
      if ((mouseIsPressed) && dist(gucci4X, gucci4Y, mouseX, mouseY) < p) {
        gucci4X = mouseX;
        gucci4Y = mouseY;
      } else if ((mouseIsPressed) && dist(gucci5X, gucci5Y, mouseX, mouseY) < p) {
        gucci5X = mouseX;
        gucci5Y = mouseY;
      } else if ((mouseIsPressed) && dist(gucci6X, gucci6Y, mouseX, mouseY) < p) {
        gucci6X = mouseX;
        gucci6Y = mouseY;
      }
      if (keyIsDown(UP_ARROW)) {
        multY -= 5;
        tecla = true

      } else if (keyIsDown(DOWN_ARROW)) {
        multY += 5;
        tecla = true

      } else if (keyIsDown(LEFT_ARROW)) {
        multX -= 5;
        tecla = true

      } else if (keyIsDown(RIGHT_ARROW)) {
        multX += 5;
        tecla = true
      }
      //botao de responder
      noStroke()
      fill(0, 0, 0, 150)
      rect(20, y1 + 240, 120, altura1, 20);
      fill(255, 255, 255);
      text('responder', 30, 130 + 240)
      if ((mouseIsPressed) && (mouseX >= 20 && mouseX <= 20 + 120 && mouseY >= y1 + 240 && mouseY <= y1 + 240 + altura1)) {
        if (gucci4X >= 140 && gucci4X <= 140 + 10 + w && gucci4Y >= 260 && gucci4Y <= 260 + p + 10) {
          botao = 40

          tela = 22
          controledomouse = true
          fasea = 9
          fase = 9

        } else if ((gucci5X >= 140 && gucci5X <= 140 + 10 + w && gucci5Y >= 260 && gucci5Y <= 260 + p + 10) || (gucci6X >= 140 && gucci6X <= 140 + 10 + w && gucci6Y >= 260 && gucci6Y <= 260 + p + 10)) {
          tela = 21
          botao = 30
          controledomouse = true
          fasea = 9

        }
      }
      //movimentando com o teclado
      else if (botao == 90) {
        if (keyIsPressed === false) {
          tecla = false
        }
        if (tecla == false) {
          noStroke()
          fill(0, 0, 0, 150)
          rect(20, y1 + 240, 120, altura1, 20);
          fill(255, 255, 255);
          text('responder', 30, 130 + 240)
          if (keyIsDown(ENTER)) {

            if (gucci4X >= 140 && gucci4X <= 140 + 10 + w && gucci4Y >= 260 && gucci4Y <= 260 + p + 10) {
              botao = 40

              tela = 22
              controledomouse = true
              fasea = 9
              fase = 10

            } else if ((gucci5X >= 140 && gucci5X <= 140 + 10 + w && gucci5Y >= 260 && gucci5Y <= 260 + p + 10) || (gucci6X >= 140 && gucci6X <= 140 + 10 + w && gucci6Y >= 260 && gucci6Y <= 260 + p + 10)) {
              tela = 21
              botao = 30
              controledomouse = true
              fasea = 9

            }
          }

        }
      }
      // botao de responder
      if (botao == 80) {
        if (keyIsPressed === false) {
          tecla = false
        }
        if (tecla == false) {

          fill(0, 0, 0, 150)
          rect(20, y1 + 240, 120, altura1, 20);
          fill(255, 255, 255);
          text('responder', 30, 130 + 240);
          if (keyIsDown(ENTER)) {


            if (gucci4X >= 140 && gucci4X <= 140 + 10 + w && gucci4Y >= 260 && gucci4Y <= 260 + p + 10) {
              botao = 40

              tela = 22
              controledomouse = true
              fasea = 9
              fase = 10

            } else if ((gucci5X >= 140 && gucci5X <= 140 + 10 + w && gucci5Y >= 260 && gucci5Y <= 260 + p + 10) || (gucci6X >= 140 && gucci6X <= 140 + 10 + w && gucci6Y >= 260 && gucci6Y <= 260 + p + 10)) {
              tela = 21
              botao = 30
              controledomouse = true
              fasea = 9

            }

          }
        }
      }
      //Botão de voltar
      textSize(14)
      noStroke()
      fill(cor)
      text("Voltar", 195, 370)
      if (mouseX > 180 && mouseX < 230 && mouseY > 350 && mouseY < 380) {
        stroke(200)
        fill(20)
        rect(190, 350, 50, 30, 15)
        noStroke()
        fill(240)
        text("Voltar", 195, 370)
        if (mouseIsPressed) {
          tela = 2
          controledomouse = true
          botao = 99

        }
      }
      if (keyIsDown(ESCAPE)) {

        tela = 2
        tecla = true
        botao = 99
      }
      textSize(10)
      fill(cor)
      text(esc, 278, 380, 300)
      textSize(14)
    }
  }
  // iniciando a tela carregando boneco
  else if (tela == 20) {
    if (mouseIsPressed == false && keyIsPressed == false) {
      tecla = false
      controledomouse = false
    }
    if (controledomouse == false && tecla == false) {
      imageMode(CORNER)
      background(plano)
      textSize(30)
      fill(20)
      text('Carregando...', 135, 150, 100);
      fill(255)
      rect(x, y, l, h, b)
      if (l2 <= l) {
        l2++
      }
      fill(40)
      rect(x, y, l2, h, b)

      tempo++
      if (xb <= l) {
        image(boneco[contador % 6], xb++, 180, 90, 115)
        if (tempo > 5) {
          contador++
          tempo = 0
        }
      }

      if (xb > l) {
        tela = 2
      }
    }

  }
  // iniciando a tela 21 de perdeu
  else if (tela == 21) {
    if (mouseIsPressed == false && keyIsPressed == false) {
      tecla = false
      controledomouse = false
    }
    if (controledomouse == false && tecla == false) {
      imageMode(CORNER)
      background(plano)
      //botao de voltar esc
      textSize(10)
      text(esc, 278, 380, 300)
      //botao de tentar novamente
      fill(0, 0, 0, 95)
      stroke(128, 128, 128)
      rect(x1, 260, 180, altura1, 20);
      textSize(20);
      fill(255, 255, 255);
      text('tentar novamente', 126, 285);

      //movimentando com o teclado
      // botao de tentar de novo
      if (botao == 30) {
        if (keyIsPressed === false) {
          tecla = false
        }
        if (tecla == false) {

          fill(0, 0, 0, 150)
          rect(x1, 260, 180, altura1, 20);
          fill(255, 255, 255);
          text('tentar novamente', 126, 290 - 5);
          if (keyIsDown(ESCAPE)) {
            tela = 2
            tecla = true
            botao = 11

          }

          if (keyIsDown(ENTER)) {
            if (fasea == 1) {
              tela = 5
              tecla = true
              botao = 11
            } else if (fasea == 2) {
              tela = 6
              tecla = true
              botao = 14
            } else if (fasea == 3) {
              tela = 7
              tecla = true
              botao = 17
            } else if (fasea == 4) {
              tela = 8
              tecla = true
              botao = 20
            } else if (fasea == 5) {
              tela = 9
              tecla = true
              botao = 92
            } else if (fasea == 5 + 1) {
              tela = 10
              tecla = true
              botao = 23
            } else if (fasea == 5 + 2) {
              tela = 11
              tecla = true
              botao = 26
            } else if (fasea == 5 + 3) {
              tela = 12
              tecla = true
              botao = 91
            } else if (fasea == 5 + 4) {
              tela = 12 + 1
              tecla = true
              botao = 90
            }
          }
        }
      }

      fill(cor)
      textSize(50);
      text('P', 80, 70);
      fill(255, 255, 255);
      text('e', 115, 70);
      fill(0, 0, 0);
      text('r', 145, 70);
      fill(255, 255, 255);
      text('d', 170, 70);
      fill(0, 0, 0);
      text('e', 195, 70);
      fill(255, 255, 255);
      text('u ', 225, 70);
      fill(255, 255, 255);
      text('!', 265, 70);
      fill(255, 255, 255);
      text('!', 275, 70);
      //detectando a area do botao continuar
      if (mouseX >= x1 && mouseX <= x1 + 180 && mouseY >= 260 && mouseY <= 260 + altura1) {
        botao = 30
        if (mouseIsPressed) {
          if (fasea == 1) {
            tela = 5
            controledomouse = true
          } else if (fasea == 2) {
            tela = 6
            controledomouse = true
          } else if (fasea == 3) {
            tela = 7
            controledomouse = true
          } else if (fasea == 4) {
            tela = 8
            controledomouse = true
          } else if (fasea == 5) {
            tela = 9
            controledomouse = true
          } else if (fasea == 5 + 1) {
            tela = 10
            controledomouse = true
          } else if (fasea == 5 + 2) {
            tela = 11
            controledomouse = true
          } else if (fasea == 5 + 3) {
            tela = 12
            controledomouse = true
          } else if (fasea == 5 + 4) {
            tela = 12 + 1
            controledomouse = true
          }

        }

      }
    }
  }
  // iniciando a tela 22 de parabens
  else if (tela == 22) {
    if (mouseIsPressed == false && keyIsPressed == false) {
      tecla = false
      controledomouse = false
    }
    if (controledomouse == false && tecla == false) {
      imageMode(CORNER)
      background(plano)
      //botao de voltar esc
      textSize(10)
      text(esc, 278, 380, 300)
      //botao de continuar 
      fill(0, 0, 0, 95)
      stroke(128, 128, 128)
      rect(x1, 170, 130, altura1, 20);
      textSize(20);
      fill(255, 255, 255);
      text('continuar', 130, 195);
      fill(cor)
      textSize(50);
      text('P', 70, 70);
      fill(0, 0, 255);
      text('a', 105, 70);
      fill(255, 0, 0);
      text('r', 135, 70);
      fill(255, 255, 0);
      text('a', 155, 70);
      fill(0, 0, 255);
      text('b', 185, 70);
      fill(0, 0, 0);
      text('é', 215, 70);
      fill(0, 255, 0);
      text('n', 245, 70);
      fill(255, 0, 255);
      text('s', 275, 70);
      fill(255, 255, 255);
      text('!', 320, 70);
      fill(255, 255, 255);
      text('!', 350, 70);
      //detectando a area do botao continuar
      if (mouseX >= x1 && mouseX <= x1 + 130 && mouseY >= 170 && mouseY <= 170 + altura1) {
        botao = 40
        if (mouseIsPressed) {
          if (fase == 1) {
            tela = 5
            controledomouse = true
          } else if (fase == 2) {
            tela = 6
            controledomouse = true
          } else if (fase == 3) {
            tela = 7
            controledomouse = true
          } else if (fase == 4) {
            tela = 8
            controledomouse = true
          } else if (fase == 5) {
            tela = 9
            controledomouse = true
          } else if (fase == 5 + 1) {
            tela = 10
            controledomouse = true
          } else if (fase == 5 + 2) {
            tela = 11
            controledomouse = true
          } else if (fase == 5 + 3) {
            tela = 12
            controledomouse = true
          } else if (fase == 5 + 4) {
            tela = 12 - 10
            controledomouse = true
          }

        }


      }
      //Botão de voltar
      textSize(14)
      noStroke()
      fill(cor)
      text("Voltar", 195, 370)

      if (mouseX > 180 && mouseX < 230 && mouseY > 350 && mouseY < 380) {
        stroke(200)
        fill(20)
        rect(190, 350, 50, 30, 15)
        noStroke()
        fill(240)
        text("Voltar", 195, 370)

        if (mouseIsPressed) {
          if (fasea == 1) {
            tela = 5
            controledomouse = true
            botao = 11
          } else if (fasea == 2) {
            tela = 6
            controledomouse = true
            botao = 14
          } else if (fasea == 3) {
            tela = 7
            controledomouse = true
            botao = 17
          } else if (fasea == 4) {
            tela = 8
            controledomouse = true
            botao = 20
          } else if (fasea == 5) {
            tela = 9
            controledomouse = true
            botao = 92
          } else if (fasea == 5 + 1) {
            tela = 10
            controledomouse = true
            botao = 23
          } else if (fasea == 5 + 2) {
            tela = 11
            controledomouse = true
            botao = 26
          } else if (fasea == 5 + 3) {
            tela = 12
            controledomouse = true
            botao = 91
          } else if (fasea == 5 + 4) {
            tela = 12 + 1
            controledomouse = true
            botao = 90
          }

        }
      }
      if (botao == 40) {
        if (keyIsPressed === false) {
          tecla = false
        }
        if (tecla == false) {

          fill(0, 0, 0, 150)
          rect(x1, 170, 130, altura1, 20);
          textSize(20);
          fill(255, 255, 255);
          text('continuar', 130, 195);
          if (keyIsDown(ESCAPE)) {
            if (fasea == 1) {
              tela = 5
              tecla = true
              botao = 11
            } else if (fasea == 2) {
              tela = 6
              tecla = true
              botao = 14
            } else if (fasea == 3) {
              tela = 7
              tecla = true
              botao = 17
            } else if (fasea == 4) {
              tela = 8
              tecla = true
              botao = 20
            } else if (fasea == 5) {
              tela = 9
              tecla = true
              botao = 92
            } else if (fasea == 5 + 1) {
              tela = 10
              tecla = true
              botao = 23
            } else if (fasea == 5 + 2) {
              tela = 11
              tecla = true
              botao = 26
            } else if (fasea == 5 + 3) {
              tela = 12
              tecla = true
              botao = 91
            } else if (fasea == 5 + 4) {
              tela = 12 + 1
              tecla = true
              botao = 90
            }


          }
          if (keyIsDown(ENTER)) {

            if (fase == 1) {
              tela = 5
              tecla = true
              botao = 11
            } else if (fase == 2) {
              tela = 6
              tecla = true
              botao = 14
            } else if (fase == 3) {
              tela = 7
              tecla = true
              botao = 17
            } else if (fase == 4) {
              tela = 8
              tecla = true
              botao = 20
            } else if (fase == 5) {
              tela = 9
              tecla = true
            } else if (fase == 5 + 1) {
              tela = 10
              tecla = true
              botao = 23
            } else if (fase == 5 + 2) {
              tela = 11
              tecla = true
              botao = 26
            } else if (fase == 5 + 3) {
              tela = 12
              tecla = true
            } else if (fase == 5 + 4) {
              tela = 12 + 1
              tecla = true
            }
          }
        }
      }
    }
  }
}