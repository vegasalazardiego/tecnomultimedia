class BotonJuego {
  constructor(x, y, ancho, alto, etiqueta, accion) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.etiqueta = etiqueta;
    this.accion = accion;
  }

  mostrar() {
    fill(200);
    rect(this.x, this.y, this.ancho, this.alto);
    fill(0);
    textSize(16);
    text(this.etiqueta, 250 + this.ancho / 2, this.y + this.alto / 2);
  }

  verificarClic() {
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
