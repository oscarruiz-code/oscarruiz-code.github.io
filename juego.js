//INICIALIZACION DE VARIABLES

let jugador1 = '';
let jugador2 = '';

//HISTORIAL DESDE LOCALSTORE O ARRAI VACIO, EL CUALUTILIZAMOS PARA QUE EL HISTORIAL SEA PERSISTENTE
let historial = JSON.parse(localStorage.getItem('historial')) || [];
let ronda = 1;

//FUNCION QUE CONTROLA LA ELECCION DE CADA JUGADOR
function elejir(eleccion, jugador) {

    if (jugador === 1) {

      document.querySelector('.puño1').setAttribute('style', 'display: none;');
      document.querySelector('.papel1').setAttribute('style', 'display: none;');
      document.querySelector('.tijera1').setAttribute('style', 'display: none;');
     
  
      if (eleccion === 'piedra') {
        ocultar_botones();
      } else if (eleccion === 'papel') {
        ocultar_botones();
      } else if (eleccion === 'tijera') {
        ocultar_botones();
      }
  
      jugador1 = eleccion;

    } else if (jugador === 2) {

      document.querySelector('.puño2').setAttribute('style', 'display: none;');
      document.querySelector('.papel2').setAttribute('style', 'display: none;');
      document.querySelector('.tijera2').setAttribute('style', 'display: none;');

      if (eleccion === 'piedra') { 
        ocultar_botones1();
      } else if (eleccion === 'papel') { 
        ocultar_botones1();
      } else if (eleccion === 'tijera') {
        ocultar_botones1();
      } 
      jugador2 = eleccion;
    }

}

//FUNCION QUE CONTROLA QUE CADA TECLA ASIGNADA HAGA UNA ACCION
function manejarTeclado(event) {

  if (event.key === 'a') {

      elejir('piedra', 1);

  } else if (event.key === 's') {

      elejir('papel', 1);

  } else if (event.key === 'd') {

      elejir('tijera', 1);

  }

  if (event.key === 'j') {

      elejir('piedra', 2);

  } else if (event.key === 'k') {

      elejir('papel', 2);

  } else if (event.key === 'l') {

      elejir('tijera', 2);
      
  }

}

//EVENTO PARA TECLADO
document.addEventListener('keydown', manejarTeclado);

//FUNCION PARA DETERMINAR GANADOR SEGUN ELECCION Y LOGICA DE JUEGO
function determineganador() {
  
  let resultText = '';

  if (!jugador1 && jugador2) {
    resultText = '¡Jugador 2 gana por defecto!';
    ocultar();
    registrarHistorial(jugador1,jugador2);  
    jugador2_gana();
    return;
  }

  if (jugador1 && !jugador2) {
    resultText = '¡Jugador 1 gana por defecto!';
    ocultar();
    registrarHistorial(jugador1,jugador2);
    jugador1_gana();
    return;
  }

  if (jugador1 === jugador2) {
    resultText = '¡Es un empate!';
    ocultar();
    registrarHistorial(jugador1,jugador2);
    empate();
    return;
  }

  if (
    (jugador1 === 'piedra' && jugador2 === 'tijera') ||
    (jugador1 === 'papel' && jugador2 === 'piedra') ||
    (jugador1 === 'tijera' && jugador2 === 'papel')
  ) {
    resultText = '¡Jugador 1 gana!';
    ocultar();
    registrarHistorial(jugador1,jugador2);
    jugador1_gana();
   
  } else {
    resultText = '¡Jugador 2 gana!';
    ocultar();
    registrarHistorial(jugador1,jugador2);
    jugador2_gana();
    
  }

  
}

//FUNCION PARA OCULTAR PERSONAJES
function ocultar(){

  document.querySelector('.personaje1').setAttribute('style', 'display: none;');
  document.querySelector('.personaje').setAttribute('style', 'display: none;');
  document.querySelector('.contador').setAttribute('style', 'visibility: hidden;');

}

//FUNCION PARA OCULTAR BOTONES PRIMER JUGADOR
function ocultar_botones(){

  document.querySelector('.boton1').setAttribute('style', 'visibility: hidden;');

}

//FUNCION PARA OCULTAR BOTONES SEGUNDO JUGADOR
function ocultar_botones1(){

  document.querySelector('.boton2').setAttribute('style', 'visibility: hidden;');

}

//FUNCION PARA REGISTRAR INICIO DE CADA RONDA

function registrarInicioPartida() {

  const registro = `\n Inicio de Partida`;
  historial.push(registro);
  localStorage.setItem('historial', JSON.stringify(historial));
  ronda = 1;

}

//FUNCION PARA REGISTRAR ACCIONES DE CADA RONDA

function registrarHistorial(eleccionP1, eleccionP2) {
  debugger
  const registro = `Ronda ${ronda}: Jugador1 - ${eleccionP1 || 'No eligió'}, Jugador2 - ${eleccionP2 || 'No eligió'}`;
  historial.push(registro);
  localStorage.setItem('historial', JSON.stringify(historial));
  ronda++;
}

//FUNCION PARA DESCARGAR INFORMACION EN UN ARCHIVO DE TEXTO

function descargarHistorial() {
  if (historial.length === 0) {
      alert('No hay historial para descargar.');
      return;
  }

  const contenido = historial.join('\n');
  const blob = new Blob([contenido], { type: 'text/plain' });
  const enlace = document.createElement('a');
  enlace.href = URL.createObjectURL(blob);
  enlace.download = 'historial_piedra_papel_tijera.txt';
  enlace.click();
}

//FUNCION PARA LIMPIAR EL ARCHIVO DE TEXTO

function limpiarHistorial() {

  historial = [];
  localStorage.removeItem('historial');

}
