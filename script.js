// Función para manejar el scroll y cambiar el estilo del header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Función para el menú móvil
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('header nav ul');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});

window.addEventListener('scroll', animateOnScroll);

// Carrusel de testimonios
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonio');

function showTestimonial(index) {
    testimonials.forEach(testimonial => testimonial.style.display = 'none');
    testimonials[index].style.display = 'flex';
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Iniciar el carrusel
showTestimonial(currentTestimonial);
setInterval(nextTestimonial, 9000); // Cambiar cada 5 segundos