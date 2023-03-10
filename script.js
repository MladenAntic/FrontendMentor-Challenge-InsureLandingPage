const mobileNav = document.getElementById("mobile-nav");
const toggleMenu = document.querySelector(".toggle-menu");

const closeMenu = document.createElement("img");
closeMenu.src = "images/icon-close.svg";
closeMenu.alt = "Icon Close";
closeMenu.style.pointerEvents = "all";
closeMenu.style.cursor = "pointer";

toggleMenu.addEventListener("click", () => {
  mobileNav.style.display = "block";
  toggleMenu.replaceWith(closeMenu);
  document.body.style.overflowY = 'hidden'
});

closeMenu.addEventListener("click", () => {
  mobileNav.style.display = "none";
  closeMenu.replaceWith(toggleMenu);
  document.body.style.overflowY = 'scroll'
});

function hideMobileMenu() {
    if (window.innerWidth >= 768) {
        closeMenu.replaceWith(toggleMenu)
        mobileNav.style.display = 'none'
        document.body.style.overflowY = 'scroll'
    }
}

window.addEventListener('resize', hideMobileMenu)
