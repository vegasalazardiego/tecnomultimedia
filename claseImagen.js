class Imagen {
  constructor() {
    this.ruta = "imagenes/";
    this.imagenes = [];
    for (let i = 0; i < 18; i++) {
      this.imagenes[i] = loadImage(this.ruta + "imagen" + i + ".png");
    }
    this.posX = 40;
    this.posY = 40;
    this.ancho = width/2 - 40 * 2;
    this.alto = height - 40 * 2;
  }

  mostrarImagen(numero_pagina) {
    if (numero_pagina === 0) //la unica patanlla con una configuracion distinta
      image(this.imagenes[numero_pagina], 0, 0, width, height);
    else{
      image(this.imagenes[numero_pagina], this.posX, this.posY, this.ancho, this.alto);
    }
  }
}
