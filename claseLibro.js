class Libro{
  constructor(cantidad_paginas){
    this.textos = new Texto();    
    this.imagenes = new Imagen();    
    this.paginacion = new Paginacion();
    this.botones = new Boton();
    this.pagina_actual = 0;      
    
    this.juego = new Juego();
  }
  puntoEnZonaRectangular(posX_punto, posY_punto, posX_zona, posY_zona, ancho_zona, alto_zona){
    if (posX_punto >= posX_zona && posX_punto <= posX_zona + ancho_zona && posY_punto >= posY_zona && posY_punto <= posY_zona + alto_zona){
      return true;
    }else{
      return false;
    }  
  }
  mostrar(){    
    if (this.pagina_actual === 0){
      this.imagenes.mostrarImagen(this.pagina_actual);
      this.botones.mostrarBotonInicio();
      this.textos.mostrarTextoOpcion1(this.pagina_actual);
      this.botones.mostrarBotonCreditos();
      this.textos.mostrarTextoOpcion2(this.pagina_actual);      
    }else if(this.pagina_actual === 10){
      background(0);
      if (this.juego.juegoIniciado) {
        this.juego.jugando();
      } else {
        if (!this.juego.juegoTerminado) {
          this.juego.instrucciones();
        }
      }

      if (this.juego.juegoTerminado) {
        this.juego.botonReinicio.verificarClic();
      }      
      
    }else{
      this.imagenes.mostrarFondo();
      this.imagenes.mostrarImagen(this.pagina_actual);
      this.textos.mostrarTextoPrincipal(this.pagina_actual);
      this.botones.mostrarBoton1();      
      this.textos.mostrarTextoOpcion1(this.pagina_actual);      
      if (this.paginacion.paginaSiguiente(this.pagina_actual, 2) != -1){
        this.botones.mostrarBoton2();                
        this.textos.mostrarTextoOpcion2(this.pagina_actual);        
      }
      if (this.paginacion.paginaSiguiente(this.pagina_actual, 3) != -1){
        this.botones.mostrarBoton3();
        this.textos.mostrarTextoOpcion3(this.pagina_actual);        
      }
    }
    
  }
  
  cambiarPagina(posX_mouse, posY_mouse){        
    if (this.pagina_actual === 0){
      if (this.puntoEnZonaRectangular(posX_mouse, posY_mouse, this.botones.posX_boton_inicio, this.botones.posY_boton_inicio, 100, 50)){
        this.pagina_actual = this.paginacion.paginaSiguiente(this.pagina_actual, 1); //(pagina actual y opcion elegida)
      }else if (this.puntoEnZonaRectangular(posX_mouse, posY_mouse, this.botones.posX_boton_creditos, this.botones.posY_boton_creditos, this.botones.ancho_boton, this.botones.alto_boton)){
        this.pagina_actual = this.paginacion.paginaSiguiente(this.pagina_actual, 2); //(pagina actual y opcion elegida)
      }
    }else{             
      if (this.puntoEnZonaRectangular(posX_mouse, posY_mouse, this.botones.posX_boton1, this.botones.posY_boton1, this.botones.ancho_boton, this.botones.alto_boton)){        
        this.pagina_actual = this.paginacion.paginaSiguiente(this.pagina_actual, 1); //(pagina actual, opcion elegida)       
      }
      if (this.paginacion.paginaSiguiente(this.pagina_actual, 2) != -1){ 
        if (this.puntoEnZonaRectangular(posX_mouse, posY_mouse, this.botones.posX_boton2, this.botones.posY_boton2, this.botones.ancho_boton, this.botones.alto_boton)){        
          this.pagina_actual = this.paginacion.paginaSiguiente(this.pagina_actual, 2); //(pagina actual y opcion elegida)
        }
      }
      if (this.paginacion.paginaSiguiente(this.pagina_actual, 3) != -1){        
        if (this.puntoEnZonaRectangular(posX_mouse, posY_mouse, this.botones.posX_boton3, this.botones.posY_boton3, this.botones.ancho_boton, this.botones.alto_boton)){        
          this.pagina_actual = this.paginacion.paginaSiguiente(this.pagina_actual, 3); //(pagina actual y opcion elegida)
        }
      }                
    }
  }
}
