function uno() {
    alert("Hola mundo!");}

function dos() {
    var a = 20;
    var b = 8;
    var res = a + b;
        
    alert("La suma de " + a + " + " + b + " es: " + res);}

function tres() {
    let edad = prompt("¿Qué edad tienes?");
    if (edad >= 18) {
        alert("Al tener " + edad + " años eres mayor de edad.")
    } else {
        alert("Al tener " + edad + " años eres menor de edad.");}}

function cuatro() {
    let num = prompt("Escribe un número y te diremos su triple");
    var res = num * 3;

    alert("El triple de " + num + " es: " + res);}

function cinco() {
    let x = prompt("¿Qué tabla de multiplicar quieres saber?");
    let multi = [10];

    for (let i = 0; i <= 10; i++) {
        multi[i] = x*i;
        alert(x + " x " + i + " = " + multi[i]);}}

function seis() {
    alert("Escribe dos números y te diremos cuál es el menor de los dos");
    var num1 = prompt("Escribe el primer número");
    var num2 = prompt("Escribe el segundo número");

    if (num1 < num2) {
        alert(num1 + " es menor que " + num2);
    } else if (num1 > num2) {
        alert(num1 + " es mayor que " + num2);
    } else {
        alert("Los números son iguales");}}

function siete() {
    alert("¿Cuáles han sido tus notas este año?");
    var n1 = parseInt(prompt("Primera nota:"));
    var n2 = parseInt(prompt("Segunda nota:"));
    var n3 = parseInt(prompt("Tercera nota:"));
    var n4 = parseInt(prompt("Cuarta nota:"));
    let notas = [n1, n2, n3, n4];

    var med = (n1 + n2 + n3 + n4)/4;
    if (med >= 5) {
        alert("¡Enhorabuena has aprobado!\nTienes una media de " + med);
    } else {
        alert("No has aprobado\nTienes una media de " + med);}

    for (let i = 0; i < notas.length; i++) {
        var min = notas[0];
        var max = 10;

        if (notas[i] < min) {
            min = notas[i];}

        if (notas[i] <= 10) {
            max = notas[i];}}
            
    alert("Tu nota más baja es un " + min + " y la más alta un " + max);}

function ocho() {
    // for (let i = 1; i <= 10; i++) {
    //     alert(`Tabla de multiplicar del ${i}`);

    //     for (let j = 1; j <= 10; j++) {
    //         alert(`${i} x ${j} = ${i * j}`);}}

    for (let i = 1; i <= 10; i++) {
        console.log(`Tabla de multiplicar del ${i}:`);

        for (let j = 1; j <= 10; j++) {
          console.log(`${i} x ${j} = ${i * j}`);}

        console.log('-------------------');}}

function nueve() {
    alert("Escribe un número y te calcularémos su doble.");
    var num = parseFloat(prompt("Ingresa un número:"));
        
    if (!isNaN(num)) {
        var doble = num * 2;
        alert("El doble de " + num + " es: " + doble);
        
    } else {
        alert("Por favor, ingresa un número válido.");}}

function cambio() {
    var x = document.getElementById('boton');
    x.removeAttribute("hidden");}

function ocultarBoton() {
    var boton = document.getElementById("boton");
    boton.setAttribute("hidden", true);}