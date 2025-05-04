document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const topButton = document.getElementById("topButton");
    const sections = document.querySelectorAll("section");

    // Effet d'apparition des sections
    window.addEventListener("scroll", function () {
        sections.forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight * 0.8) {
                section.classList.add("visible");
            }
        });
    });

    // Affichage du bouton retour en haut
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    });

    // Retour en haut en douceur
    topButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Message de confirmation du formulaire
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Merci pour votre message, je vous répondrai bientôt !");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-container img");

    images.forEach(img => {
        img.addEventListener("click", function () {
            alert(`Vous avez cliqué sur l'image : ${img.alt}`);
        });
    });
});