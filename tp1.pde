int botonPosX, botonPosY, ancho, alto;
String botonText;
String contenido;
int contenidoPosX, contenidoPosY;
int segundos = 0;
boolean play = false;
boolean mostrarBoton = true;
PImage img1, img2, img3, img4, img5, img6;  
float opacidad = 0.0;
float tamanioContenido = 40;
void setup() {  
  size(640, 480);  
  img1 = loadImage("escena1.jpg");
  img1.resize(640, 480);
  img2 = loadImage("escena2.png");
  img2.resize(640, 480);
  img3 = loadImage("escena3.jpg");
  img3.resize(640, 480);
  img4 = loadImage("escena4.jpg");
  img4.resize(640, 480);
  img5 = loadImage("escena5.png");
  img5.resize(640, 480);
  img6 = loadImage("escena6.jpg");
  img6.resize(640, 480);
  PFont font;  
  font = loadFont("Arial-BoldMT-48.vlw");
  textFont(font);
  textAlign(CENTER);
  image(img1, 0, 0);  
  botonPosX = 500;
  botonPosY = 380;
  ancho = 106;
  alto = 40;
  fill(38, 110, 242);
  rect(botonPosX, botonPosY, ancho, alto, 128);
  textSize(24);
  botonText = "Iniciar";
  fill(255);  
  text(botonText, botonPosX + (ancho/2), botonPosY + 2 * (alto/3));  
}
void draw() {   
  if (play == true){    
    segundos++;
    //configuraciones fijas
    if (segundos == 1){ //efecto Aparecer
      opacidad = 0.0;
      textSize(tamanioContenido); 
      image(img1, 0, 0);
      contenidoPosX = (width/2);
      contenidoPosY = 2 * (height/6);
      contenido = "El Palacio Barolo es un edificio \n de oficinas ubicado sobre \nla Avenida de Mayo,\n en el barrio de Monserrat,\n en Buenos Aires";      
    }else if (segundos == 20*60){ //efecto mover hacia izquierda sin salir del borde izquierdo
      opacidad = 255.0;
      contenidoPosX = width;
      contenido = "El Palacio Barolo \n hace referencia y homenaje \n a la DIVINA COMEDIA \n de DANTE ALIGHIERI.";
    }else if (segundos == 2 * (20*60)){//efecto aparecer mientras el texto incrementa su tamaño. 
      opacidad = 0.0;
      tamanioContenido = 1;
      contenidoPosX = (width/2);
      contenidoPosY = 2 * (height/6);
      contenido = "En el edificio se cumple \n una relación pitagórica \n en la división original del acceso \n mediante los ascensores.";
    }else{
    }
    ///Configuraciones variables
    if (segundos < 20*60){
      opacidad = opacidad + 0.25;
    }else if((segundos >= 20*60) && (segundos < 2 * (20*60))){
      image(img2, 0, 0);
      if (contenidoPosX > width/2){        
        contenidoPosX = contenidoPosX - 1;
      }
    }else if((segundos >= 2 * (20*60)) && (segundos < 3 * (20*60))){      
      if (tamanioContenido < 40){
        image(img3, 0, 0);
        opacidad = opacidad + 0.6375; // 255 / (tamanio deseado / velocidad de incremente) = 255 / (40 / 0.1)
        tamanioContenido = tamanioContenido + 0.1; // tamanio de fuente deseado / segundos que tarda el agrandamiento)
        textSize(tamanioContenido);      
      }         
    }else{               
      play = false;           
    }    
    //Mostrar texto por pantalla
    fill(255, opacidad);     
    text(contenido, contenidoPosX, contenidoPosY);    
  }else{
    if (segundos != 0){
      mostrarBoton = true;
      //Creacion del boton de reinicio luego de terminar la duracion de la ulima pantalla
      botonPosX = 500;
      botonPosY = 380;
      ancho = 106;
      alto = 40;
      fill(38, 110, 242);
      rect(botonPosX, botonPosY, ancho, alto, 128);
      textSize(24);
      botonText = "Reiniciar";
      fill(255);  
      text(botonText, botonPosX + (ancho/2), botonPosY + 2 * (alto/3));
    }
  }
}
void mousePressed(){
  if ((mouseX > botonPosX && mouseX <botonPosX + ancho && mouseY>botonPosY && mouseY<botonPosY + alto) && (mostrarBoton == true)){
    mostrarBoton = false;
    if (segundos == 0){
      play = true;       
    }else{
      segundos = 0;
      //creacion boton iniciar
      image(img1, 0, 0);  
      botonPosX = 500;
      botonPosY = 380;
      ancho = 106;
      alto = 40;
      fill(38, 110, 242);
      rect(botonPosX, botonPosY, ancho, alto, 128);
      textSize(24);
      botonText = "Iniciar";
      fill(255);  
      text(botonText, botonPosX +  (ancho/2), botonPosY + 2 * (alto/3));
      tamanioContenido = 40;
      mostrarBoton = true;
    }
  }
}
