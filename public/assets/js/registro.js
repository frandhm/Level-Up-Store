document.addEventListener("DOMContentLoaded", function () {
    // Se cargan los datos del formulario y se guardan en variables.
    const form = document.getElementById("registroForm");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let isValid = true;
        let messages = [];
        const emailValue = email.value.trim();

        // Se seleccionan los dominios permitidos para el correo y posteriormente se valida.
        const allowedDomains = ["duoc.cl", "profesor.duoc.cl", "gmail.com"];
        const emailRegex = /^[^\s@]+@([^\s@]+\.[^\s@]+)$/;

        // Se valida que el correo no este vacio ni tenga mas de 100 caracteres.
        if (emailValue === "" || emailValue.length > 100) {
            messages.push("El correo electrónico es obligatorio y debe tener menos de 100 caracteres.");
            isValid = false;
            // Se valida que el correo tenga el formato correcto osea no tenga espacios y tenga un @.
        } else if (!emailRegex.test(emailValue)) {
            messages.push("Por favor, ingrese un correo electrónico válido.");
            isValid = false;
        } else {
            // Se valida que el dominio ingresado este dentro de los dominios permitidos.
            const domain = emailValue.split("@")[1];
            if (!allowedDomains.includes(domain)) {
                messages.push("Solo se permiten correos @duoc.cl, @profesor.duoc.cl y @gmail.com.");
                isValid = false;
            }
        }

        const passwordValue = password.value.trim();
        const confirmPasswordValue = confirmPassword.value.trim();
        // Se valida que la contrasena no este vacia.
        if (passwordValue === "") {
            messages.push("La contraseña es obligatoria.");
            isValid = false;
        // Se valida que la contrasena tenga entre 4 y 10 caracteres
        } else if (passwordValue.length < 4 || passwordValue.length > 10) {
            messages.push("La contraseña debe tener entre 4 y 10 caracteres.");
            isValid = false;
        }

        // Validación de confirmación de contraseña
        if (confirmPasswordValue === "") {
            messages.push("Debe confirmar la contraseña.");
            isValid = false;
        } else if (passwordValue !== confirmPasswordValue) {
            messages.push("Las contraseñas no coinciden.");
            isValid = false;
        }

        // Se muestra un mensaje de error o de exito segun corresponda.
        if (!isValid) {
            alert(messages.join("\n"));
        } else {
            alert("Registro exitoso ✅");
            window.location.href = "vistaClient.html";
        }
    });
});