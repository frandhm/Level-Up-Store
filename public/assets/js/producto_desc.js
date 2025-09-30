document.addEventListener("DOMContentLoaded", async function () {
    try {
        // Obtener el ID del producto de la URL
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        
        if (!productId) {
            throw new Error("ID de producto no proporcionado");
        }
        
        // Cargar los productos
        const response = await fetch("../json/productos.json");
        if (!response.ok) throw new Error("No se pudo cargar el archivo JSON");
        const productos = await response.json();
        
        // Encontrar el producto con el ID correspondiente
        const producto = productos.find(p => p.id == productId);
        
        if (!producto) {
            throw new Error("Producto no encontrado");
        }
        
        // Actualizar la página con los datos del producto
        document.getElementById("product-name-bread").textContent = producto.nombre;
        document.getElementById("product-title").textContent = producto.nombre;
        document.getElementById("product-description").textContent = producto.descripcion;
        document.getElementById("product-price").textContent = `$${producto.precio.toLocaleString('es-CL')}`;
        document.getElementById("product-img").src = producto.imagen;
        document.getElementById("product-img").alt = producto.nombre;
        
        // Cargar productos relacionados (excluyendo el actual)
        const productosRelacionados = productos.filter(p => p.id != producto.id);
        const relatedContainer = document.getElementById("related-products-list");
        relatedContainer.innerHTML = "";
        
        if (productosRelacionados.length > 0) {
            // Seleccionar 4 productos aleatorios
            const randomProducts = productosRelacionados
                .sort(() => 0.5 - Math.random())
                .slice(0, 4);
            
            randomProducts.forEach(prod => {
                const card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `
                    <img src="${prod.imagen}" alt="${prod.nombre}" class="card-img">
                    <div class="card-body">
                        <a href="../pages/producto_desc.html?id=${prod.id}">
                            <h3>${prod.nombre}</h3>
                            <p>${prod.descripcion.substring(0, 60)}...</p>
                            <span class="precio">$${prod.precio.toLocaleString('es-CL')}</span>
                        </a>
                    </div>
                `;
                relatedContainer.appendChild(card);
            });
        } else {
            relatedContainer.innerHTML = "<p>No hay productos relacionados disponibles</p>";
        }
        
        // Funcionalidad del contador de cantidad
        const decreaseBtn = document.getElementById("decrease");
        const increaseBtn = document.getElementById("increase");
        const quantityInput = document.getElementById("quantity");
        
        decreaseBtn.addEventListener("click", () => {
            let value = parseInt(quantityInput.value);
            if (value > 1) {
                quantityInput.value = value - 1;
            }
        });
        
        increaseBtn.addEventListener("click", () => {
            let value = parseInt(quantityInput.value);
            quantityInput.value = value + 1;
        });
        
        // Validar entrada manual
        quantityInput.addEventListener("change", () => {
            let value = parseInt(quantityInput.value);
            if (isNaN(value) || value < 1) {
                quantityInput.value = 1;
            }
        });
        
        // Funcionalidad del botón añadir al carrito
        document.getElementById("add-to-cart").addEventListener("click", () => {
            const quantity = parseInt(quantityInput.value);
            alert(`Se añadieron ${quantity} unidad(es) de "${producto.nombre}" al carrito`);
            // Aquí puedes añadir la lógica real para agregar al carrito
        });
        
    } catch (error) {
        console.error("Error al cargar el producto:", error);
        document.querySelector("main").innerHTML = `
            <section class="container">
                <h2>Error</h2>
                <p>No se pudo cargar la información del producto. Por favor, intente nuevamente.</p>
                <a href="../pages/productos.html" class="btn">Volver a productos</a>
            </section>
        `;
    }
});