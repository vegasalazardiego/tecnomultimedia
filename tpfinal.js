let libro;

function setup() {
  createCanvas(374,600);
  libro = new Libro();
}

function draw() {
  background(150);
  libro.mostrar(); // 
  // Actualizar y mostrar el juego
  // Dibujar el botón de siguiente si es necesario


}

function mousePressed() {
  libro.cambiarPagina(mouseX,mouseY);
  libro.juego.manejarClicJuego(); // Llamamos al método manejarClicJuego de la instancia de Juego
libro.manejarClicBotonSiguiente(mouseX, mouseY);
  libro.juego_sin_balas.manejarClicJuego(); // Llamamos al método manejarClicJuego de la instancia de Juego
}

function keyPressed() {
  libro.juego.manejarTeclaPresionada(); // Llamamos al método manejarTeclaPresionada de la instancia de Juego
  libro.juego_sin_balas.manejarTeclaPresionada();
}
