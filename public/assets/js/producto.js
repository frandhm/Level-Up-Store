document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("../json/productos.json");
        if (!response.ok) throw new Error("No se pudo cargar el archivo JSON");
        const productos = await response.json();

        const contenedor = document.getElementById("productos-lista");
        contenedor.innerHTML = "";

        productos.forEach(producto => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src="../assets/${producto.imagen}" alt="${producto.nombre}" class="card-img">
                <div class="card-body"><a href="../pages/producto_desc.html?id=${producto.id}">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <span class="precio">$${producto.precio}</span>
                </a></div>
            `;
            contenedor.appendChild(card);
        });
    } catch (error) {
        console.error("Error al cargar productos:", error);
    }
});