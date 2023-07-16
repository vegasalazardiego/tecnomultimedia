//Apellido y Nombre: Vega Salazar Diego
//legajo: 93094/4
//comisión 1
//https://youtu.be/F_KYtPlAZX4
//Flujo de eleccion de la historia elegida: 1, 2, 3, 6, 10, 12, 20, 8.  
PImage imagen_boton, imagen_fondo1, imagen_fondo2;
boolean boton_decision1_activado, boton_decision2_activado;
PFont fuente_texto;
int cant_pantallas = 23;
PImage [] imagenes = new PImage[cant_pantallas];
int [][] formato_pantalla = new int[cant_pantallas][3]; //segunda dimension: [0] = formato_pagina; [1] = siguiente pantalla por decicion 1; [2] = siguiente pantalla por desicion 2
String [] textos = {
/*0*/     "LA PRADERA", //pantalla principal
/*1*/     "Comienzas a notar que la obsercion de tus hijos por la pradera comienza a crecer y planeas limitar su acceso al cuarto de juegos.",
/*2*/     "Peter y Wendy se pusieron furiosos y quedaron resentidos cuando les quitaste el acceso al cuarto de juegos y por ende a la pradera.\n Los infantes comienzan a tramar un plan para vengarse.",
/*3*/     "Durante tu dicusion, los infantes se rehusaron a escucharte o comprender tus preocupaciones.\n Por el contrario se volvieron mas desafiantes y rebeldes.",
/*4*/     "Descubres que la pradera se a tornado un lugar peligroso, reflejando los pensamientos violentos y vengativos de los infantes. Los leones simulados se aproximan a ti como su fueras su presa.",
/*5*/     "La obsecion de los infantes con la pradera se intensifico, perdieron contacto con la realidad y dejaron de hablarte por completo.",
/*6*/     "Consultas con un psicologo el cual te advierte sobre los peligros de esta obsecion de los infantes. El psicologo te sugiere desconectar el cuarto de juegos.",
/*7*/     "Mientras te sumerges en la pradera, la simuacion comiensa a atraparte. Tu mente quedo atrapada y el cuarto de juegos comienza a mostrarte tus deseos y pensamientos.",
/*8*/     "Pese a tus esfuerzos, los leones te superan en numero y fuerza. Tus intentos de pelear son inutiles, llevandote a un tragico fin.\n\nEL FIN",
/*9*/     "Los leones, te entienden y dejan de atacarte. Se vuelven dociles ratoncitos, permitiendote escaoar de la pradera.",
/*10*/    "Con el cuarto de juegos desconectado, los infantes, enfurecidos, traman una venganza.",
/*11*/    "Pruebas varios metodos alternativos para reconectar con tus hijos, tales como pasar tiempo con ellos o buscando ayuda terapeutica.",
/*12*/    "Confrontar a los infantes solo los hace ser mas hostiles.\n Manipulan la casa tecnologia de la casa para que se vuelva en tu contra.",
/*13*/    "Con un gran esfuerzo, logras librarte del control del cuarto de juegos. Vuelves a la realidad y comprendes los peligros que implican estas simulaciones.",
/*14*/    "Sucumbiste por completo a la influencia del cuarto de juegos, perdiendo contanto con la realidad. El cuarto de juegos te consume y quedas atrapado para siempre.\n EL FIN",
/*15*/    "Comprendiendo la naturaleza destructiva generada en la pradera, decides desconectar toda la tecnologia presente en la casa. Te enfocas en reconstruir tu relación con tus hijos.\n\nEL FIN",
/*16*/    "Tras haber expicado de manera detallada y clara, los infantes comienzan a entender tu punto de vista. Ellos comprenden la obsecion y el daño que han causado. Juntos deciden desconectar el cuarto de juegos y trabajan para reconstruir su relacion.\n EL FIN",
/*17*/    "Tus esfuerzos por reconectar y pasar tiempo con tus hijos han funcionado. Ellos gradualmente dejan de usar el cuarto de juegos y comienzan a interesarse por el mundo real. Felicidades, has acabado con la pradera y restaurado la armonia en tu familia.\n EL FIN",
/*18*/    "Pese a tus intentos, la obsecion de los infantes se vuelve aun peor. Los infantes han sido consumidos por la simulacion de la pradera, llevandolos a un tragico final.\n EL FIN",
/*19*/    "Te las arreglaste para evitar la manipulacion de los infantes y recobraste el control de la casa. Tras ver las consecuencias de su obsecion, los infantes reconocen los peligros que la habitacion representa. \nEL FIN",
/*20*/    "Te encuentras atrapado en el cuarto de juegos y tras un tiempo comprendes que la simulacion se torno realidad. Los leones se acercan",
/*21*/    "Nombre y apellido del alumno: DIEGO VEGA SALAZAR\n Obra: LA PRADERA \n AUTOR DE LA OBRA: RAY BRADBURY",
/*22*/     "Situacion actual:\n Eres el padre de dos infantes, Peter y Wendy, quienes viven en una casa futurista equipada con un avanzado cuarto de juegos capaz simular lo que imaginen los infantes. Los infantes comenzaron a pasar su tiempo en una simulacion de la pradera africana. Sin embargo comienzan a obsercionarse con la pradera y esta se vuelve cada vez mas detallada e inmersiva. Los infantes comienzan a distanciarse de sus padres." 
};
String [] decision1 = {
/*0*/     "ABRIR LIBRO",//pantalla principal
/*1*/     "Si decides quitarles el acceso, pasa a la pagina 2",
/*2*/     "Si sospechas de su plan e investigas sobre el asunto, pasa a la pagina 4",
/*3*/     "Si decides buscar ayuda profesional para tratar su obcesion, pasa a la pagina 6",
/*4*/     "Si te enfrentas a los leones, pasa a la pagina 8",
/*5*/     "Si eliges desconectar el cuarto de juegos, pasa a la pagina 10",
/*6*/     "Si sigues su concejo profesional, pasa a la pagina 10",
/*7*/     "Si te luchas contra su influencia, pasa a la pagina 13",
/*8*/     "Volver al comienzo del libro",
/*9*/     "Pasa a la pagina 15.",
/*10*/    "Si los enfrentas de defrente, pasa a la pagina 12",
/*11*/    "Si estos esfuerzos dieron frutos, pasa a la pagina 17",
/*12*/    "Si evitas la manipulacion de la casa, pasa a la pagina 19",
/*13*/    "Pasa a la pagina 15",          
/*14*/    "Volver al comienzo del libro",
/*15*/    "Volver al comienzo del libro",
/*16*/    "Volver al comienzo del libro",
/*17*/    "Volver al comienzo del libro",
/*18*/    "Volver al comienzo del libro",
/*19*/    "Volver al comienzo del libro", 
/*20*/    "Pasa a la pagina 8",
/*21*/    "Volver al comienzo del libro",
/*22*/    "Pasa a la siguiente pagina"//ultima decision
};
String [] decision2 = {
/*0*/     "CREDITOS", //pantalla principal
/*1*/     "Si decides confrontarlos y discutir su comportamiento, pasa a la pagina 3",
/*2*/     "Si ignoras su comportamiento y esperas que todo se resuelva solo, pasa a la pagina 5",
/*3*/     "Si decides comprer su perspectiva sumergiendote en la pradera, pasa a la pagina 7",
/*4*/     "Si intentas razonar con los leones, pasa a la pagina 9",
/*5*/     "Si intentas reconectar con tus hijos con metodos alternativos, pasa a la pagina 11",
/*6*/     "Si decides confrontar a tus hijos directamente, pasa a la pagina 12",
/*7*/     "Si te rindes al control del cuarto de juegos, pasa a la pagina 14",
/*8*/     "",
/*9*/     "",
/*10*/    "Si razonas con ellos para que comprendan sus acciones, pasa a la pagina 16",
/*11*/    "Si los infantes siguen sin reaccionar y obserción continua escalando, pasa a la pagina 18",
/*12*/    "Si eres victima de su venganza, pasa a la pagina 20",
/*13*/    "",
/*14*/    "",
/*15*/    "",
/*16*/    "",
/*17*/    "",
/*18*/    "",
/*19*/    "",
/*20*/    "",
/*21*/    "",
/*22*/    "decision2-1"//ultima decision
};
int pantalla_actual, pantalla_decision1, pantalla_decision2;
int margen_superior = 30;
int margen_inferior = 20;
int margen_lateral_izquierdo = 40;
int margen_lateral_derecho = 20;
float posX_imagen, posY_imagen, ancho_imagen, alto_imagen;
float posX_texto, posY_texto, ancho_texto, alto_texto, tam_fuente_texto;
float posX_texto_decision, posY_texto_decision, ancho_texto_decision, alto_texto_decision, tam_fuente_texto_decision;
float posX_boton, posY_boton, ancho_boton, alto_boton;

void setup(){
  size(600, 600);  
  fuente_texto = loadFont("Microsoft_Himalaya-48.vlw");  
  cargar_formatos();
  cargar_imagenes();  
  pantalla_actual = 0;  
  textFont(fuente_texto);
  fill(0);  
}
void draw(){  
  aplicarFormato(formato_pantalla[pantalla_actual][0]);    
  pantalla_decision1 = formato_pantalla[pantalla_actual][1];
  pantalla_decision2 = formato_pantalla[pantalla_actual][2];
  if (pantalla_actual != 0){        
    if (formato_pantalla[pantalla_actual][0] > 2){
      image(imagen_fondo1, 0, 0, width, height);
    }else{
      image(imagen_fondo2, 0, 0, width, height);
    }
    if (pantalla_actual != cant_pantallas-1){
      textSize(tam_fuente_texto*1.2);      
      text(pantalla_actual, width - margen_lateral_derecho - textWidth("99"), 0 + margen_superior - 5);      
    }
  }   
  image(imagenes[pantalla_actual], posX_imagen, posY_imagen, ancho_imagen, alto_imagen);    
  textSize(tam_fuente_texto);
  text(textos[pantalla_actual], posX_texto, posY_texto, ancho_texto, alto_texto);
        
    textSize(tam_fuente_texto_decision);
    text(decision1[pantalla_actual], posX_texto_decision, posY_texto_decision, ancho_texto_decision, alto_texto_decision);  
    image(imagen_boton, posX_boton, posY_boton, ancho_boton, ancho_boton);
    
  if (pantalla_decision2 != -1){    
    text(decision2[pantalla_actual], posX_texto_decision, posY_texto_decision + alto_texto_decision + 22, ancho_texto_decision, alto_texto_decision);
    image(imagen_boton, posX_boton, posY_boton + alto_texto_decision + 22, ancho_boton, ancho_boton);
    boton_decision2_activado = true;
  }  
}
boolean enZona(float posX, float posY, float diametro){
  boolean resultado = false;
  if (dist(posX+diametro/2, posY+diametro/2, mouseX, mouseY) < diametro/2){
    resultado = true;  
  }
  return resultado;
}
void cargar_formatos(){
  formato_pantalla[0][0] = 0;
  formato_pantalla[0][1] = cant_pantallas - 1;
  formato_pantalla[0][2] = 21;
  
  formato_pantalla[1][0] = 1;
  formato_pantalla[1][1] = 2;
  formato_pantalla[1][2] = 3;
  
  formato_pantalla[2][0] = 3;
  formato_pantalla[2][1] = 4;
  formato_pantalla[2][2] = 5;
  
  formato_pantalla[3][0] = 4;
  formato_pantalla[3][1] = 6;
  formato_pantalla[3][2] = 7;
  
  formato_pantalla[4][0] = 4;
  formato_pantalla[4][1] = 8;
  formato_pantalla[4][2] = 9;
  
  formato_pantalla[5][0] = 2;
  formato_pantalla[5][1] = 10;
  formato_pantalla[5][2] = 11;
  
  formato_pantalla[6][0] = 3;
  formato_pantalla[6][1] = 10;
  formato_pantalla[6][2] = 12;
  
  formato_pantalla[7][0] = 2;
  formato_pantalla[7][1] = 13;
  formato_pantalla[7][2] = 14;
  
  formato_pantalla[8][0] = 3;
  formato_pantalla[8][1] = 0;
  formato_pantalla[8][2] = -1;
  
  formato_pantalla[9][0] = 2;
  formato_pantalla[9][1] = 15;
  formato_pantalla[9][2] = -1;
  
  formato_pantalla[10][0] = 3;
  formato_pantalla[10][1] = 12;
  formato_pantalla[10][2] = 16;
  
  formato_pantalla[11][0] = 3;
  formato_pantalla[11][1] = 17;
  formato_pantalla[11][2] = 18;
  
  formato_pantalla[12][0] = 3;
  formato_pantalla[12][1] = 19;
  formato_pantalla[12][2] = 20;
  
  formato_pantalla[13][0] = 1;
  formato_pantalla[13][1] = 15;
  formato_pantalla[13][2] = -1;
  
  formato_pantalla[14][0] = 3;
  formato_pantalla[14][1] = 0;
  formato_pantalla[14][2] = -1;
  
  formato_pantalla[15][0] = 3;
  formato_pantalla[15][1] = 0;
  formato_pantalla[15][2] = -1;
  
  formato_pantalla[16][0] = 3;
  formato_pantalla[16][1] = 0;
  formato_pantalla[16][2] = -1;
  
  formato_pantalla[17][0] = 2;
  formato_pantalla[17][1] = 0;
  formato_pantalla[17][2] = -1;
  
  formato_pantalla[18][0] = 4;
  formato_pantalla[18][1] = 0;
  formato_pantalla[18][2] = -1;
  
  formato_pantalla[19][0] = 3;
  formato_pantalla[19][1] = 0;
  formato_pantalla[19][2] = -1;
  
  formato_pantalla[20][0] = 3;
  formato_pantalla[20][1] = 8;
  formato_pantalla[20][2] = -1;
  
  formato_pantalla[21][0] = 1;
  formato_pantalla[21][1] = 0;
  formato_pantalla[21][2] = -1;
  
  formato_pantalla[cant_pantallas - 1][0] = 3;
  formato_pantalla[cant_pantallas - 1][1] = 1;
  formato_pantalla[cant_pantallas - 1][2] = -1;
  
}
void cargar_imagenes(){  
  for (int i = 0; i < cant_pantallas; i++){
      imagenes[i] = loadImage("imagen"+ i +".png");              
  }
  imagen_boton = loadImage("flecha_derecha.png");
  imagen_fondo1 = loadImage("imagen_fondo_1.png");
  imagen_fondo2 = loadImage("imagen_fondo_2.png");
}
void aplicarFormato(int formato){
  if (formato == 0){     
    ancho_imagen = 600;
    alto_imagen = 600;
    posX_imagen = 0;
    posY_imagen = 0;        
        
    ancho_texto = (width/2) * 0.9;
    alto_texto = 22 * 2;
    posX_texto = width/2 - ancho_texto/2;
    posY_texto = height/2/2 - alto_texto/2;
    tam_fuente_texto = 60;
           
    ancho_texto_decision = (width/2) * 0.6; //hecho
    alto_texto_decision = 30; 
    posX_texto_decision = width/2;
    posY_texto_decision = height - margen_inferior - alto_texto_decision - 22 *2.5;
    tam_fuente_texto_decision = 40;
    
    ancho_boton = 40;
    alto_boton = 40;
    posX_boton = width/2 + ancho_texto_decision;
    posY_boton = height - margen_inferior - alto_boton - 22*2.5;
    
  }else if (formato == 1){                                
    ancho_texto = width - margen_lateral_izquierdo - margen_lateral_derecho; //hecho
    alto_texto = (height - margen_superior - margen_inferior) * 0.3;
    posX_texto = 0 + margen_lateral_izquierdo;
    posY_texto = 0 + margen_superior;
    tam_fuente_texto = 32;
                
    ancho_texto_decision = (width/2) * 0.7; //hecho
    alto_texto_decision = 22 * 2.5; 
    posX_texto_decision = width/2;
    posY_texto_decision = height - margen_inferior - alto_texto_decision * 2 - 22 ;
    tam_fuente_texto_decision = 25;
    
    ancho_boton = 40; //hecho
    alto_boton = 40;
    posX_boton = width - margen_lateral_derecho - ancho_boton;
    posY_boton = height - margen_inferior - alto_texto_decision * 2 - 22;//+20 alto de una linea
    
    ancho_imagen = width - margen_lateral_izquierdo - margen_lateral_derecho; //hecho
    alto_imagen = (height - margen_superior - margen_inferior) *0.4;
    posX_imagen = 0 + margen_lateral_izquierdo;
    posY_imagen = height - margen_inferior - alto_texto_decision * 2 - 22 - alto_imagen - 20;//+20 alto de una linea
    
  }else if(formato == 2){
    ancho_imagen = width - margen_lateral_izquierdo - margen_lateral_derecho; //hecho
    alto_imagen = (height - margen_superior - margen_inferior) * 0.4;
    posX_imagen = 0 + margen_lateral_izquierdo;
    posY_imagen = 0 + margen_superior;
                
    ancho_texto_decision = (width/2) * 0.7; //hecho
    alto_texto_decision = 22 * 2.5; 
    posX_texto_decision = width/2;
    posY_texto_decision = height - margen_inferior - alto_texto_decision * 2 - 22 ;
    tam_fuente_texto_decision = 25;
    
    ancho_boton = 40; //hecho
    alto_boton = 40;
    posX_boton = width - margen_lateral_derecho - ancho_boton;
    posY_boton = height - margen_inferior - alto_texto_decision * 2 - 22;//+20 alto de una linea
    
    ancho_texto = width - margen_lateral_izquierdo - margen_lateral_derecho; //hecho
    alto_texto = (height - margen_superior - margen_inferior) *0.3;
    posX_texto = 0 + margen_lateral_izquierdo;
    posY_texto = height - margen_inferior - alto_texto_decision * 2 - 22 - alto_texto - 22;//+20 alto de una linea
    tam_fuente_texto = 32;
  }else if (formato == 3){
    ancho_imagen = width/2 - margen_lateral_izquierdo - margen_lateral_derecho; //hecho
    alto_imagen = height - margen_superior - margen_inferior;
    posX_imagen = 0 + margen_lateral_izquierdo;
    posY_imagen = 0 + margen_superior;
                
    ancho_texto_decision = (width/2) * 0.7; //hecho
    alto_texto_decision = 22 * 2.5; 
    posX_texto_decision = width/2 + margen_lateral_izquierdo;
    posY_texto_decision = height - margen_inferior - alto_texto_decision * 2 - 22 ;
    tam_fuente_texto_decision = 23;
    
    ancho_boton = 20; //hecho
    alto_boton = 20;
    posX_boton = width - margen_lateral_derecho - ancho_boton;
    posY_boton = height - margen_inferior - alto_texto_decision * 2 - 22;//+20 alto de una linea
    
    ancho_texto = (width/2) - margen_lateral_izquierdo - margen_lateral_derecho; //hecho
    alto_texto = height - margen_superior - margen_inferior - alto_texto_decision * 2 - 22 - 22;
    posX_texto = width/2 + margen_lateral_izquierdo;
    posY_texto = 0 + margen_superior;//+20 alto de una linea
    tam_fuente_texto = 30;
  }else if (formato == 4){
    ancho_imagen = width/2 - margen_lateral_izquierdo - margen_lateral_derecho; //hecho
    alto_imagen = height - margen_superior - margen_inferior;
    posX_imagen = width/2 + margen_lateral_izquierdo;
    posY_imagen = 0 + margen_superior;
                
    ancho_texto_decision = (width/2) * 0.7; //hecho
    alto_texto_decision = 22 * 2.5; 
    posX_texto_decision = 0 + margen_lateral_izquierdo;
    posY_texto_decision = height - margen_inferior - alto_texto_decision * 2 - 22 ;
    
    ancho_boton = 20; //hecho
    alto_boton = 20;
    posX_boton = width/2 - margen_lateral_derecho - ancho_boton;
    posY_boton = height - margen_inferior - alto_texto_decision * 2 - 22;//+20 alto de una linea
    
    ancho_texto = (width/2) - margen_lateral_izquierdo - margen_lateral_derecho; //hecho
    alto_texto = height - margen_superior - margen_inferior - alto_texto_decision * 2 - 22 - 22;
    posX_texto = 0 + margen_lateral_izquierdo;
    posY_texto = 0 + margen_superior;//+20 alto de una linea
  }
}
void mousePressed(){
  if (enZona(posX_boton, posY_boton, ancho_boton)){
    pantalla_actual = pantalla_decision1;    
  }else if(enZona(posX_boton, posY_boton + alto_texto_decision + 22, ancho_boton) && (pantalla_decision2 != -1)){
      pantalla_actual = pantalla_decision2;        
  }
}
