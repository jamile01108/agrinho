function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
// Array para armazenar as informações de cada árvore (posição X, Y)
let arvores = [];

function setup() {
  createCanvas(800, 500); // Cria um canvas de 800 por 500 pixels
  background(135, 206, 235); // Define um fundo azul claro (céu)
  noStroke(); // Remove o contorno dos desenhos
}

function draw() {
  background(135, 206, 235); // Desenha o céu a cada frame para "limpar"
  
  // Desenha o chão verde
  fill(100, 180, 70); // Cor verde para o chão
  rect(0, height * 0.7, width, height * 0.3); // Chão ocupa os 30% inferiores da tela

  // Itera sobre o array 'arvores' e desenha cada uma
  for (let i = 0; i < arvores.length; i++) {
    // Pega a posição X e Y da árvore atual do array
    let x = arvores[i].x;
    let y = arvores[i].y;
    
    desenhaArvore(x, y); // Chama a função para desenhar a árvore na posição X, Y
  }

  // Instrução para o usuário
  fill(0);
  textSize(16);
  text("Clique para plantar uma árvore!", 10, 20);
}

// Função para desenhar uma árvore em uma dada posição
function desenhaArvore(x, y) {
  // Tronco (retângulo marrom)
  fill(139, 69, 19); // Cor marrom
  rect(x - 10, y, 20, 50); // Posição (x, y), largura, altura

  // Folhas (círculo verde)
  fill(34, 139, 34); // Cor verde floresta
  ellipse(x, y, 60, 60); // Posição central (x, y), largura, altura
}

// Função que é chamada toda vez que o mouse é clicado
function mousePressed() {
  // Adiciona a posição atual do mouse (mouseX, mouseY) ao array de árvores
  // A posição Y é ajustada para que a base da árvore fique no chão ou um pouco acima
  // Garantimos que a árvore não seja desenhada abaixo do chão
  if (mouseY > height * 0.4) { // Impede árvores muito altas no céu
    arvores.push({ x: mouseX, y: mouseY }); 
  }
}