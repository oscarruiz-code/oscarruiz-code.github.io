// Detectar cuando los elementos entran en la vista
const sections = document.querySelectorAll('.section');

const options = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, options);

// Observar cada sección
sections.forEach(section => {
    observer.observe(section);
});

function sendEmail(event) {
    event.preventDefault(); // Evita el envío tradicional del formulario

    // Obtener los valores de los campos del formulario usando ID
    const nombre = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("message").value;

    // Configurar parámetros para EmailJS
    const params = {
        from_name: nombre,
        email_id: email,
        message: mensaje,
    };

    // Llamada a EmailJS para enviar el correo
    emailjs.send("service_bckjgjq", "template_ig8u6rf", params)
        .then(function (response) {
            alert("Mensaje enviado con éxito!"); // Mensaje de éxito
            document.getElementById("contacta-conmigo").reset(); // Reinicia el formulario
        }, function (error) {
            alert("Hubo un error al enviar el mensaje: " + error.text); // Mensaje de error
        });
}
