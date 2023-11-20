class Paginacion{
  constructor(){
    this.pagina = [];
    this.pagina[0] = [1, 17, -1]; //[opcion1(siempre se lleva a cabo), opcion2, opcion3]
    this.pagina[1] = [2, -1, -1];
    this.pagina[2] = [3, 8, 13];
    this.pagina[3] = [4, -1, -1];
    this.pagina[4] = [15, 10, 5];
    this.pagina[5] = [6, -1, -1];
    this.pagina[6] = [7, -1, -1];
    this.pagina[7] = [0, -1, -1];
    this.pagina[8] = [9, -1, -1];
    this.pagina[9] = [15, 10, 5];
    this.pagina[10] = [11, -1, -1];
    this.pagina[11] = [12, -1, -1];
    this.pagina[12] = [0, -1, -1];
    this.pagina[13] = [14, -1, -1];
    this.pagina[14] = [15, 10, 5];
    this.pagina[15] = [16, -1, -1];
    this.pagina[16] = [0, -1, -1];
    this.pagina[17] = [0, -1, -1];
  }
  paginaSiguiente(numero_pagina, opcion){    
    return this.pagina[numero_pagina][opcion - 1]; //opcion puede ser 1, 2 o 3 y los indices arrancan en 0;
  }
}
