//Declaración de variables
var cantidadDeDinero = parseInt();
var nombreUsuario = "Tony Stark";
var saldoCuenta = 100000;
var limiteExtraccion = 50000;

function suma (cantidad) {
    saldoCuenta = cantidad + saldoCuenta;
}

function resta (cantidadDeDinero) {
    saldoCuenta = saldoCuenta - cantidadDeDinero;
}

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {

}

function extraerDinero(cantidadDeDinero) {
    
}

function depositarDinero(cantidadDeDinero) {
    var montoIngresadoString = prompt("Ingrese el monto a depositar");
    montoIngresadoNumber = parseInt(montoIngresadoString);
    var saldoAnterior = saldoCuenta;
    suma(montoIngresadoNumber);
    actualizarSaldoEnPantalla()
    alert("Depositaste: $  + montoIngresadoNumber\nSaldo Anterior: $ + saldoAnterior \nSaldo Actual: $ + saldoCuenta"
            );

}

function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}