class Hiena{
  constructor(posY, cantidad_hienas_en_linea, numero_hiena){
    this.posX = width / (cantidad_hienas_en_linea * 2) * (2 * numero_hiena + 1);
    this.posX_inicial = this.posX;
    this.posY = posY;
    this.posY_inicial = this.posY;
    this.ancho = height/14 * 1.2;
    this.alto = height/14;
    this.sprites = [];
    this.sprite_actual = 0;
    for (let i = 0; i< 9; i++){
      this.sprites[i] = loadImage("data/hyna-girando" + i + ".png");
    }
  }
  mover(){ //dado que la hienas giran sobre su posicion no hace falta modificar su posicion en X
    this.sprite_actual++;
    if (this.sprite_actual === 9){
      this.sprite_actual = 0;
    }    
  }
  reiniciar(){
    this.posX = this.posX_inicial; 
    this.posY = this.posY_inicial;
    this.sprite_actual = 0;
  }
  dibujar(){    
    image(this.sprites[this.sprite_actual], this.posX, this.posY, this.ancho, this.alto);
    //line(this.posX, 0, this.posX, height);
    this.mover();
  }
}
