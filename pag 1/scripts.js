// scripts.js - Escuela de Conducción Profesional

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-contacto');
    const mensajeExito = document.getElementById('mensaje-exito');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Simulación de envío
        mensajeExito.style.display = 'block';
        form.reset();
        setTimeout(() => {
            mensajeExito.style.display = 'none';
        }, 3500);
    });

    // Scroll suave para navegación
    document.querySelectorAll('nav a').forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            const destino = document.querySelector(this.getAttribute('href'));
            if(destino) {
                e.preventDefault();
                destino.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // FLIP CARD: Girar al hacer clic en la tarjeta
    document.querySelectorAll('.flip-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // Evita que el click en el botón Solicitar abra el modal directamente
            if(e.target.classList.contains('solicitar-btn')) return;
            this.classList.toggle('girada');
        });
    });

    // Redirigir a WhatsApp con mensaje personalizado al hacer clic en Solicitar
    document.querySelectorAll('.solicitar-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.flip-card');
            const paquete = card.querySelector('.flip-card-front h4').textContent;
            const mensaje = `Hallo! Ik zou geïnteresseerd zijn in de aankoop  ${paquete}.`;
            const numero = '3165119657'; // Mismo número que el botón WhatsApp
            window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`, '_blank');
        });
    });
});
