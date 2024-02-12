let intentos = 0;
let listaNumerosSorteados = [];
let numeroSecreto = 0;
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);//permite acceder a cada elemento querySelector
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    console.log(intentos);
    if (numeroDeUsuario == numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {//el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor')
        }
        else {
            asignarTextoElemento('p', 'El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}


function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}


function generarNumeroSecreto() {
    let numeGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    //si el numero generado esta incluido en la lista
    console.log(numeGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','ya se sortearon todos los numeros posibles')
    } else {

        if (listaNumerosSorteados.includes(numeGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeGenerado);
            return numeGenerado;
        }
    }
}


function condicionesIniciales() {
    asignarTextoElemento('h1', 'juego del numero secreto');//llamada de la funcion
    asignarTextoElemento('p', `Indica  un numero del 1 al ${numeroMaximo}`);//llamada de la funcion
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}


function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    // indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //generar el numero aleatorio
    // inicializar el nnumero intentos
    // deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
}
condicionesIniciales();


/* let listaGenerica = [];
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
lenguajesDeProgramacion.push('Java', 'Ruby', 'Golang');
function mostrar() {
    console.log(lenguajesDeProgramacion);
}
mostrar();

function inverso() {
    for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguajesDeProgramacion[i]);
    }
}
inverso();
let numeros = [5, 4, 3, 2, 5, 6];
let suma = 0;
let prom = 0;
function promedio() {
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i]
    }
    prom = suma / 2;
    console.log(`El promedio es ${prom}`);
}
promedio();
let mayor = 0;
let pequeño = 0;
let listaNumeros2 = [15, 4, 18, 25];
function numeroGrande() {
    let mayor = Math.max.apply(null, listaNumeros2);
    console.log(mayor);
}
numeroGrande()

let num1 = [4, 3, 2, 3];
let num2 = [2, 6, 4, 5, 6, 7];
function sumaCadaIndice() {
    if (num1.length == num2.length) {
        for (let i = 0; i < num1.length; i++) {
            let sum = num1[i] + num2[i]
            console.log(sum)
        }
    } else {
        for (let i = 0; i < num1.length; i++) {
            let sum = num2[i] + num1[i];
            console.log(sum)
        }
        for (let i=num1.length; i < num2.length; i++) {
            console.log(num2[i])
        }
    }
}
sumaCadaIndice(); */