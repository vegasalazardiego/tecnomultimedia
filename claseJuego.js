class Juego {
  constructor(balas_activadas) {
    //this.fw = 600;
    //this.fh = 450;
    this.fw = width;
    this.fh = height;
    
    this.sy = 100;
    this.sx = 100;
    this.vidas = 5;
    this.balacera = [];
    this.enemigos = [];
    this.protagonista = new Protagonista(20, height / 2, 30, 30);
    this.juegoTerminado = false;
    this.tiempo = 0;
    this.juegoIniciado = false;
    this.mostrarInstrucciones = true;
    this.paginaActual = 'juego'
    this.juegoGanado = false;
 //Agregado para saber que estoy en el juego
    
    /***
      MODIFICACION PARA REEMPLAZAR EL USO DE PRELOAD      
    ***/
    this.fondo = loadImage("data/fondo.jpg");
    this.balitas = loadImage("data/bala.png");
    this.sabuesos = loadImage("data/sabuesomecanico.png");
    this.personaje = loadImage("data/personaje.png");
    
    //ACtivacion de las balas
    this.balas_activadas = balas_activadas;

    for (let i = 0; i < 7; i++) {
      if (this.balas_activadas){//Crea las balas siempre y cuando haga falta
        this.balacera.push(new Bala(random(600, 800), random(10, 450), 100, 30, this.balitas)); //variable global balitas ahora es una propiedad del objeto Juego
      }
      this.enemigos.push(new Sabueso(random(600, 800), random(10, 450), 40, 40, this.sabuesos)); //variable global sabuesos ahora es una propiedad del objeto Juego
    }

    this.inicializarBotonReinicio();
  }

  inicializarBotonReinicio() {// CAMBIO EL NOMBRE DE LA CLASE POR LLAMARSE IGUAL QUE LA CLASE BOTON QUE USA LIBRO
    this.botonReinicio = new BotonJuego(280 * 0.5,height / 2 + 50 * 0.5, 100 * 0.5, 40 * 0.5, "Reiniciar",
      () => this.reiniciarJuego()
    );
  }

  instrucciones() { //MODIFICACION DE TAMANIO width * 0.8, textSize()*3 usado para crear una caja para los textos y cambio de tamaño de fuente
    image(this.fondo, 0, 0, this.fw, this.fh);//variable global fondo ahora es una propiedad del objeto Juego
    textSize(20);
    fill(255, 255, 255);
    text("¡Corre Montag!", width/2 - textWidth("¡Corre Montag!")/2, 50);
    textSize(12);
    text(
      "¡Montag fue descubierto! Nuestro protagonista debe esquivar los disparos de sus excompañeros y correr de los sabuesos mecánicos hasta que vengan los refuerzos.",
      40, 100, width * 0.8, textSize()*3);
    text("Instrucciones: Usa las flechas de arriba y abajo para esquivar hasta que vengan los refuerzos.", 40, 200, width * 0.8, textSize()*3);
    textSize(20);
    text("Usa la flecha derecha para empezar a jugar", 40, 400, width*0.8, textSize()*3);
  }

  jugando() {
    if (this.mostrarInstrucciones) {  //MODIFICACION PARA MOSTRAR INSTRUCCIONES
      this.instrucciones();
    } else {
      if (frameCount % 60 == 0) {
        this.tiempo++;
      }

      if (this.vidas > 0) {
        if (this.tiempo >= 20) {
          background(0, 122, 0); // Cambiar el fondo a verde cuando el jugador gana
          fill(0, 255, 0);
          textSize(20); //CAMBIO DE TAMANIO
          text("¡Ganaste!", 250 * 0.5, 200 * 0.5); //CAMBIO DE TAMANIO
          this.juegoTerminado = true;
          this.dibujarBotonReinicio();
        } else {
          background(0, 122, 0); 
          fill(255);
          textSize(16);
          text("Vidas restantes: " + this.vidas, 20, 20);
          text("Tiempo " + this.tiempo, 20, 40);

          if (this.balas_activadas){
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
        textSize(20); //CAMBIO DE TAMANIO
        text("¡Perdiste!", 250 * 0.5, 200 * 0.5); //CAMBIO DE TAMANIO
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
    if (!sabueso.impacto && this.colision(sabueso.sbx, sabueso.sby, sabueso.sbw, sabueso.sbh, this.protagonista.px, this.protagonista.py, this.protagonista.pw, this.protagonista.ph)) {
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



  reiniciarJuego() {
    this.vidas = 5;
    this.tiempo = 0;
    this.estado = 'instrucciones';
    
    if (this.balas_activadas){
      for (let i = 0; i < this.balacera.length; i++) {
        this.balacera[i].reiniciar();
      }
    }
    for (let j = 0; j < this.enemigos.length; j++) {
      this.enemigos[j].reiniciar();
    }
    this.juegoTerminado = false;
    
    //MODIFICACION PARA MOSTRAR INSTRUCCIONES
    this.mostrarInstrucciones = true;
  }

  dibujarBotonReinicio() {
    this.botonReinicio.mostrar();
  }
    iniciarJuego() {
    this.juegoIniciado = true;
  }
   manejarTeclaPresionada() {
    if (keyCode === RIGHT_ARROW && this.mostrarInstrucciones) {  //MODIFICACION PARA MOSTRAR INSTRUCCIONES
      this.mostrarInstrucciones = false; //Antes de iniciar el juego se desactivan las instrucciones
      this.iniciarJuego();
    }
  }
  manejarClicJuego() {
    // Lógica específica para manejar clics en el juego al principio
    if (this.paginaActual === 'juego') {
      this.iniciarJuego();
    } else {
      this.avanzarPaginaManual();
    }
  }
   manejarEntrada() {
    if (mouseIsPressed) {
      this.manejarClicJuego();
    }

    if (keyIsDown(RIGHT_ARROW)) {
      this.manejarFlechaDerecha();
    }

    if (keyIsPressed) {
      this.manejarTeclaPresionada();
    }
  }
cambiarPagina(pagina) {
    this.paginaActual = pagina;
  }


 
    verificarCondicionCambioPagina() {
    if (this.paginaActual === 'juego') {
      if (this.juegoGanado) {
        this.avanzarPaginaManual();
      }
    }
  }
   avanzarPaginaManual() {
    // Cambiar la página directamente aquí, sin depender de la instancia de libro
    this.cambiarPagina('siguiente'); 
  }
}
