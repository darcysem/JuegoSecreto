let numeroSecreto = generarNumeroAleatorio();
let intentos = 1;
console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    if (numeroDeUsuario == numeroSecreto){
        asignarTextoElemento('p', `Acertastes el Numero ${intentos} ${(intentos === 1) ? 'Vez' : 'Veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        // reiniciarJuego();
    }else{
        //El usuario No Acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor')
        }else{
            asignarTextoElemento('p','El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
    // let valorCaja = document.querySelector('#valorUsuario');
    // valorCaja.value = '';
}

function generarNumeroAleatorio(){
    return Math.floor(Math.random() * 10 ) + 1;
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego número Secreto');
    asignarTextoElemento('p', 'Indica un número del 1 al 100');
    numeroSecreto = generarNumeroAleatorio();
    intentos = 1
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true')
}

condicionesIniciales();