const boton = document.getElementById("botonCatalogo");
const catalogo = document.querySelector(".catalogo");

let catalogoVisible = false;

boton.addEventListener("click", function () {
    if (catalogoVisible === false) {
        catalogo.style.display = "block";
        catalogoVisible = true;
        boton.textContent = "Ocultar catálogo";
    } else {
        catalogo.style.display = "none";
        catalogoVisible = false;
        boton.textContent = "Mostrar catálogo";
    }
});


const botonTotal = document.getElementById("botonTotal");
const resultado = document.getElementById("resultado");

function calcularCompra() {
    let precio = 200;
    let cantidad = 3;
    let total = precio * cantidad;

    resultado.textContent = "El total es: $" + total;
}

botonTotal.addEventListener("click", calcularCompra);