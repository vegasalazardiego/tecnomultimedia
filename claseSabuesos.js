class Sabueso {
  constructor(x, y, w, h, img) {
    this.sbx = x;
    this.sby = y;
    this.sbw = w;
    this.sbh = h;
    this.img = img;
    this.impacto = false;
    this.velocidad = random(3, 7); // Velocidad aleatoria
  }

  dibujarSabuesos() {
    if (!this.impacto) {
      image(this.img, this.sbx, this.sby, this.sbw, this.sbh);
    }
  }

  moverSabuesos() {
    if (!this.impacto) {
      this.sbx -= this.velocidad; // Cambia la dirección a -
    }
  }

  reiniciar() {
    this.sbx = 600;
    this.sby = random(100, 450);
    this.velocidad = random(3, 7);
    this.impacto = false;
  }

  fueraDePantalla() {
    return this.sbx + this.sbw < 0;
  }
}
