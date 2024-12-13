document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".mobile-menu__menu");
    const menuLinks = document.querySelectorAll(".nav-menu__link");
    const menuContainer = document.querySelector(".mobile-menu__menu");

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            // Oculta el menú después de hacer clic en un enlace
            menuContainer.classList.remove("open");
        });
    });
});
