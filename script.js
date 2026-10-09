
document.addEventListener("DOMContentLoaded", () => {

    const tarjetas = document.querySelectorAll(".tarjeta, .Comida");

    tarjetas.forEach((tarjeta) => {

        const titulo = tarjeta.querySelector("h2") ? tarjeta.querySelector("h2").innerText : "Postre";
      const boton = document.createElement("button");
        boton.innerText = "Ordenar Postre";
        boton.className = "btn-ordenar";


        boton.addEventListener("click", () => {
            alert(`¡Gracias por tu pedido! Has agregado "${titulo}" a tu carrito.`);
        });

        tarjeta.appendChild(boton);
    });
});