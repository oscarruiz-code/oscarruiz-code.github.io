//INICIALIZACION DE VARIABLES Y ACCIONES

let jugador1 = '';
const opciones = ['piedra', 'papel', 'tijera'];
computadora = opciones[Math.floor(Math.random() * opciones.length)];
ocultar_botones1();

//HISTORIAL DESDE LOCALSTORE O ARRAI VACIO, EL CUALUTILIZAMOS PARA QUE EL HISTORIAL SEA PERSISTENTE
let historial = JSON.parse(localStorage.getItem('historial')) || [];
let ronda1 = historial.length + 1;

//SE UTILIZA PARA CONTROLAR LA ELECCION DE JUGADOR
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

    } 

}

//SE UTILIZA PARA UTILIZAR TECLAS PARA LA ELECCION
function manejarTeclado(event) {

  if (event.key === 'a') {

      elejir('piedra', 1);

  } else if (event.key === 's') {

      elejir('papel', 1);

  } else if (event.key === 'd') {

      elejir('tijera', 1);

  }

}

//EVENTO DE TECLADO
document.addEventListener('keydown', manejarTeclado);

//FUNCION QUE DETERMINA EL GANADOR SEGUN ELLECION DE CADA Y LOGICA
function determineganador1() {
  let resultText = '';

  if (!jugador1 && computadora) {
    resultText = 'jugador 2 gana por defecto!';
    ocultar();
    registrarHistorial(jugador1,computadora);  
    computadora_gana();
    return;
  }

  if (jugador1 && !computadora) {
    resultText = '¡Jugador 1 gana por defecto!';
    ocultar();
    registrarHistorial(jugador1,computadora);
    jugador1_gana();
    return;
  }

  if (jugador1 === computadora) {
    resultText = '¡Es un empate!';
    ocultar();
    registrarHistorial(jugador1,computadora);
    empate();
    return;
  }

  if (
    (jugador1 === 'piedra' && computadora === 'tijera') ||
    (jugador1 === 'papel' && computadora === 'piedra') ||
    (jugador1 === 'tijera' && computadora === 'papel')
  ) {
    resultText = '¡Jugador 1 gana!';
    ocultar();
    registrarHistorial(jugador1,computadora);
    jugador1_gana();

  } else {
    resultText = '¡Jugador 2 gana!';
    ocultar();
    registrarHistorial(jugador1,computadora);
    computadora_gana();

  }
}

//FUNCION QUE SE UTILIZA PARA OCULTAR PERSONAJES
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

function registrarHistorial(eleccionP1, computadora) {
  debugger
  const registro = `Ronda ${ronda1}: Jugador1 - ${eleccionP1 || 'No eligió'}, Maquina - ${computadora || 'No eligió'}`;
  historial.push(registro);
  localStorage.setItem('historial', JSON.stringify(historial));
  ronda1++;
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
  historial1 = [];
  localStorage.removeItem('historial');
  ronda1 = 1;
}
