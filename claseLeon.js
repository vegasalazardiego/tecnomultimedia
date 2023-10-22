class Leon{
  constructor(posY, direccion, velocidad){
    this.posX = width * direccion; //El leon se ubica en el lado contrario a si direccion.  DERECHA = 0; IZQUIERDA = 1
    this.posX_inicial = this.posX;
    this.posY = posY;
    this.posY_inicial = this.posY;
    this.ancho = height/14 * 1.2;
    this.alto = height/14;
    this.direccion = direccion;
    this.velocidad = velocidad;
    this.sprites = [];
    this.sprite_actual = 0;
    for (let i = 0; i<6; i++){
      this.sprites[i] = loadImage("data/leon-hacia-derecha" + i + ".png");
    }       
  }
  mover(){
    this.sprite_actual++;
    if (this.sprite_actual === 6){
      this.sprite_actual = 0;
    }
    if (this.direccion === 0){      
      this.posX = this.posX + this.velocidad;
      if (this.posX  >= width + this.ancho){
        this.posX = 0 - this.ancho;
      }
    }else{
      this.posX = this.posX - this.velocidad;
      if (this.posX <= 0 - this.ancho){
        this.posX = width + this.ancho;
      }       
    }
    
  }
  reiniciar(){    
    this.posY = this.posY_inicial;    
    this.posX = this.posX_inicial;    
    this.sprite_actual = 0;
  }
  dibujar(){   
    if (this.direccion === 0){
      image(this.sprites[this.sprite_actual], this.posX, this.posY, this.ancho, this.alto);
    }else{
      push();
      scale(-1, 1); //recordar correrir el desfazaje de posX cuanso se analicen las colisiones
      image(this.sprites[this.sprite_actual], this.posX * (-1), this.posY, this.ancho, this.alto);
      pop();
    }    
    this.mover();
  }
}
