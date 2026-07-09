let nombreEmpresa = "Winnie Toosie";
let perroPequeno = "perro-chico.jpeg";
let perroGrandeImagen = "perro-grande.jpeg";

let energiaChico = 90;
let energiaGrande = 70;

console.log("Bienvenida a " + nombreEmpresa);
console.log("Energía perro chico: " + energiaChico);
console.log("Energía perro grande: " + energiaGrande);

function perroChico() {
    document.getElementById("mensaje").innerHTML =
        "Elegiste un perrito chico. Tiene " + energiaChico + "% de energía y mucho amor.";

    document.getElementById("perro").src = perroPequeno;
}

function perroGrande() {
    document.getElementById("mensaje").innerHTML =
        "Elegiste un perrito grande. Tiene " + energiaGrande + "% de energía y es muy protector.";

    document.getElementById("perro").src = perroGrandeImagen;
}