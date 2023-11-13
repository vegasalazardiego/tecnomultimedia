let libro;
function setup() {
  createCanvas(400, 400);
  libro = new Libro();
}
function draw() {  
  background(150);
  libro.mostrar();
}
function mousePressed(){
  libro.cambiarPagina(mouseX, mouseY);
}
