let libro;
function setup() {
  createCanvas(600, 700);
  libro = new Libro();
}
function draw() {  
  background(150);
  libro.mostrar();
}
function mousePressed(){
  libro.cambiarPagina(mouseX, mouseY);
}
