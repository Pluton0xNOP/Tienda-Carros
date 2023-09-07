document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    setInterval(function() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % totalSlides;
        slides[currentIndex].classList.add('active');
    }, 2000);  
});

document.addEventListener("DOMContentLoaded", function() {
    let botonesDetalles = document.querySelectorAll(".detalles-btn");

    botonesDetalles.forEach(btn => {
        btn.addEventListener("click", function() {
            let descripcion = this.nextElementSibling;
            if (descripcion.style.display === "none" || descripcion.style.display === "") {
                descripcion.style.display = "block";
            } else {
                descripcion.style.display = "none";
            }
        });
    });
});
