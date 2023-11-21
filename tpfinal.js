let libro;
function setup() {
  createCanvas(600, 800);
  libro = new Libro();
}
function draw() {  
  background(150);
  libro.mostrar();
}
function mousePressed(){
  libro.cambiarPagina(mouseX, mouseY);
  if (keyCode === RIGHT_ARROW && !libro.juego.juegoIniciado) { //AHORA JUEGO ES UNA PROPIEDAD DE LIBRO
    libro.juego.juegoIniciado = true;
  }
}
function keyPressed() {
  if (keyCode === RIGHT_ARROW && !libro.juego.juegoIniciado) { //AHORA JUEGO ES UNA PROPIEDAD DE LIBRO
    libro.juego.juegoIniciado = true;
  }
}
