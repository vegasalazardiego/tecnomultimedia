class Escenario{
  constructor(){
    this.posX = 0;
    this.posY = 0;
    this.ancho = width;
    this.alto = height;
    this.fondos = []; 
    for (let i = 0; i< 4; i++){  //**Preguntar Sobre el uso de sonido en p5*js usando POO
      this.fondos[i] = loadImage("data/background" + i + ".png");
    }
  }
  dibujarInstrucciones(){
    image(this.fondos[0], this.posX, this.posY, this.ancho, this.alto);
  }
  dibujarPantallaJuego(){
    image(this.fondos[1], this.posX, this.posY, this.ancho, this.alto);
  }
  dibujarPantallaGameOver(){
    image(this.fondos[2], this.posX, this.posY, this.ancho, this.alto);
  }
  dibujarPantallaGanaste(){
    image(this.fondos[3], this.posX, this.posY, this.ancho, this.alto);
  }
  
}
