class Boton{
  constructor(){    
    this.ancho_boton = 100 * 0.5; // MODIFICACION TAMANIO
    this.alto_boton = 50 * 0.5; // MODIFICACION TAMANIO
    
    this.posX_boton_inicio = width/2 - this.ancho_boton - 60;
    this.posY_boton_inicio = height - this.alto_boton * 3;
    
    this.posX_boton_creditos = width/2 - this.ancho_boton - 60;
    this.posY_boton_creditos = height - this.alto_boton * 1;
    
    this.posX_boton1 = width - 20 - this.ancho_boton;
    this.posY_boton1 = height / 2  + height / 2 / 3 * 0;
    
    this.posX_boton2 = width - 20 - this.ancho_boton;
    this.posY_boton2 = height / 2 + height / 2  / 3 * 1;
    
    this.posX_boton3 = width - 20 - this.ancho_boton;
    this.posY_boton3 = height / 2  + height / 2 / 3 * 2;
  }
  mostrarBotonInicio(){
    push()
    fill(255,0,0);
    rect(this.posX_boton_inicio, this.posY_boton_inicio, this.ancho_boton, this.alto_boton);
    pop();
  }
  mostrarBotonCreditos(){
    push()
    fill(0,255,0);
    rect(this.posX_boton_creditos, this.posY_boton_creditos, this.ancho_boton, this.alto_boton);
    pop();
  }
  mostrarBoton1(){
    push()
    fill(63,63,63);
    rect(this.posX_boton1, this.posY_boton1, this.ancho_boton, this.alto_boton);
    pop();
  }
  mostrarBoton2(){
    push()
    fill(63,63,63);
    rect(this.posX_boton2, this.posY_boton2, this.ancho_boton, this.alto_boton);
    pop();
  }
  mostrarBoton3(){
    push()
    fill(63,63,63);
    rect(this.posX_boton3, this.posY_boton3, this.ancho_boton, this.alto_boton);
    pop();
  }
}
