class Personaje{
  constructor(){
    this.posX = width/8 + (width/8) * 2;
    this.posY = height - (height/14) * 1;
    this.ancho = height/14 * 1.2;
    this.alto = height/14;    
    this.sprites = [];
    this.sprite_actual = 3;//la tecla determina la direccion en la que va pero la posicion inicial debe ser mirando hacia abajo IZQ = 1; DER = 0; ARRIBA = 2; ABAJO = 3
    for(let i = 0; i<4; i++){
        this.sprites[i] = loadImage("data/hombre" + i + ".png");    
    }
    this.vida = true;
  }
  enZonaPermitida(posX, posY){
    if (posX >= 0 - (width/8/2) && posX + (width/8) <= width + (width/8/2) && posY + this.alto <= height && posY >= height - (height/14) * 10){ // (width/8/2) un margen de tolerancia, que es la mitad del avance del personaje.
      return true;
    }else{
      return false;
    }
  }
  moverArriba(){
    if (this.enZonaPermitida(this.posX, this.posY - this.alto)){ //Se analiza si la proxima posicion está dentro de una zona permitida
      this.sprite_actual = 2;
      this.posY = this.posY - this.alto;
    }        
  }
  moverAbajo(){
    if (this.enZonaPermitida(this.posX, this.posY + this.alto)){
      this.sprite_actual = 3;
      this.posY = this.posY + this.alto;
    }        
  }
  moverIzquierda(){
    if (this.enZonaPermitida(this.posX - this.ancho, this.posY)){
      this.sprite_actual = 1;
      this.posX = this.posX - this.ancho;
    }                
  }
  moverDerecha(){    
    if (this.enZonaPermitida(this.posX + this.ancho, this.posY)){
      this.sprite_actual = 0;
      this.posX = this.posX + this.ancho;
    } 
  }
  matarPersonaje(){
    this.vida = false;
  }
  reiniciar(){
    this.posX = width/8 + (width/8) * 2;
    this.posY = height - (height/14) * 1;
    this.ancho = height/14 * 1.2;
    this.alto = height/14;
    this.sprite_actual = 3;
    this.vida = true;
  }
  dibujar(){
    if (this.vida){
      image(this.sprites[this.sprite_actual], this.posX, this.posY, this.ancho, this.alto);
    }
  }
  
}
