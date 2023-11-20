class Juego {
  constructor() {
    this.fw = 600;
    this.fh = 450;
    this.sy = 100;
    this.sx = 100;
    this.vidas = 5;
    this.balacera = [];
    this.enemigos = [];
    this.protagonista = new Protagonista(20, height / 2, 30, 30);
    this.juegoTerminado = false;
    this.tiempo = 0;
    this.juegoIniciado = false;
    this.mostrarInstrucciones = false;
    
    /***
      MODIFICACION PARA REEMPLAZAR EL USO DE PRELOAD      
    ***/
    this.fondo = loadImage("data/fondo.jpg");
    this.balitas = loadImage("data/bala.png");
    this.sabuesos = loadImage("data/sabuesomecanico.jpg");
    this.personaje = loadImage("data/personaje.jpg");
    

    for (let i = 0; i < 7; i++) {
      this.balacera.push(new Bala(random(600, 800), random(10, 450), 100, 30, this.balitas)); //variable global balitas ahora es una propiedad del objeto Juego
      this.enemigos.push(new Sabueso(random(600, 800), random(10, 450), 40, 40, this.sabuesos)); //variable global sabuesos ahora es una propiedad del objeto Juego
    }

    this.inicializarBotonReinicio();
  }

  inicializarBotonReinicio() {
    this.botonReinicio = new BotonJuego( // CAMBIO EL NOMBRE DE LA CLASE POR LLAMARSE IGUAL QUE LA CLASE BOTON QUE USA LIBRO
      280,
      height / 2 + 50,
      100,
      40,
      "Reiniciar",
      () => this.reiniciarJuego()
    );
  }

  instrucciones() {
    image(this.fondo, 0, 0, this.fw, this.fh);//variable global fondo ahora es una propiedad del objeto Juego
    textSize(32);
    fill(255, 255, 255);
    text("¡Corre Montag!", 190, 50);
    textSize(12);
    text(
      "¡Montag fue descubierto! Nuestro protagonista debe esquivar los disparos de sus excompañeros y correr de los sabuesos mecánicos hasta que vengan los refuerzos.",
      0,
      100
    );
    text("Instrucciones: Usa las flechas de arriba y abajo para esquivar hasta que vengan los refuerzos.", 20, 200);
    textSize(24);
    text("Usa la flecha derecha para empezar a jugar", 40, 400);
  }

  jugando() {
    if (this.mostrarInstrucciones && this.juegoTerminado) {
      this.instrucciones();
    } else {
      if (frameCount % 60 == 0) {
        this.tiempo++;
      }

      if (this.vidas > 0) {
        if (this.tiempo >= 20) {
          background(0, 122, 0); // Cambiar el fondo a verde cuando el jugador gana
          fill(0, 255, 0);
          textSize(32);
          text("¡Ganaste!", 250, 200);
          this.juegoTerminado = true;
          this.dibujarBotonReinicio();
        } else {
          background(0, 122, 0); 
          fill(255);
          textSize(16);
          text("Vidas restantes: " + this.vidas, 20, 20);
          text("Tiempo " + this.tiempo, 20, 40);

          for (let i = 0; i < this.balacera.length; i++) {
            this.balacera[i].dibujarBala();
            if (!this.balacera[i].impacto) {
              this.balacera[i].moverBala();
              if (this.choqueBala(this.balacera[i])) {
                this.balacera[i].reiniciar();
              }
              if (this.balacera[i].fueraDePantalla()) {
                this.balacera[i].reiniciar();
              }
            }
          }
          for (let j = 0; j < this.enemigos.length; j++) {
            this.enemigos[j].dibujarSabuesos();
            this.enemigos[j].moverSabuesos();
            if (this.choqueSabueso(this.enemigos[j])) {
              this.enemigos[j].reiniciar();
            }
            if (this.enemigos[j].fueraDePantalla()) {
              this.enemigos[j].reiniciar();
            }
          }

          this.protagonista.dibujarPersonaje(this.personaje);//Ahora la imagen del personaje es pasada por parametro para evitar el uso de variables globales
          this.protagonista.moverPersonaje();
        }
      } else {
        background(122, 0, 0); // Cambiar el fondo a rojo cuando el jugador pierde
        fill(255, 0, 0);
        textSize(32);
        text("¡Perdiste!", 250, 200);
        this.dibujarBotonReinicio();
        this.juegoTerminado = true;
      }
    }
  }

  choqueBala(bala) {
    if (!bala.impacto && this.colision(bala.bx, bala.by, bala.bw, bala.bh, this.protagonista.px, this.protagonista.py, this.protagonista.pw, this.protagonista.ph)) {
      bala.impacto = true;
      this.vidas--;
      return true; // Devolver true cuando hay una colisión
    }
    return false; // Devolver false cuando no hay colisión
  }

  choqueSabueso(sabueso) {
    if (!sabueso.impacto && this.colisionSabueso(sabueso.sbx, sabueso.sby, sabueso.sbw, sabueso.sbh, this.protagonista.px, this.protagonista.py, this.protagonista.pw, this.protagonista.ph)) {
      sabueso.impacto = true;
      this.vidas--;
      return true; // Devolver true cuando hay una colisión
    }
    return false; // Devolver false cuando no hay colisión
  }

  colision(bx, by, bancho, balto, px, py, pancho, palto) {
    return (
      bx + bancho > px &&
      bx < px + pancho &&
      by + balto > py &&
      by < py + palto
    );
  }

  colisionSabueso(sbx, sby, sbw, sbh, px, py, pancho, palto) {
    return (
      sbx + sbw > px &&
      sbx < px + pancho &&
      sby + sbh > py &&
      sby < py + palto
    );
  }

  reiniciarJuego() {
    this.vidas = 5;
    this.tiempo = 0;
    this.estado = 'instrucciones';

    for (let i = 0; i < this.balacera.length; i++) {
      this.balacera[i].reiniciar();
    }
    for (let j = 0; j < this.enemigos.length; j++) {
      this.enemigos[j].reiniciar();
    }
    this.juegoTerminado = false;
  }

  dibujarBotonReinicio() {
    this.botonReinicio.mostrar();
  }
}
