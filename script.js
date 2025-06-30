$(document).ready(function() {
    // Validación del Formulario de Contacto
    $('#contactForm').on('submit', function(e) {
        e.preventDefault(); // Previene el envío por defecto

        let isValid = true;

        // Validar Nombre
        const $nombre = $('#nombre');
        if ($nombre.val().trim() === '') {
            $nombre.addClass('is-invalid');
            isValid = false;
        } else {
            $nombre.removeClass('is-invalid');
        }

        // Validar Email
        const $email = $('#email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if ($email.val().trim() === '' || !emailRegex.test($email.val().trim())) {
            $email.addClass('is-invalid');
            isValid = false;
        } else {
            $email.removeClass('is-invalid');
        }

        // Validar Mensaje
        const $mensaje = $('#mensaje');
        if ($mensaje.val().trim() === '') {
            $mensaje.addClass('is-invalid');
            isValid = false;
        } else {
            $mensaje.removeClass('is-invalid');
        }

        if (isValid) {
            alert('Formulario enviado con éxito (simulado)!');
            // Aquí podrías añadir una llamada AJAX para enviar los datos al servidor
            this.reset(); // Limpia el formulario
            $('.form-control').removeClass('is-valid is-invalid'); // Limpia clases de validación
        } else {
            alert('Por favor, completa todos los campos correctamente.');
        }
    });

    // Lógica del Test de Seguridad
    $('#testForm').on('submit', function(e) {
        e.preventDefault();

        let score = 0;
        const $testResult = $('#testResult');
        $testResult.html(''); // Limpiar resultados anteriores

        // Pregunta 1
        if ($('input[name="q1"]:checked').val() === 'yes') {
            score += 1;
        }

        // Pregunta 2
        if ($('input[name="q2"]:checked').val() === 'yes') {
            score += 1;
        }

        // Puedes agregar más preguntas aquí y sumarlas al score

        let feedback = '';
        if (score === 2) { // Asumiendo 2 preguntas por ahora
            feedback = '<div class="alert alert-success" role="alert">¡Excelente! Tienes muy buenas prácticas de ciberseguridad.</div>';
        } else if (score === 1) {
            feedback = '<div class="alert alert-warning" role="alert">¡Bien! Pero hay áreas donde puedes mejorar tu seguridad. Revisa nuestros consejos.</div>';
        } else {
            feedback = '<div class="alert alert-danger" role="alert">¡Atención! Es crucial que mejores tus hábitos de seguridad en línea. Revisa nuestros consejos cuidadosamente.</div>';
        }

        $testResult.html(feedback);
    });
});