//Declaración de variables
// var cantidadDeDinero = parseInt();
var nombreUsuario = "Tony Stark";
var saldoCuenta = 100000;
var limiteExtraccion = 0;

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
    alert("Su nuevo límite de extracción es de $: " + limiteExtraccion);
}

// // // // // // // Modularizar la función extraerDinero, es muy larga
function extraerDinero (cantidad) {
    if (limiteExtraccion === 0){
        alert("Por favor configure su límite de extracción primero");
        cambiarLimiteDeExtraccion();
        alert("Gracias por configurar su límite de extracción \nAhora puede extraer dinero");
    }
    var montoIngresadoString = prompt("Ingrese el monto a extraer");
    var montoIngresadoNumber = parseInt(montoIngresadoString);
    var saldoAnterior = saldoCuenta;

    // if(montoIngresadoNumber > saldoCuenta) {
    //     alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero");
    //     return;
    // }

    if(montoIngresadoNumber < saldoCuenta){
        if (montoIngresadoNumber <= limiteExtraccion) {
            if(montoIngresadoNumber % 100 === 0){
            resta(montoIngresadoNumber);
            actualizarSaldoEnPantalla()
            alert("Monto a extraer: $"  + montoIngresadoNumber + "\n" + "Saldo Anterior: $ " + saldoAnterior + "\n" + "Saldo Actual: $ "+ saldoCuenta);
            }else{
                alert("Solo puede extraer billetes de $100 \nIngrese un nuevo monto que sea multiplo de 100");
                extraerDinero();
            }
        }else{
            alert("La cantidad de dinero que deseas extraer supera tu límite de extracción \nPor favor ingrese un monto inferior a $ " + limiteExtraccion);
            extraerDinero();
        }
    }else{
        alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero");
}
    
    
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