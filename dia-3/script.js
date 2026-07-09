let nombre = "Cass";
let nivel = 21;
let energia = 100;
let puntos = 80;
let tieneMision = true;

console.log("Personaje cargado:");
console.log(nombre);
console.log(nivel);
console.log(energia);

function saludar() {
    document.getElementById("mensaje").innerHTML =
        "Hola, soy " + nombre + " y estoy lista para la aventura.";
}

function entrenar() {
    puntos = puntos + 10;
    energia = energia - 15;

    document.getElementById("programacion").innerHTML = puntos;
    document.getElementById("energia").innerHTML = energia;

    document.getElementById("mensaje").innerHTML =
        nombre + " entrenó. Ahora tiene " + puntos + " puntos de programación y " + energia + " de energía.";
}

function verificarNivel() {
    if (nivel >= 20 && energia > 50) {
        document.getElementById("mensaje").innerHTML =
            nombre + " puede entrar a la misión legendaria.";
    } else if (nivel >= 20 && energia <= 50) {
        document.getElementById("mensaje").innerHTML =
            nombre + " tiene nivel suficiente, pero necesita descansar.";
    } else {
        document.getElementById("mensaje").innerHTML =
            nombre + " necesita entrenar más antes de entrar a la misión.";
    }
}