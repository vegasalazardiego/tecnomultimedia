class BotonJuego {
  constructor(x, y, ancho, alto, etiqueta, accion) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.etiqueta = etiqueta;
    this.accion = accion;
  }

  mostrar(){ //MODIFICACION DE TAMANIO: SE MULTIPLICA POR UNA COSNTANTE 0.5 Y SE CAMBIA EL TAMANIO FUENTE
    fill(200);
    rect(this.x, this.y, this.ancho, this.alto);
    fill(0);
    textSize(12);
    text(this.etiqueta, 250 * 0.5 + this.ancho / 2 * 0.5, this.y + this.alto / 2);
  }

  verificarClic(){
    if (
      mouseX > this.x &&
      mouseX < this.x + this.ancho &&
      mouseY > this.y &&
      mouseY < this.y + this.alto &&
      mouseIsPressed
    ) {
      this.accion();
    }
  }
}
