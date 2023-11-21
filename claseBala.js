class Bala {
  constructor(x, y, w, h, img) {
    this.bx = x;
    this.by = y;
    this.bw = w;
    this.bh = h;
    this.img = img;
    this.impacto = false;
    this.velocidad = random(2, 5); // Velocidad aleatoria
  }

  dibujarBala() {
    if (!this.impacto) {
      image(this.img, this.bx, this.by, this.bw, this.bh);
    }
  }

  moverBala() {
    if (!this.impacto) {
      this.bx -= this.velocidad; // Cambia la dirección a -
    }
  }

  reiniciar() {
    this.bx = 600;
    this.by = random(10, 450);
    this.velocidad = random(2, 5);
    this.impacto = false;
  }

  fueraDePantalla() {
    return this.bx + this.bw < 100;
  }
}
