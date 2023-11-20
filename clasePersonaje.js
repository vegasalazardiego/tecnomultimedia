class Protagonista {
  constructor(px, py, pw, ph) {
    this.px = px;
    this.py = py;
    this.pw = pw;
    this.ph = ph;
  }

  dibujarPersonaje(personaje) { //AHORA LA IMAGEN ES PASADO POR PARAMETRO.
    fill(0, 0, 255);
    image(personaje, this.px, this.py, this.pw, this.ph);
  }

  moverPersonaje() {
    if (keyIsPressed === true) {
      if (keyCode === DOWN_ARROW && this.py <= 420) {
        this.py += 7;
      }
    }
    if (keyIsPressed === true) {
      if (keyCode === UP_ARROW && this.py >= 10) {
        this.py -= 7;
      }
    }
  }
}
