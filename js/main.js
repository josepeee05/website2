function suma() {
    // Explicacion algoritmo
    alert  ("Algoritmo que realiza una suma entre 2 valores ingresados por el usuario");
    // Declaración de variables necesarias
    let A = 0;
    let B = 0;
    let S = 0;

    // Capturamos los datos
    
    A = parseInt(prompt("Ingrese el primer valor: "));
    B = parseInt(prompt("Ingrese el segundo valor: "));

    // Realizamos la operacion
    S = A + B;
    // Damos el resultado o respuesta
    alert("El resultadode la suma es: " + S);
}

function opBasicas() {
    alert  ("Algoritmo que realiza una suma, resta, multiplicación y división entre 2 valores ingresados por el usuario");

    let A = 0;
    let B = 0;
    let suma = 0;
    let resta = 0;
    let multi = 0;
    let division = 0;

    A = parseInt(prompt("Ingrese el primer valor: "))
    B = parseInt(prompt("Ingrese el segundo valor: "))

    suma = A + B;
    resta = A - B;
    multi = A * B;
    division = A / B;
    alert ("El resultado de la suma de los dos numeros es: "+ suma);
    alert ("El resultado de la resta de los dos numeros es: "+ resta);
    alert ("El resultado de la multiplicación de los dos numeros es: "+ multi);
    alert ("El resultado de la división de los dos numeros es: "+ division);
}

function opCuadrado() {
    alert  ("Algoritmo que calcula el cuadrado de un numero ingresado por el usuario");

    let A = 0;
    let P = 0;

    A = parseInt(prompt("Ingrese el numero a elevar al cuadrado: "));

    P = A**2;
    alert ("El numero "+ A + " elevado al cuadrado es: "+P);
}

function areaTriangulo() {
    alert  ("Algoritmo que calcula el area de un triangulo con valores ingresados por el usuario");

    let B = 0;
    let H = 0;
    let A = 0;
    // Tambien se puede "let B,H,A = 0;"

    B = parseInt(prompt("Ingrese la base del triangulo: "));
    H = parseInt(prompt("Ingrese la altura del triangulo: "));
    A = (B*H)/2;
    alert ("El area del triangulo es: "+A);
}

function convMedidas() {
    alert  ("Algoritmo que hace la conversion a pulgadas, kilometros y milimetros de una medida ingresada por el usuario en metros");

    let metros, milimetros, pulgadas, kilometros = 0;
    metros = parseInt(prompt("Ingrese la medida en metros: "));
    
    milimetros = metros * 1000;
    pulgadas = metros * 39.37;
    kilometros = metros / 1000;

    alert ("La conversion del valor "+ metros+ " metros a pulgadas es: "+ pulgadas + " pulgadas");
    alert ("La conversion del valor "+ metros+ " metros a kilometros es: "+ kilometros + " kilometros");
    alert ("La conversion del valor "+ metros+ " metros a milimetros es: "+ milimetros + " milimetros");

}

function numeroMayor() {
    // Explicacion del algoritmo
    alert ("Algoritmo que determina el mayor de dos numeros ingresados");
    // Declaracion de variables
    let N1, N2= 0;

    // Capturamos los datos
    N1= parseInt(prompt("Ingrese el primer numero"));
    N2= parseInt(prompt("Ingrese el segundo numero"));
    // Realizamos la operacion
    if (N1 == N2){
        alert("Ambos valores son iguales, no sea capibara");
    } else if(N1 > N2){
        alert ("El valor "+ N1+ " es mayor que "+N2);
    } else{
        alert ("El valor "+ N2+ " es mayor que "+N1);
    }
    // Mostramos el resultado
}

function menorTresNum() {
    // Explicacion del algoritmo
    alert ("Algoritmo que determina el menor de tres numeros ingresados");
    // Declaracion de variables
    let N1, N2, N3= 0;

    // Capturamos los datos
    N1= parseInt(prompt("Ingrese el primer numero"));
    N2= parseInt(prompt("Ingrese el segundo numero"));
    N3= parseInt(prompt("Ingrese el tercer numero"));
    // Realizamos la operacion

    if ((N1 == N2) && (N1==N3)){
        alert ("Los 3 numeros son iguales")
    } else if((N1 < N2) && (N1 < N3)){
        alert("El numero menor de los numeros: "+ N1+ " , "+ N2+ " y "+ N3+ " es: "+ N1);
    } else if ((N2 < N1) && (N2 < N3)){
        alert("El numero menor de los numeros: "+ N1+ " , "+ N2+ " y "+ N3+ " es: "+ N2);
    } else if((N3 < N1) && (N3 < N2)){
        alert("El numero menor de los numeros: "+ N1+ " , "+ N2+ " y "+ N3+ " es: "+ N3);
    } else{
        alert("Valores ingresador erroneos");
    }
}

function promNotas() {
    alert ("Algoritmo que determina si un estudiante aprobo o reprobo sacando el promedio de 7 notas ingresadas por el usuario");

    let n1, n2, n3, n4, n5, n6, n7, promedio = 0;

    n1 = parseFloat(prompt("Ingrese la primera nota: "));
    n2 = parseFloat(prompt("Ingrese la segunda nota: "));
    n3 = parseFloat(prompt("Ingrese la tercera nota: "));
    n4 = parseFloat(prompt("Ingrese la cuarta nota: "));
    n5 = parseFloat(prompt("Ingrese la quinta nota: "));
    n6 = parseFloat(prompt("Ingrese la sexta nota: "));
    n7 = parseFloat(prompt("Ingrese la septima nota: "));

    promedio = (n1 + n2 + n3 + n4 + n5 + n6 + n7)/ 7;
    if (promedio >= 6.1){
        alert ("El estudiante aprobó");
    } else {
        alert ("El estudiante reprobó");
    }
}

function descManzanas() {
    alert ("Algoritmo que permite saber al vendedor cuanto debe pagar un cliente segun los descuentos por kilo");
    
    let precio, kilo, descuento, total_pagar;

    precio = parseInt(prompt("Ingrese el precio por kilo de la manzana: "));
    kilo = parseInt(prompt("Ingrese la cantidad de kilos de manzana: "));

    if (kilo <= 2){
        total_pagar = precio * kilo;
        alert ("El cliente no recibe ningun descuentro, tiene que pagar un total de: "+total_pagar);
    } else if ((kilo >= 3) && (kilo <= 5)){
        total_pagar = precio * kilo;
        descuento = total_pagar-(total_pagar * 0.1);
        alert ("El cliente recibe un descuento del 10%, tiene que pagar un total de: "+descuento);
    } else if ((kilo >= 6) && (kilo <= 10)){
        total_pagar = precio * kilo;
        descuento = total_pagar-(total_pagar * 0.15);
        alert ("El cliente recibe un descuento del 15%, tiene que pagar un total de: "+descuento);
    } else{
        total_pagar = precio * kilo;
        descuento = total_pagar-(total_pagar * 0.2);
        alert ("El cliente recibe un descuento del 20%, tiene que pagar un total de: "+descuento);
    }

}

function salario() {
    alert ("Algoritmo que calcula cuanto es el salario semanal de un obrero segun las horas trabajadas");

    let horas, total, total_horas_extra, salario_total;

    horas = parseInt(prompt("Ingrese el total de horas que ha trabajado: "));

    if (horas <= 40){
        total = horas * 12500;
        alert ("La empresa le tiene que pagar un total de: "+total+" pesos");
    } else{
        total = 40 * 12500;
        total_horas_extra = (horas - 40) * 18000;
        salario_total = total + total_horas_extra;
        alert ("La empresa le tiene que pagar un total de: "+salario_total+" pesos");
    }
}