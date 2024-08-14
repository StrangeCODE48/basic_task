const menuBar = document.querySelector(".menu-bar")
const hamburgerMenu = document.querySelector(".hamburger-nav-links")


menuBar.addEventListener("click" , () => {
    hamburgerMenu.classList.toggle("open")
})