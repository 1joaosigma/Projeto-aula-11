
//PASSO 1 CRIAR AS VARIÁVEIS

var sea, seaimagem;

function preload() {
    //carregar a imagem do solo
    seaImagem = loadImage("sea.png");
    //carregar a animação do t-rex

}

function setup() {
    createCanvas(800, 600);

    seaSprite = createSprite (300, 300);
    seaSprite.scale = 0.5;
    seaSprite.addImage(seaImagem);

    //adicionar a imagem na sprite solo

    //dar velocidade ao solo
    seaSprite.velocityX = -7;



    //criar a sprite trex;

    //adicionar a animação na sprite do t-rex

    //definir o tamanho da animação


}

function draw() {
    background("blue");
    if (seaSprite.x < 100) {
        seaSprite.x = seaSprite.width / 2;
    }
    //reiniciar a posição do solo automaticamente


    //fazer o trex pular se apertar espaço


    //dar gravidade ao trex


    //impedir o trex de cair no abismo


    drawSprites();

}
