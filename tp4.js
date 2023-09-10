//Apellido y Nombre: Vega Salazar Diego
//legajo: 93094/4
//comisión 1
//https://youtu.be/_JiiE8Zba7I
let multiplicador = 2;
let ancho_pantalla = 480 * multiplicador;
let alto_pantalla = 352 * multiplicador;
let ancho_nave = 32 * multiplicador;
let alto_nave = 16 * multiplicador;
let ancho_proyectil = 2 * multiplicador;
let alto_proyectil =  6 * multiplicador;
let posX_proyectil = ancho_pantalla / 2 - ancho_proyectil / 2;
let posY_proyectil = alto_pantalla - alto_nave * 2 - alto_proyectil *2;
let fuente;
let jugando = true;
let impacto_proyectil = true;
let disparo_proyectil = false;
let enemigos = [];
let puntaje = 0;
let avance = 1;
let game_over = false;
let pantalla_act = 0;
let opcion = 0;
function preload() {
  fuente = loadFont("assets/Quinquefive-ALoRM.ttf");  //*REVISAR DESFACE EN ELE EJE Y
}
function setup() {  
  createCanvas(ancho_pantalla, alto_pantalla);
  background(14, 14, 153);  
  fill(24, 24, 255);
  push();
  strokeWeight(alto_nave*0.3);
  stroke(10, 10, 102);
  line(ancho_nave / 2, 0, ancho_nave / 2, alto_pantalla);
  line(ancho_pantalla - ancho_nave / 2, 0, ancho_pantalla - ancho_nave / 2, alto_pantalla);
  line(0, alto_pantalla - alto_nave / 2, ancho_pantalla, alto_pantalla - alto_nave / 2);  
  pop();
  fill(255, 255, 255);
  textFont(fuente);
  textSize(alto_nave * 0.7);  
  stroke(0);  
  fill(0);    
  for(let i = 0; i < 10; i++){
    enemigos[i] = [0 - ancho_nave - i * ancho_nave, alto_nave, ancho_nave, alto_nave, random(1, 256), random(1, 256), random(1, 256), 1]; //posX, posY, ancho, alto, R, G, B, mostrar      motrar: 1 = si  0 = no    
  }  
}

function draw() {    
  if (pantalla_act === 0){
     pantallaMenu(); 
  }else if(pantalla_act === 2){
    pantallaInstrucciones();            
  }else if(pantalla_act === 3){
    pantallaCreditos();
  }else if (pantalla_act === 1){
    if (jugando){
      let posX_mouse = mouseX;
      if (posX_mouse < ancho_nave + ancho_nave /2){
        posX_mouse = ancho_nave + ancho_nave / 2;
      }else if(posX_mouse > ancho_pantalla - ancho_nave - ancho_nave / 2){
        posX_mouse = ancho_pantalla - ancho_nave - ancho_nave / 2;
      }
      push();
      stroke(255,255,255);
      rect(ancho_nave, alto_nave, ancho_pantalla - ancho_nave * 2, alto_pantalla - alto_nave * 2);    //dibujar pantalla
      pop();    
      noStroke();
      for(let i = 0; i < 10; i++){      //mover enemigos        
        enemigos[i][0] += avance; //avanzar enemigo
        if (enemigos[i][7] === 1 && enemigos[i][0] > ancho_nave && enemigos[i][0] + enemigos[i][2] < ancho_pantalla - ancho_nave){ //verificar que se pueda dibujar      
          dibujarEnemigo(enemigos[i][0],enemigos[i][1], enemigos[i][2], enemigos[i][3], enemigos[i][4], enemigos[i][5], enemigos[i][6]);               
        }     
        if (enemigos[i][0] + enemigos[i][2] > ancho_pantalla - ancho_nave){
          enemigos[i][0] = 0 - ancho_nave;          
          enemigos[i][1] = enemigos[i][1] + alto_nave;        
        }
        if (enemigos[i][1] > alto_pantalla - alto_nave * 3 && enemigos[i][7] === 1){ //condicion para perder
          jugando = false; //una vez se vuelve false no volvera a ser true hasta que se reinicie el juego.
          game_over = true; // una vez que toma el valor true se quedara asi hasta que se reinice el juego.
        }
      }
      stroke(0);
      if (puntaje === 200){ //condicion para ganar
        jugando = false; //detener el juego        
      }      
      dibujarNave(posX_mouse - ancho_nave / 2, alto_pantalla - alto_nave, ancho_nave, alto_nave);    
      if (disparo_proyectil){           
        push();
        fill(255, 255, 255);
        posY_proyectil -= alto_proyectil*0.8;      
        dibujarProyectil(posX_proyectil, posY_proyectil , ancho_proyectil, alto_proyectil);
        pop();
        impacto_proyectil = false;
        for (let i = 0; i < 10; i++){
           if (impactoProyectil(posX_proyectil, posY_proyectil, ancho_proyectil, alto_proyectil, enemigos[i][0], enemigos[i][1], enemigos[i][2], enemigos[i][3]) && enemigos[i][7] == 1){
             enemigos[i][7] = 0;
             avance += 1;
             impacto_proyectil = true;
             disparo_proyectil = false;
             posY_proyectil = alto_pantalla - alto_nave * 2 - alto_proyectil * 2;
             puntaje += 20;
             mostrarPuntacion(puntaje);
           }
           if (posY_proyectil <= alto_nave){
             impacto_proyectil = true;
             disparo_proyectil = false;
             posY_proyectil = alto_pantalla - alto_nave * 2 - alto_proyectil *2; 
           }
           
        }
      }else{
        posX_proyectil = posX_mouse - ancho_proyectil / 2;
      }
    }else{
      if (game_over){      
        pantallaPerdiste();               
      }else{
        pantallaGanaste();                
      }
    }
  }    
 
}
function keyPressed(){
  if (key === 'r' || key === 'R'){
    reiniciarValores();
    limpiarPantalla();
    pantalla_act = 0;
  }
}
function mousePressed(){  
  if (pantalla_act === 1 && disparo_proyectil === false && impacto_proyectil){
    disparo_proyectil = true;
  }  
  if (pantalla_act === 0){
    pantalla_act = opcion;
    if (opcion === 1){
      push();    
      fill(255,255,255);
      text("SCORE:", ancho_nave, alto_nave * 0.7);
      text(puntaje, ancho_nave * 4 , alto_nave * 0.7);
      pop();   
      jugando = true;
    }
  }
  if (pantalla_act === 1 && jugando === false){ 
    if(game_over){
      if (puntoEnZonaRectangular(mouseX, mouseY, ancho_pantalla / 2 - ancho_nave - textWidth("SI") / 2, alto_pantalla / 2 + alto_nave - textSize(), textWidth("SI"), textSize())){ //OPCION "SI" DE VOLVER A JUGAR
        reiniciarValores();
        jugando = true;
        limpiarPantalla();
        push();    
        fill(255,255,255);
        text("SCORE:", ancho_nave, alto_nave * 0.7);
        text(puntaje, ancho_nave * 4 , alto_nave * 0.7);
        pop();
      }else if (puntoEnZonaRectangular(mouseX, mouseY, ancho_pantalla / 2 + ancho_nave - textWidth("NO")/2, alto_pantalla / 2 + alto_nave - textSize(), textWidth("NO"), textSize())){  //OPCION "NO" DE VOLVER A JUGAR              
        reiniciarValores();     
        limpiarPantalla();
        pantalla_act = 0;        
      }
    }else{
      if (puntoEnZonaRectangular(mouseX, mouseY, ancho_pantalla - ancho_nave - textWidth("VOLVER") - ancho_nave, alto_pantalla - alto_nave - alto_nave - textSize(), textWidth("VOLVER"), textSize())){ //opcion "VOLVER" para volver al menu
        reiniciarValores();
        limpiarPantalla();
        pantalla_act = 0;
      }
    }
         
  }    
  if ((pantalla_act === 2 || pantalla_act === 3) && puntoEnZonaRectangular(mouseX, mouseY, ancho_pantalla - ancho_nave - textWidth("VOLVER") - ancho_nave, alto_pantalla - alto_nave - alto_nave - textSize(), textWidth("VOLVER"), textSize())){
    pantalla_act = 0;
  }
   
}

function puntoEnZonaRectangular(posX_punto, posY_punto, posX_zona, posY_zona, ancho_zona, alto_zona){
  return (posX_punto >= posX_zona && posX_punto <= posX_zona + ancho_zona && posY_punto >= posY_zona && posY_punto <= posY_zona + alto_zona);
}
function impactoProyectil(posX_proyectil, posY_proyeltil, ancho_proyectil, alto_proyectil, posX_zona, posY_zona, ancho_zona, alto_zona){  
  if (puntoEnZonaRectangular(posX_proyectil, posY_proyectil, posX_zona, posY_zona, ancho_zona, alto_zona) || puntoEnZonaRectangular(posX_proyectil + ancho_proyectil, posY_proyectil, posX_zona, posY_zona, ancho_zona, alto_zona) || puntoEnZonaRectangular(posX_proyectil, posY_proyectil + alto_proyectil, posX_zona, posY_zona, ancho_zona, alto_zona)){
    return true
  }else{
    return false;
  }
}
function dibujarNave(posX, posY, ancho, alto){  
  push();
  fill(51, 255, 0);
  rect(posX, posY - alto * 0.5, ancho, alto * 0.5);
  rect(posX + ancho * 0.0625, posY - alto * 0.625, ancho * 0.875, alto * 0.125);
  rect(posX + ancho / 2 - ancho * 0.1875 / 2, posY - alto * 0.875, ancho * 0.1875, alto * 0.25);
  rect(posX + ancho / 2 - ancho * 0.0625 / 2, posY - alto, ancho * 0.0625, alto * 0.125);
  pop();
}
function dibujarProyectil(posX, posY, ancho, alto){
  push();
  fill(255, 255, 255);
  rect(posX, posY, ancho, alto);
  pop();
}
function dibujarEnemigo(posX, posY, ancho, alto, r, g, b){
  push();
  fill(r, g, b)
  rect(posX, posY, ancho, alto);
  pop();
}
function mostrarPuntacion(score){
  push();
  noStroke();
  fill(14,14,153);
  rect(ancho_nave * 4, 0, ancho_nave * 3, alto_nave*0.95);
  fill(255,255,255);
  text(score, ancho_nave * 4 , alto_nave * 0.7); 
  pop();
}
function pantallaPerdiste(){
  limpiarPantalla();  
  push();
  fill(255, 255, 255);  
  textAlign(CENTER);
  text("PERDISTE", ancho_pantalla / 2, alto_nave * 2);    
  text("VOLVER A JUGAR?", ancho_pantalla / 2, alto_pantalla / 2 - textSize());// apertura de signo de pregunta no esta en ascii imprimible, sino es escii extendido
  text("SI", ancho_pantalla / 2 - ancho_nave, alto_pantalla / 2 + alto_nave);  
  text("NO", ancho_pantalla / 2 + ancho_nave, alto_pantalla / 2 + alto_nave);
  if (puntoEnZonaRectangular(mouseX, mouseY, ancho_pantalla / 2 - ancho_nave - textWidth("SI") / 2, alto_pantalla / 2 + alto_nave - textSize(), textWidth("SI"), textSize())){
    circle(ancho_pantalla / 2 - ancho_nave - textWidth("SI") / 2 - textSize()/2 - 5, alto_pantalla / 2 + alto_nave - textSize()/2 + 5, textSize());    
  }else if (puntoEnZonaRectangular(mouseX, mouseY, ancho_pantalla / 2 + ancho_nave - textWidth("NO")/2, alto_pantalla / 2 + alto_nave - textSize(), textWidth("NO"), textSize())){
    circle(ancho_pantalla / 2 + ancho_nave - textWidth("NO")/2 - textSize() /2 - 5, alto_pantalla / 2 + alto_nave - textSize()/2 + 5, textSize());    
  }
  pop();
}
function pantallaGanaste(){
  limpiarPantalla();  
  push();
  fill(255, 255, 255);  
  textAlign(CENTER);
  text("GANASTE", ancho_pantalla / 2, alto_nave * 2); 
  pop();
  botonVolver();
}
function pantallaInstrucciones(){
  rect(ancho_nave, alto_nave, ancho_pantalla - ancho_nave * 2, alto_pantalla - alto_nave * 2);    //dibujar fonde de juego
  push();
  fill(255, 255, 255);  
  textSize(alto_nave);
  text("INSTRUCCIONES", ancho_pantalla / 2 - ancho_nave * 3, alto_nave * 2);
  textSize(alto_nave*0.6);
  text("-PARA MOVER LA NAVE HACIA\n LA IZQUIERDA O DERECHA\n MUEVA EL MOUSE\n\n-PARA DISPARAR EL LASER\n HAGA CLIC\n\n-SE GANA EL JUEGO\n ELIMINANDO A TODOS LOS ENEMIGOS\n\n-SE PIERDE EL JUEGO\n DEJANDO QUE ALGUN ENEMIGO\n LLEGUE AL NIVEL DE LA NAVE\n\n-PARA FORZAR UN REINICIO\n PRESIONE LA TECLA R", ancho_nave * 2, alto_nave * 4);    
  pop();
  botonVolver();
}
function pantallaMenu(){
  opcion = 0;
  limpiarPantalla();
  push();
  fill(255,255,255);
  textAlign(CENTER);
  text("JUGAR", ancho_pantalla / 2, alto_pantalla / 2 - alto_pantalla / 2 / 4);
  if (puntoEnZonaRectangular(mouseX, mouseY, ancho_pantalla / 2 - textWidth("JUGAR") / 2, alto_pantalla / 2 - alto_pantalla / 2 / 4 - textSize(), textWidth("JUGAR"), textSize())){ // textAlign no afecta a rect Mode por lo que se tendra en cuenta que se dibujan la misma cantidad de caracteres en el lado izuqierdo como en el lado derecho de la mitad d ela pantalla
    circle(ancho_pantalla / 2 - textWidth("JUGAR") / 2 - textSize(), alto_pantalla / 2 - alto_pantalla / 2 / 4 - textSize()/2 + 5, textSize());       
    opcion = 1;    
  }  
  text("INSTRUCCIONES", ancho_pantalla / 2, alto_pantalla / 2);
  if (puntoEnZonaRectangular(mouseX, mouseY, ancho_pantalla / 2 - textWidth("INSTRUCCIONES") / 2, alto_pantalla / 2 - textSize(), textWidth("INSTRUCCIONES"), textSize())){
    circle(ancho_pantalla / 2 - textWidth("INSTRUCCIONES") / 2 - textSize(),alto_pantalla / 2 - textSize()/2 + 5, textSize());
    opcion = 2;
  }
  text("CREDITOS", ancho_pantalla / 2, alto_pantalla / 2 + alto_pantalla / 2 / 4);  
  if (puntoEnZonaRectangular(mouseX, mouseY, ancho_pantalla / 2 - textWidth("CREDITOS") / 2, alto_pantalla / 2 + alto_pantalla / 2 / 4 - textSize(), textWidth("CREDITOS"), textSize())){
    circle(ancho_pantalla / 2 - textWidth("CREDITOS") / 2 - textSize(), alto_pantalla / 2 + alto_pantalla / 2 / 4 - textSize()/2 + 5, textSize());
    opcion = 3;
  }
  pop();
}
function pantallaCreditos(){
  limpiarPantalla();
  push();
  fill(255,255,255);
  textAlign(CENTER);
  text("ALUMNO: VEGA SALAZAR DIEGO\n\nLegajo: 93094/4\n\nJUEGO BASE: SPACE INVADERS", ancho_pantalla / 2, alto_pantalla / 2 - alto_pantalla / 2 / 4);
  pop();
  botonVolver();
}
function reiniciarValores(){  
  jugando = false;
  game_over = false;
  puntaje = 0;
  avance = 1;   
  disparo_proyectil = false;
  impacto_proyectil = true;
  posY_proyectil = alto_pantalla - alto_nave * 2 - alto_proyectil * 2;
  opcion = 0;
  for(let i = 0; i < 10; i++){      
    enemigos[i][0] = 0 - ancho_nave - i * ancho_nave;
    enemigos[i][1] = alto_nave;
    enemigos[i][2] = ancho_nave;
    enemigos[i][3] = alto_nave;
    //enemigos[i][4] = //Al no haber cambio de color durante el juego los colores permanecen sin cambios
    //enemigos[i][5] =
    //enemigos[i][6] =
    enemigos[i][7] = 1;
  }  
}
function limpiarPantalla(){//limpia lo escrito en el fondo(score: ...) y todo lo escrito dentro del rectangulo negro que forma la pantalla
  rect(ancho_nave, alto_nave, ancho_pantalla - ancho_nave * 2, alto_pantalla - alto_nave * 2);    //dibujar pantalla
  push();
  noStroke();
  fill(14,14,153);
  rect(ancho_nave, 0, ancho_nave * 12, alto_nave*0.95);  //limpiar scrore: ...
  pop();
}
function botonVolver(){
  push();
  fill(255, 255, 255);
  text("VOLVER", ancho_pantalla - ancho_nave - textWidth("VOLVER") - ancho_nave, alto_pantalla - alto_nave * 2);
  if (puntoEnZonaRectangular(mouseX, mouseY, ancho_pantalla - ancho_nave - textWidth("VOLVER") - ancho_nave, alto_pantalla - alto_nave - alto_nave - textSize(), textWidth("VOLVER"), textSize())){
    circle(ancho_pantalla - ancho_nave - textWidth("VOLVER") - ancho_nave - 5 - textSize(), alto_pantalla - alto_nave * 2 - textSize() / 2 + 5, textSize());
  }
  pop();
}
