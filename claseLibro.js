class Libro{
  constructor(cantidad_paginas){
    this.textos = new Texto();    
    //this.imagenes = new Imagen();    
    this.paginacion = new Paginacion();           
    this.pagina_actual = 0;    
    this.posX_zona1 = 0;
    this.posY_zona1 = 0; 
    this.posX_zona2 = 100;
    this.posY_zona2 = 0;
    this.posX_zona3 = 200;
    this.posY_zona3 = 0;
    this.ancho_zona = 30;
  }
  puntoEnZona(posX_punto, posY_punto, posX_zona, posY_zona, ancho_zona, alto_zona){
    if (posX_punto >= posX_zona && posX_punto <= posX_zona + ancho_zona && posY_punto >= posY_zona && posY_punto <= posY_zona + alto_zona){
      return true;
    }else{
      return false;
    }  
  }
  mostrar(){    
    this.textos.mostrarTextoPrincipal(this.pagina_actual);
    push();
    fill(255,0,0);
    rect(this.posX_zona1, this.posY_zona1, this.ancho_zona, this.ancho_zona);
    pop();
    this.textos.mostrarTextoOpcion1(this.pagina_actual);
    if (this.paginacion.paginaSiguiente(this.pagina_actual, 2) != -1){
      push();
      fill(0,255,0);
      rect(this.posX_zona2, this.posY_zona2, this.ancho_zona, this.ancho_zona);
      this.textos.mostrarTextoOpcion2(this.pagina_actual);
      pop();
    }
    if (this.paginacion.paginaSiguiente(this.pagina_actual, 3) != -1){
      push();
      fill(0,0,255);
      rect(this.posX_zona3, this.posY_zona3, this.ancho_zona, this.ancho_zona);
      this.textos.mostrarTextoOpcion3(this.pagina_actual);
      pop();
    }    
    
  }
  
  cambiarPagina(posX_mouse, posY_mouse){    
    if (this.puntoEnZona(posX_mouse, posY_mouse, this.posX_zona1, this.posY_zona1, this.ancho_zona, this.ancho_zona)){
      this.pagina_actual = this.paginacion.paginaSiguiente(this.pagina_actual, 1); //(pagina actual y opcion elegida)
    }else if (this.puntoEnZona(posX_mouse, posY_mouse, this.posX_zona2, this.posY_zona2, this.ancho_zona, this.ancho_zona)){
      this.pagina_actual = this.paginacion.paginaSiguiente(this.pagina_actual, 2);    
    }else if (this.puntoEnZona(posX_mouse, posY_mouse, this.posX_zona3, this.posY_zona3, this.ancho_zona, this.ancho_zona)){
      this.pagina_actual = this.paginacion.paginaSiguiente(this.pagina_actual, 3);    
    }    
  }
}
