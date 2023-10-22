let juego;
function setup() {
  createCanvas(400, 600);
  frameRate(10);
  juego = new Juego();  
}
function draw() {    
  juego.mostrar();
  /*for (let y = 0; y<15; y++){
    line(0, height/14 * y, width, height/14 * y);
  }
  */
}
function keyPressed(){
  juego.moverPersonaje(key);
}
