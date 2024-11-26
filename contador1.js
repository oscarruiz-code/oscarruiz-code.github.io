//INICIALIIZACION DE VARIABLES PARA EL FUNCIONAMIENTO DEL JUEGO

const color_fondo = document.getElementById('color_fondo');
const numero = document.getElementById('numero');
let victoriasp3 = 0;
let victoriasp4 = 0;


let cantidad = 10;
let cantidad1 = 1;
let cantidad2 = 4;
let cantidad3 = 1;


//PRIMER TEMPORIZADOR QUE INICIA EL JUEGO
let tiempo = setInterval(() => {
cantidad -= 1;

numero.textContent = cantidad;
if (jugador1 != ""  && computadora != ""  ){
    cantidad=0;
}

if (cantidad === 0) {

    clearInterval(tiempo);

   
    if (jugador1 === 'piedra') {
        document.querySelector('.puño1').setAttribute('style', 'display: flex;');       
      } else if (jugador1 === 'papel') { 
        document.querySelector('.papel1').setAttribute('style', 'display: flex;');
      } else if (jugador1 === 'tijera') {
        document.querySelector('.tijera1').setAttribute('style', 'display: flex;');
      }
      if (computadora === 'piedra') {
        document.querySelector('.puño2').setAttribute('style', 'display: flex;');       
      } else if (computadora === 'papel') { 
        document.querySelector('.papel2').setAttribute('style', 'display: flex;');
      } else if (computadora === 'tijera') {
        document.querySelector('.tijera2').setAttribute('style', 'display: flex;');
      }

    determineganador1(); 
    
}

}, 1000);



//SE UTILIZA PARA CONTROLAR LA ANIMACION DE JUGADOR 1 GANA
function jugador1_gana(){
debugger
    document.querySelector('.personaje2').setAttribute('style', 'display: flex;')

    let tiempo1 = setInterval(() => {
        cantidad1 -= 1;
    
        if (cantidad1 === 0) {
            
            clearInterval(tiempo1);
            document.querySelector('.personaje2').setAttribute('style', 'display: none;');
            restablecer1();

        }
    
    }, 1300);
    victoriasp3++;
    cambiarImagenBarra(victoriasp3,'jugador1');

}

//SE UTILIZA PARA CONTROLAR LA ANIMACION DE COMPUTADORA GANA
function computadora_gana(){

    document.querySelector('.personaje11').setAttribute('style', 'display: flex;')

    let tiempo2 = setInterval(() => {
        cantidad2 -= 1;
    
        if (cantidad2 === 0) {
            
            clearInterval(tiempo2);
            document.querySelector('.personaje11').setAttribute('style', 'display: none;');
            restablecer1();
    
        }
    
    }, 1000);

    victoriasp4++;
    cambiarImagenBarra(victoriasp4, 'computadora');

}

//SE UTILIZA PARA CONTROLAR LA ANIMACION DE EMPATE
function empate(){

    document.querySelector('.personaje3').setAttribute('style', 'display: flex;')

    let tiempo3 = setInterval(() => {
        cantidad3 -= 1;
    
        if (cantidad3 === 0) {
            
            clearInterval(tiempo3);
            document.querySelector('.personaje3').setAttribute('style', 'display: none;');
            restablecer1();

        }
    
    }, 1500);

}

//SE UTILIZA PARA RESTABLECER TODO A SU VALOR POR DEFECTO
function restablecer1(){

    cantidad = 10;
    cantidad1 = 1;
    cantidad2 = 4;
    cantidad3 = 1;
    numero.textContent=10;
    document.querySelector('.personaje1').setAttribute('style', 'display: flex;');
    document.querySelector('.personaje').setAttribute('style', 'display: flex;');
    document.querySelector('.boton1').setAttribute('style', 'visibility: visible;');
    document.querySelector('.boton2').setAttribute('style', 'visibility: visible;');
    document.querySelector('.puño1').setAttribute('style', 'display: none;');
    document.querySelector('.puño2').setAttribute('style', 'display: none;');
    document.querySelector('.tijera1').setAttribute('style', 'display: none;');
    document.querySelector('.tijera2').setAttribute('style', 'display: none;');
    document.querySelector('.papel1').setAttribute('style', 'display: none;');
    document.querySelector('.papel2').setAttribute('style', 'display: none;'); 
    document.querySelector('.contador').setAttribute('style', 'visibility: visible;');
    jugador1 = '';
    computadora = opciones[Math.floor(Math.random() * opciones.length)];
    ocultar_botones1();
    restablecer_contador1();
    
}

//SE UTILIZA PARA RESTABLECER EL CONTADOR DE INICIO DEL JUEGO
function restablecer_contador1(){

    let tiempo = setInterval(() => {
    cantidad -= 1;
    numero.textContent = cantidad;
    if (jugador1 != ""  && computadora != ""  ){
        cantidad=0;
    }
    
    if (cantidad === 0) {
    
        clearInterval(tiempo);
    
       
        if (jugador1 === 'piedra') {
            document.querySelector('.puño1').setAttribute('style', 'display: flex;');       
          } else if (jugador1 === 'papel') { 
            document.querySelector('.papel1').setAttribute('style', 'display: flex;');
          } else if (jugador1 === 'tijera') {
            document.querySelector('.tijera1').setAttribute('style', 'display: flex;');
          }
          if (computadora === 'piedra') {
            document.querySelector('.puño2').setAttribute('style', 'display: flex;');       
          } else if (computadora === 'papel') { 
            document.querySelector('.papel2').setAttribute('style', 'display: flex;');
          } else if (computadora === 'tijera') {
            document.querySelector('.tijera2').setAttribute('style', 'display: flex;');
          }
    
        determineganador1(); 
        
    }
    
    }, 1000);
    
}

//SE UTILIZA PARA CONTROLAR LAS IMAGENES DE BARRA DE VIDA SEGUN VICTOTIAS
function cambiarImagenBarra(victorias, tipo) {
  if (tipo === 'jugador1') {
      if (victorias === 1) {
          document.querySelector('.barra2').style.backgroundImage = 'url(barra2.png)';
      } else if (victorias === 2) {
          document.querySelector('.barra2').style.backgroundImage = 'url(barra4.png)';
      } else if (victorias === 3) {
          document.querySelector('.barra2').style.backgroundImage = 'url(barra3.png)';
          setTimeout(() => {
              alert('¡Jugador 1 gana el juego completo!');
              redirigirAFinDelJuego();
          }, 4000);
      }
  } else if (tipo === 'computadora') {
      if (victorias === 1) {
          document.querySelector('.barra1').style.backgroundImage = 'url(barra2.png)';
      } else if (victorias === 2) {
          document.querySelector('.barra1').style.backgroundImage = 'url(barra4.png)';
      } else if (victorias === 3) {
          document.querySelector('.barra1').style.backgroundImage = 'url(barra3.png)';
          setTimeout(() => {
              alert('¡Jugador 2 gana el juego completo!');
              redirigirAFinDelJuego();
          }, 3000);
      }
  }
}

//SE UTILIZA PARA SI TERMINA LA PARTIDA VUELVA A LA PAGINA DE INCIO DE SELECCION DE JUEGO
function redirigirAFinDelJuego() {

  document.querySelector('.barra1').style.backgroundImage = 'url(barra.png)';
  document.querySelector('.barra2').style.backgroundImage = 'url(barra.png)';
  window.location.href = 'CIN_FUTURO_PROYECT.html';
  registrarInicioPartida(); 

}
