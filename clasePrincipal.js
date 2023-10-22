class Juego{
  constructor(){
    this.escenario = new Escenario();
    this.leones = [];
    for(let i = 0; i<6 ; i++){
      if (i < 2){
        this.leones[i] = new Leon(height - height/14 * (i + 2), round(random(0,1)), round(random(5,10))); //par de leones de abajo
      }else if(i<4){
        this.leones[i] = new Leon(height/14 * (i + 3), round(random(0,1)), round(random(15,19))); //par de leones de arriba
      }else{        
        this.leones[i] = new Leon(height/14 * (i + 4), round(random(0,1)), round(random(11,15))); //par de leones del medio
      }
    }           
    this.hienas = [];
    for (let i = 0; i<2; i++){
      for(let j = 0; j < pow(2, i)*2 ; j++){ //la priemra fila creara 2 hienas la segunda vez se crearan 4.        
        this.hienas[2*i+j] = new Hiena(height - height/14 * (3*i + 4), pow(2, i)*2, j);
      }
    }
    this.personaje = new Personaje();
    this.pantalla_actual = 0; // INSTRUCCIONES = 0; JUEGO = 1; GAMEOVER = 2;
  }
  puntoEnZona(posX_punto, posY_punto, posX_zona, posY_zona, ancho_zona, alto_zona){
    if (posX_punto >= posX_zona && posX_punto <= posX_zona + ancho_zona && posY_punto >= posY_zona && posY_punto <= posY_zona + alto_zona){
      return true;
    }else{
      return false;
    }
  }
  verificarColision(){ //preguntar si es correcto acceder a las propiedades de una objeto directamente desde otro objeto.
    for(let i = 0; i<6; i++){
      if (this.leones[i].direccion === 0){
        if (this.puntoEnZona(this.personaje.posX + this.personaje.ancho/2, this.personaje.posY + this.personaje.alto/2, this.leones[i].posX, this.leones[i].posY, this.leones[i].ancho, this.leones[i].alto)){         
          return true;
        }
      }else{
        if (this.puntoEnZona(this.personaje.posX + this.personaje.ancho/2, this.personaje.posY + this.personaje.alto/2, this.leones[i].posX - this.leones[i].ancho, this.leones[i].posY, this.leones[i].ancho, this.leones[i].alto)){ // posX_zona desfazada por el uso de scale al momento de dibujar el enmigo.         
          return true;
        }
      }      
      if (this.puntoEnZona(this.personaje.posX + this.personaje.ancho/2, this.personaje.posY + this.personaje.alto/2, this.hienas[i].posX, this.hienas[i].posY, this.hienas[i].ancho, this.hienas[i].alto)){         
          return true;       
      }
    }    
    return false;    
  }  
  mostrar(){
    if (this.pantalla_actual === 0){
      this.escenario.dibujarInstrucciones();  
    }else if(this.pantalla_actual === 1){
      this.escenario.dibujarPantallaJuego();
      for(let i = 0; i<6; i++){ //mostrar todo los leones creados
        this.leones[i].dibujar();
      }
      for(let i = 0; i<6; i++){
        this.hienas[i].dibujar();
      }
      this.personaje.dibujar();
      if (this.verificarColision()){
        this.personaje.matarPersonaje();
        this.cambiarPantalla(2);
      }           
      if (this.puntoEnZona(this.personaje.posX + (this.personaje.ancho / 2), this.personaje.posY + (this.personaje.alto / 2), (width/8) * 6, height - (height/14) * 10, (width/8), (height / 14))){ //CONDICION PARA GANAR
        this.cambiarPantalla(3);  
      }
    }else if (this.pantalla_actual === 2){
      this.escenario.dibujarPantallaGameOver();
    }else if(this.pantalla_actual === 3){
      this.escenario.dibujarPantallaGanaste();
    }           
  }
  cambiarPantalla(numero_pantalla){
    this.pantalla_actual = numero_pantalla;
  }
  reiniciarJuego(){
    this.personaje.reiniciar();
    for(let i = 0; i<6; i++){
      this.leones[i].reiniciar();
      this.hienas[i].reiniciar();
    }  
    this.cambiarPantalla(1);
  }
  moverPersonaje(tec) {    
    this.tecla = tec;
    if (this.pantalla_actual === 0){ //En la pantalla de Instrucciones solo funciona la tecla P
      if (this.tecla === 'p' || this.tecla === 'P') {
        this.pantalla_actual = 1;    
      }
    }else if(this.pantalla_actual === 1){ //Durante el juego funcionan todas las teclas excepto la tecla P
      if (this.tecla === 'a' || this.tecla === 'A') {
        this.personaje.moverIzquierda();
      }else if (this.tecla === 'd' || this.tecla === 'D') {
        this.personaje.moverDerecha();
      }else if(this.tecla === 'w' || this.tecla === 'W'){
        this.personaje.moverArriba();
      }else if(this.tecla === 's' || this.tecla === 'S'){
        this.personaje.moverAbajo();
      }else if(this.tecla === 'r' || this.tecla === 'R'){
        this.reiniciarJuego();
      }else if(this.tecla === 'i' || this.tecla === 'I'){
        this.cambiarPantalla(0);
      }       
    }else if(this.pantalla_actual === 2 || this.pantalla_actual === 3){//Durante la pantalla de Game Over solo funciona la tecla Reiniciar e Instrucciones
      if (this.tecla === 'r' || this.tecla === 'R'){
        this.reiniciarJuego(); 
      }else if(this.tecla === 'i' || this.tecla === 'I'){
        this.cambiarPantalla(0);
      }
    }           
  } 
}
