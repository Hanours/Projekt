const navbar = document.querySelector('header');
window.onscroll = () => {
    if (window.scrollY > 25) {
        navbar.classList.add('menu-active');
    } else {
        navbar.classList.remove('menu-active');
    }
};