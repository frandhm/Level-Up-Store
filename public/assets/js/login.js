document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let isValid = true;
        let messages = [];

        const emailValue = email.value.trim();
        // Solo dominios permitidos
        const allowedDomains = ["duoc.cl", "profesor.duoc.cl", "gmail.com"];
        const emailRegex = /^[^\s@]+@([^\s@]+\.[^\s@]+)$/;
        if (emailValue === "" || emailValue.length > 100) {
            messages.push("El correo electrónico es obligatorio y debe tener menos de 100 caracteres.");
            isValid = false;
        } else if (!emailRegex.test(emailValue)) {
            messages.push("Por favor, ingrese un correo electrónico válido.");
            isValid = false;
        } else {
            // Validar dominio permitido
            const domain = emailValue.split("@")[1];
            if (!allowedDomains.includes(domain)) {
                messages.push("Solo se permiten correos @duoc.cl, @profesor.duoc.cl y @gmail.com.");
                isValid = false;
            }
        }

        // Validar contraseña
        const passwordValue = password.value.trim();
        if (passwordValue === "") {
            messages.push("La contraseña es obligatoria.");
            isValid = false;
        } else if (passwordValue.length < 6) {
            messages.push("La contraseña debe tener al menos 6 caracteres.");
            isValid = false;
        }

        // Mostrar mensajes de error o enviar formulario
        if (!isValid) {
            alert(messages.join("\n"));
        } else {
            alert("Inicio de sesión exitoso ✅");
            form.submit();
        }
    });
});