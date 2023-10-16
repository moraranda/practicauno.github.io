function diez() {
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosoto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    alert("Escribe un número del 1 - 12 y te dirémos a que mes corresponde");
    let x = parseInt(prompt("Ingresa un número:"));

    for (let i = 1; i <2; i++) {
    
        if (!isNaN(x) && x >= 1 && x <= 12) {
            var diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            var dias = diasPorMes[x - 1];
    
            alert(meses[x - 1] + "\nEl mes de " + meses[x - 1] + " tiene " + dias + " días.");
        } else {
            alert("Por favor, introduce un número válido del 1 al 12.");}}}

function once(op) {
    var x = parseFloat(prompt("Introduce el primer número:"));
    var y = parseFloat(prompt("Introduce el segundo número:"));

    if (isNaN(x) || isNaN(y)) {
        alert("Por favor introduce un número válido");
        return;}

    switch (op) {
        case 'sumar':
            alert("La suma de " + x + " + " + y + " = " + (x + y));
            break;

        case 'restar':
            alert("La resta de " + x + " - " + y + " = " + (x - y));
            break;

        case 'multiplicar':
            alert("La multiplicación de " + x + " * " + y + " = " + (x * y));
            break;
    
        case 'potencia':
            alert("La potencia de " + x + " ^ " + y + " = " + Math.pow(x, y));
            break;
    
        default:
            alert("Opción inválida");}}

function doce(color) {
    var parf = document.getElementById('parf');
    parf.style.color = color;}

function cambiouno() {
    var x = document.getElementById('tabla');
    var y = document.getElementById('contenido');
    x.removeAttribute("hidden");
    y.removeAttribute("hidden");}

function ocultarTabla() {
    var x = document.getElementById("tabla");
    var y = document.getElementById('contenido');
    x.setAttribute("hidden", true);
    y.setAttribute("hidden", true);}

function cambiodos() {
    var x = document.getElementById('parf');
    var r = document.getElementById('red');
    var g = document.getElementById('green');
    var b = document.getElementById('blue');
    var y = document.getElementById('close');
    x.removeAttribute("hidden");
    r.removeAttribute("hidden");
    g.removeAttribute("hidden");
    b.removeAttribute("hidden");
    y.removeAttribute("hidden");}

function ocultarTodo() {
    var x = document.getElementById('parf');
    var r = document.getElementById('red');
    var g = document.getElementById('green');
    var b = document.getElementById('blue');
    var y = document.getElementById('close');
    x.setAttribute("hidden", true);
    r.setAttribute("hidden", true);
    g.setAttribute("hidden", true);
    b.setAttribute("hidden", true);
    y.setAttribute("hidden", true);}
    