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

function verificarSaldo (cantidad) {
    if (cantidad > saldoCuenta) {
        alert ("No hay suficiente dinero en su cuenta para realizar esta acción");
        return false;
    }else{
        return true;
    }
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
    var agua = 350;
    var telefono = 425;
    var luz = 210;
    var internet = 570;
    var saldoAnterior = saldoCuenta;
    var servicio = prompt ("Ingrese el número que corresponde al servicio que querés pagar\n1 - Agua\n2 - Luz\n3 - Internet\n4 - Teléfono");
    var number = parseInt(servicio);
    switch(number) {
        case 1:
        if (verificarSaldo(agua) === true) {
            resta(agua);
            alert ("Ha pagado el servicio de agua" + "\nEl costo del servicio es de $ " + telefono + "\nSaldo anterior $ " + saldoAnterior + "\nSaldo actual $ " + saldoCuenta);
        }
        break;
        case 2:
        if (verificarSaldo(telefono) === true) {
            resta(telefono);
            alert ("Ha pagado el servicio de teléfono" + "\nEl costo del servicio es de $ " + telefono + "\nSaldo anterior $ " + saldoAnterior + "\nSaldo actual $ " + saldoCuenta);
        }
        break;
        case 3:
        if (verificarSaldo(luz) === true) {
            resta(luz);
            alert ("Ha pagado el servicio de luz" + "\nEl costo del servicio es de $ " + luz + "\nSaldo anterior $ " + saldoAnterior + "\nSaldo actual $ " + saldoCuenta);
        }
        break;
        case 4:
        if (verificarSaldo(internet) === true) {
            resta(internet);
            alert ("Ha pagado el servicio de internet" + "\nEl costo del servicio es de $ " + luz + "\nSaldo anterior $ " + saldoAnterior + "\nSaldo actual $ " + saldoCuenta);
        }
        break;
        default:
        alert("El valor ingresado no coincide con ningún servicio asociado, por favor vuelva a elegir el servicio")
        break;
    }
    actualizarSaldoEnPantalla();
}

// function verificarQueCuenta (dato) {
//     if (dato === cuentaAmiga1) {
//         resta ()
//     }else if(dato === cuentaAmiga2){
//         resta();
//     }else{
//         alert("Solo puede transferir dinero a una cuenta amiga");
//         return false;
//     }
// }

function transferirDinero() {
    var cuentaAmiga1 = 1234567;
    var cuentaAmiga2 = 7654321;
    var montoIngresadoString = prompt ("Ingrese el monto que desea transferir");
    var montoIngresadoNumber = parseInt(montoIngresadoString);
    
    if (verificarSaldo(montoIngresadoNumber) === true) {
        var numeroDeCuentaString = prompt("Por favor ingrese el número de cuenta al que desea hacer la transferencia");
        var numeroDeCuentaNumber = parseInt(numeroDeCuentaString);
        // verificarQueCuenta (numeroDeCuentaNumber);
        // alert("Selección a qué cuenta amiga desea transferir dinero" + "\n1 - Cuenta Amiga 1 Nº de cuenta: 1234567" + "\n2 - Cuenta Amiga 2 Nº de cuenta: 7654321");

        if (numeroDeCuentaNumber === cuentaAmiga1) {
            resta (montoIngresadoNumber);
        }else if(numeroDeCuentaNumber === cuentaAmiga2){
            resta(montoIngresadoNumber);
        }else{
            alert("Solo puede transferir dinero a una cuenta amiga");
            return false;
        }
        actualizarSaldoEnPantalla();
        alert("Se han transferido $ " + montoIngresadoNumber + "\nCuenta destino: " + numeroDeCuentaNumber + "\nSu saldo actual es de: $" + saldoCuenta);
    }    
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