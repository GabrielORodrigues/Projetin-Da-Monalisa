var imagemM;
let olhoX;
let olhoY;

function preload(){
    imagemM= loadImage('Monalisa.png');
}


function setup() {
  createCanvas(400, 400);
}

function draw() {
//Fundo
  background('#623012');
  background(imagemM, 500);
//Cabeça
  fill('#dba762');
  circle(200, 200, 300);
//Olhos
  fill('white');
  circle(150, 150, 60); //Olho Esquerdo
  circle(250, 150, 60); //Olho Direito
//Boca
  line(136, 270, 255, 249);
//Nariz
  fill('#b37d50');
  triangle(201, 171, 170, 229, 225 ,225);
//Sombrancelha
  line(112, 110, 176, 122); //Sombrancelha Esquerda
  line(285, 84, 211, 100); //Sombrancelha Direita
//Pupilas
  fill('black');
  //circle(150, 150, 10); //Pupila Esquerda
  //circle(250, 150, 10); //Pupila Direita
  
  olhoX = map(mouseX, 0, 400, 132, 152);
  olhoY = map(mouseY, 0, 400, 131, 163);
  
  circle(olhoX, olhoY, 10); //Nova Pupila Esquerda
  circle(olhoX + 100, olhoY, 10); //Nova Pupila Direita
  
//Localizador De "X" e "Y"
  if(mouseIsPressed){
     console.log(mouseX, mouseY);
     }
}

