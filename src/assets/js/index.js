document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("subscribeEmail");
    const subscribeBtn = document.getElementById("subscribeBtn");
    const errorMsg = document.getElementById("emailError");

    // Expresión regular para validar correos
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    subscribeBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const emailValue = emailInput.value.trim();

        if (emailValue === "") {
            errorMsg.textContent = "Por favor, ingresa un correo electrónico.";
            errorMsg.style.display = "block";
        } else if (!emailRegex.test(emailValue)) {
            errorMsg.textContent = "El correo ingresado no es válido.";
            errorMsg.style.display = "block";
        } else {
            errorMsg.style.display = "none"; 
            alert("¡Gracias por suscribirte! ✅");       
            emailInput.value = "";
        }
    });
});