class Texto{
  constructor(){
    this.texto_principal = [];
    this.texto_opcion1 = [];
    this.texto_opcion2 = [];
    this.texto_opcion3 = [];    
    this.texto_principal[0] = "Texto Inicio";
    this.texto_principal[1] = "Montag estaba conforme con su trabajo como bombero, es decir quemando libros. Un día comienza a cuestionarse el sentido de su vida y tambien su profesion, además de cuestionarse porque los libros son peligrosos, y que es lo que contienen.";
    this.texto_principal[2] = "Un día Montag, estaba por quemar una casa, pero se le presento la oportunidad de tomar un libro,¿Qué hará Montag?";
    this.texto_principal[3] = "Pagina 3";
    this.texto_principal[4] = "Pagina 4";
    this.texto_principal[5] = "Pagina 5";
    this.texto_principal[6] = "Pagina 6";
    this.texto_principal[7] = "Pagina 7";
    this.texto_principal[8] = "Pagina 8";
    this.texto_principal[9] = "Pagina 9";
    this.texto_principal[10] = "Pagina 10";
    this.texto_principal[11] = "Pagina 11";
    this.texto_principal[12] = "Pagina 12";
    this.texto_principal[13] = "Pagina 13";
    this.texto_principal[14] = "Pagina 14";
    this.texto_principal[15] = "Pagina 15";
    this.texto_principal[16] = "Pagina 16";
    this.texto_principal[17] = "Pagina 17";
    this.texto_opcion1[0] = "Inicio";
    this.texto_opcion1[1] = "Siguiente";
    this.texto_opcion1[2] = "Tomar el libro y quemar la casa junto con la señora que la habitaba e irse a casa";
    this.texto_opcion1[3] = "Pagina 3 opcion 1";
    this.texto_opcion1[4] = "Pagina 4 opcion 1";
    this.texto_opcion1[5] = "Pagina 5 opcion 1";
    this.texto_opcion1[6] = "Pagina 6 opcion 1";
    this.texto_opcion1[7] = "Pagina 7 opcion 1";
    this.texto_opcion1[8] = "Pagina 8 opcion 1";
    this.texto_opcion1[9] = "Pagina 9 opcion 1";
    this.texto_opcion1[10] = "Pagina 10 opcion 1";
    this.texto_opcion1[11] = "Pagina 11 opcion 1";  
    this.texto_opcion1[12] = "Pagina 12 opcion 1";  
    this.texto_opcion1[13] = "Pagina 13 opcion 1";  
    this.texto_opcion1[14] = "Pagina 14 opcion 1";  
    this.texto_opcion1[15] = "Pagina 15 opcion 1";  
    this.texto_opcion1[16] = "Pagina 16 opcion 1";  
    this.texto_opcion1[17] = "Pagina 17 opcion 1";  
    this.texto_opcion2[0] = "Creditos";
    this.texto_opcion2[1] = "Pagina 1 opcion 2";
    this.texto_opcion2[2] = "tomar el libro y dejar a la señora vivir";
    this.texto_opcion2[3] = "Pagina 3 opcion 2";
    this.texto_opcion2[4] = "Pagina 4 opcion 2";
    this.texto_opcion2[5] = "Pagina 5 opcion 2";
    this.texto_opcion2[6] = "Pagina 6 opcion 2";
    this.texto_opcion2[7] = "Pagina 7 opcion 2";
    this.texto_opcion2[8] = "Pagina 8 opcion 2";
    this.texto_opcion2[9] = "Pagina 9 opcion 2";
    this.texto_opcion2[10] = "Pagina 10 opcion 2";
    this.texto_opcion2[11] = "Pagina 11 opcion 2";
    this.texto_opcion2[12] = "Pagina 12 opcion 2";
    this.texto_opcion2[13] = "Pagina 13 opcion 2";
    this.texto_opcion2[14] = "Pagina 14 opcion 2";
    this.texto_opcion2[15] = "Pagina 15 opcion 2";
    this.texto_opcion2[16] = "Pagina 16 opcion 2";
    this.texto_opcion2[17] = "Pagina 17 opcion 2";
    this.texto_opcion3[0] = "Pagina 0 opcion 3";
    this.texto_opcion3[1] = "Pagina 1 opcion 3";
    this.texto_opcion3[2] = "Escapara con el libro";
    this.texto_opcion3[3] = "Pagina 3 opcion 3";
    this.texto_opcion3[4] = "Pagina 4 opcion 3";
    this.texto_opcion3[5] = "Pagina 5 opcion 3";
    this.texto_opcion3[6] = "Pagina 6 opcion 3";
    this.texto_opcion3[7] = "Pagina 7 opcion 3";
    this.texto_opcion3[8] = "Pagina 8 opcion 3";
    this.texto_opcion3[9] = "Pagina 9 opcion 3";
    this.texto_opcion3[10] = "Pagina 10 opcion 3";
    this.texto_opcion3[11] = "Pagina 11 opcion 3";      
    this.texto_opcion3[12] = "Pagina 12 opcion 3";      
    this.texto_opcion3[13] = "Pagina 13 opcion 3";      
    this.texto_opcion3[14] = "Pagina 14 opcion 3";      
    this.texto_opcion3[15] = "Pagina 15 opcion 3";      
    this.texto_opcion3[16] = "Pagina 16 opcion 3";      
    this.texto_opcion3[17] = "Pagina 17 opcion 3";
    
    this.posX_texto_principal = width / 2 + 40;
    this.posY_texto_principal = 40;
    this.ancho_texto_principal = width / 2 - 40 * 2;
    this.alto_texto_principal = height / 2 - 40 * 2;
    
    this.posX_texto_opcion1 = width / 2 + 40;
    this.posY_texto_opcion1 = height / 2  + height / 2 / 3 * 0;
    this.ancho_texto_opcion1 = width / 2 - 40 - 100 - 40;
    this.alto_texto_opcion1 = (height / 2) / 3 ;
    
    this.posX_texto_opcion2 = this.posX_texto_opcion1; 
    this.posY_texto_opcion2 = height / 2  + height / 2 / 3 * 1;
    this.ancho_texto_opcion2 = this.ancho_texto_opcion1;
    this.alto_texto_opcion2 = this.alto_texto_opcion1;
    
    this.posX_texto_opcion3 = this.posX_texto_opcion1; 
    this.posY_texto_opcion3 = height / 2  + height / 2 / 3 * 2;
    this.ancho_texto_opcion3 = this.ancho_texto_opcion1;
    this.alto_texto_opcion3 = this.alto_texto_opcion1;
  }
  mostrarTextoPrincipal(numero_pagina){    
    text(this.texto_principal[numero_pagina], this.posX_texto_principal, this.posY_texto_principal, this.ancho_texto_principal, this.alto_texto_principal);
  }
  mostrarTextoOpcion1(numero_pagina){
    if (numero_pagina === 0){
      text(this.texto_opcion1[numero_pagina], width/2 - 100 - 60, height - 50 * 3, 100, 50);           
    }else{
      text(this.texto_opcion1[numero_pagina], this.posX_texto_opcion1, this.posY_texto_opcion1, this.ancho_texto_opcion1, this.alto_texto_opcion1);
    }
  }
  mostrarTextoOpcion2(numero_pagina){    
    if (numero_pagina === 0){
      text(this.texto_opcion2[numero_pagina], width/2 - 100 - 60, height - 50, 100, 50);           
    }else{      
      text(this.texto_opcion2[numero_pagina], this.posX_texto_opcion2, this.posY_texto_opcion2, this.ancho_texto_opcion2, this.alto_texto_opcion2);
    }
  }
  mostrarTextoOpcion3(numero_pagina){        
    text(this.texto_opcion3[numero_pagina], this.posX_texto_opcion3, this.posY_texto_opcion3, this.ancho_texto_opcion3, this.alto_texto_opcion3);    
  }
}
