//Declaración de variables
// var cantidadDeDinero = parseInt();
var nombreUsuario = "Tony Stark";
var saldoCuenta = 100000;
var limiteExtraccion = 50000;

function suma (cantidad) {
    saldoCuenta = cantidad + saldoCuenta;
}

function resta (cantidad) {
    saldoCuenta = saldoCuenta - cantidad;
}

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var montoIngresadoString = prompt("Ingrese nuevo límite de extracción");
    var montoIngresadoNumber = parseInt(montoIngresadoString);
    // var saldoAnterior = saldoCuenta + montoIngresadoNumber;
    limiteExtraccion = montoIngresadoNumber;
    actualizarLimiteEnPantalla();
    alert(limiteExtraccion);
}

function extraerDinero (cantidad) {
    var montoIngresadoString = prompt("Ingrese el monto a extraer");
    montoIngresadoNumber = parseInt(montoIngresadoString);
    var saldoAnterior = saldoCuenta;
    resta(montoIngresadoNumber);
    actualizarSaldoEnPantalla()
    alert("Monto a extraer: $"  + montoIngresadoNumber + "\n" + "Saldo Anterior: $ " + saldoAnterior + "\n" + "Saldo Actual: $ "+ saldoCuenta);
    // debugger
    // var montoIngresadoString = prompt("Ingrese el monto a extraer");
    // debugger
    // montoIngresadoNumber = parseInt(montoIngresadoString);
    // debugger
    // var saldoAnterior = saldoCuenta;
    // debugger
    // resta();
    // // actualizarSaldoEnPantalla();
    // debugger
    // alert("Retiraste: $"  + montoIngresadoNumber + "\n" + "Saldo Anterior: $ " + saldoAnterior + "\n" + "Saldo Actual: $ "+ saldoCuenta);
    // debugger
}

function depositarDinero(cantidad) {
    var montoIngresadoString = prompt("Ingrese el monto a depositar");
    montoIngresadoNumber = parseInt(montoIngresadoString);
    var saldoAnterior = saldoCuenta;
    suma(montoIngresadoNumber);
    actualizarSaldoEnPantalla()
    alert("Depositaste: $"  + montoIngresadoNumber + "\n" + "Saldo Anterior: $ " + saldoAnterior + "\n" + "Saldo Actual: $ "+ saldoCuenta);
    // alert("Depositaste: $" montoIngresadoNumber "\n" "Saldo Anterior: $" saldoAnterior "\n" "Saldo Actual: $" saldoCuenta);
    // return alert(saldoAnterior);
    // return alert (saldoCuenta);

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