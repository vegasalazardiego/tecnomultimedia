//Apellido y Nombre: Vega Salazar Diego
//legajo: 93094/4
//comisión 1
//https://youtu.be/z7Vaj8IVwpU

int tam_rect = 20;
int tam_ellipse = 6;
int distancia_borde = 2;
float porcentaje_disminucion;
PImage img1;
float avance = 0;
float cant = 1;
float vel = 0;
color color1;
color color2;
color color_fondo;
boolean color1_activo;
boolean dibujando = true;

void setup() {
  size(800, 400);          
  img1 = loadImage("dancingFrameV2.png");
  img1.resize(400,400);
  image(img1, 0, 0);
  noStroke();     
  porcentaje_disminucion = calcularPorcentajeDisminucion(tam_rect, 13);
  setearColores(0);         
}
void draw(){
  fill(color_fondo);
  rect(width/2, 0, 400, 400);
  translate(width/4*3, 10);
  rotate(radians(45));
  dibujando = true;    
  for (int i = 0; i< 4; i++){
    color1_activo = true;
    for (int x = 0; x < tam_rect * 2; x += tam_rect){    //Columnas
      for (int y = 0; y < tam_rect * 11; y += tam_rect){    //Filas  
        dibujarCuadrado(x, y, tam_rect, color1_activo);
        push();
        translate(tam_rect * 2, tam_rect * 6 + tam_rect / 2);
        rotate(radians(-45));
        dibujarCuadrado(x * porcentaje_disminucion, y * porcentaje_disminucion, tam_rect * porcentaje_disminucion, color1_activo);
        pop();
        if ((y < tam_rect * 4) || (y == tam_rect * 8)){
          dibujarPuntos(tam_rect, tam_ellipse, distancia_borde, x, y, avance, "X-opuestos-arriba-abajo", color1_activo);
          push();
          translate(tam_rect*2, tam_rect * 6 + tam_rect / 2);
          rotate(radians(-45));        
          dibujarPuntos(tam_rect * porcentaje_disminucion, tam_ellipse * porcentaje_disminucion, distancia_borde * porcentaje_disminucion, x * porcentaje_disminucion, y * porcentaje_disminucion, avance * porcentaje_disminucion, "X-opuestos-abajo-arriba", color1_activo);
          pop();
        }else if((y == tam_rect * 4) || (y == tam_rect * 9)){        
          dibujarPuntos(tam_rect, tam_ellipse, distancia_borde, x, y, avance, "X-Paralelos-izquierda-derecha", color1_activo);
          push();        
          translate(tam_rect*2, tam_rect * 6 + tam_rect / 2);
          rotate(radians(-45));        
          dibujarPuntos(tam_rect * porcentaje_disminucion, tam_ellipse * porcentaje_disminucion, distancia_borde * porcentaje_disminucion, x * porcentaje_disminucion, y * porcentaje_disminucion, avance * porcentaje_disminucion, "X-Paralelos-derecha-izquierda", color1_activo);
          pop();
        }else if((y == tam_rect * 5) || (y == tam_rect * 6) || (y == tam_rect * 10)){        
          dibujarPuntos(tam_rect, tam_ellipse, distancia_borde, x, y, avance, "X-opuestos-abajo-arriba", color1_activo);
          push();        
          translate(tam_rect*2, tam_rect * 6 + tam_rect / 2);
          rotate(radians(-45));        
          dibujarPuntos(tam_rect * porcentaje_disminucion, tam_ellipse * porcentaje_disminucion, distancia_borde * porcentaje_disminucion, x * porcentaje_disminucion, y * porcentaje_disminucion, avance * porcentaje_disminucion, "X-opuestos-arriba-abajo", color1_activo);
          pop();
        }else{
          dibujarPuntos(tam_rect, tam_ellipse, distancia_borde, x, y, avance, "X-Paralelos-derecha-izquierda", color1_activo);
          push();        
          translate(tam_rect*2, tam_rect * 6 + tam_rect / 2);
          rotate(radians(-45));        
          dibujarPuntos(tam_rect * porcentaje_disminucion, tam_ellipse * porcentaje_disminucion, distancia_borde * porcentaje_disminucion, x * porcentaje_disminucion, y * porcentaje_disminucion, avance * porcentaje_disminucion, "X-Paralelos-izquierda-derecha", color1_activo);
          pop();
        }
        color1_activo = !color1_activo;      
      }
    }
    translate(0, tam_rect * 13);
    rotate(radians(-90));
  }       
  dibujando = false;
  avance += cant * vel;
  if (avance > 9 || avance < 0){ //9 = cantidad maxima de pixeles libres en lo que puede avanzar un punto.
     cant = cant * (-1);
  }  
  
}

float calcularPorcentajeDisminucion(int tam_cuadradito_exterior,int cant_cuadraditos){  
  float tam_cuadradito_interior;
  tam_cuadradito_interior = dist(tam_rect * 2, tam_rect*6 + tam_rect/2, tam_rect * 6 + tam_rect/2, tam_rect * 2) / cant_cuadraditos; //Se determina el tamnio de cada cuadradito  
  return (tam_cuadradito_interior * 100 / tam_cuadradito_exterior) / 100;  //Se devuelve el porcentaje por el cual se debe multiplicar el tamanio del cuadrado normal para obtener un cuadradito.
}

void dibujarCuadrado(float x, float y, float tam_rect, boolean color_1){  
  if (color_1 == true){
    fill(color1);
  }else{
    fill(color2);
  }  
  rect(x, y, tam_rect, tam_rect);    
}

void setearColores(int patron){ //Eleccion del color de los cuadrados, puntos y fondo de pantalla.
  if (patron == 0){
    color_fondo = color(16, 189, 209);
    color1 = color(255, 255, 255);
    color2 = color(0, 0, 0);
  }else if(patron == 1){   //colores funcionan ilucion
    color_fondo = color(16, 189, 209);
    color1 = color(177, 179, 185);
    color2 = color(41, 96, 117);
  }
  else if(patron == 2){    //colores funcionan ilucion
    color_fondo = color(16, 189, 209);
    color1 = color(155, 187, 226);
    color2 = color(194, 64, 151);
  }
  else if(patron == 3){    // colores funciona como ilucion
    color_fondo = color(16, 189, 209);
    color1 = color(188, 224, 173);
    color2 = color(240, 84, 59);
  }else{ //colores funcionan como ilucion
    color_fondo = color(16, 189, 209);
    color1 = color(255, 228, 39);
    color2 = color(12, 163, 91);
  }
}
void keyPressed(){  //control de acciones sobre la imagen; velocidad de movimiento de los puntos, color de cuadrados y puntos
  if ((key == 'w') || (key == 'W')){    
    if ((dibujando == false) && (vel < 1)){      
      vel += 0.25;
    }
  }else if((key == 's') || (key == 'S')){
    if ((dibujando == false) && (vel > 0)){      
      vel -= 0.25;
    }
  }else if((key == 'd') || (key == 'D')){
    if (dibujando == false){
      setearColores(round(random(5)));
    }
  }else if((key == 'a') || (key == 'A')){ //reinicio de variables al estado inicial
    if (dibujando == false){
      vel = 0;
      avance = 0;
      setearColores(0);
    }
  }  
}

void dibujarPuntos(float tam_cuadrado, float tam_punto, float dist_borde, float posX, float posY, float desplazamiento, String direccion, boolean color_1){  
  if (color_1 == true){ //Se pregunta si el color actual del cuadrado en que se dibujaran los circulos es el color1 y se actua en consecuencia para dibujar el punto con un color distinto al del cuadrado
    fill(color2);
  }else{
    fill(color1);
  }
  if (direccion.equals("X-opuestos-arriba-abajo")){    
    ellipse(posX + dist_borde + tam_punto/2, posY + dist_borde + tam_punto/2 + desplazamiento, tam_punto, tam_punto);  
    ellipse(posX + tam_cuadrado - dist_borde - tam_punto/2, posY + tam_cuadrado - dist_borde - tam_punto/2 + desplazamiento * (-1), tam_punto, tam_punto); 
  }else if(direccion.equals("X-opuestos-abajo-arriba")){    
    ellipse(posX + dist_borde + tam_punto/2, posY + tam_cuadrado - dist_borde - tam_punto/2 + desplazamiento * (-1), tam_punto, tam_punto);   
    ellipse(posX + tam_cuadrado - dist_borde - tam_punto/2, posY + dist_borde + tam_punto/2 + desplazamiento, tam_punto, tam_punto);       
  }else if(direccion.equals("X-Paralelos-izquierda-derecha")){    
    dibujarPuntosParalelosDeIzquierdaHaciaDerecha(tam_cuadrado, tam_punto, dist_borde, posX, posY, desplazamiento);
  }else if(direccion.equals("X-Paralelos-derecha-izquierda")){
    dibujarPuntosParalelosDeIzquierdaHaciaDerecha(tam_cuadrado, tam_punto, dist_borde, posX + tam_cuadrado - dist_borde * 2 - tam_punto, posY, desplazamiento * (-1));
  }  
}
void dibujarPuntosParalelosDeIzquierdaHaciaDerecha(float tam_cuadrado, float tam_punto, float dist_borde, float posX, float posY, float desplazamiento){
  ellipse(posX + dist_borde + tam_punto/2 + desplazamiento, posY + dist_borde + tam_punto/2, tam_punto, tam_punto);  
  ellipse(posX + dist_borde + tam_punto/2 + desplazamiento, posY + tam_cuadrado - dist_borde - tam_punto/2, tam_punto, tam_punto);    
}
