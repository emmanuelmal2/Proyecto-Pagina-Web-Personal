document.addEventListener("DOMContentLoaded", function () {
    // Animación para los íconos sociales
    const socialIcons = document.querySelectorAll(".social-icons a");

    socialIcons.forEach(icon => {
        icon.addEventListener("mouseover", () => {
            icon.style.transform = "scale(1.3) rotate(5deg)";
        });
        icon.addEventListener("mouseout", () => {
            icon.style.transform = "scale(1) rotate(0deg)";
        });
    });

    // Observador de intersección para animar secciones
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.2
    });

    sections.forEach(section => {
        section.classList.add("hidden");
        observer.observe(section);
    });

    // Mostrar/ocultar secciones al hacer clic en los enlaces del menú
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Evita el comportamiento predeterminado del enlace

            // Oculta todas las secciones
            sections.forEach(section => {
                section.style.display = "none";
            });

            // Muestra la sección correspondiente al enlace clicado
            const targetSectionId = this.getAttribute("href").substring(1); // Obtén el ID de la sección
            const targetSection = document.getElementById(targetSectionId);

            if (targetSection) {
                targetSection.style.display = "block"; // Muestra la sección
            }
        });
    });

    // Muestra la sección de inicio por defecto al cargar la página
    document.getElementById("inicio").style.display = "block";
});