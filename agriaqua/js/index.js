function closeNavbar() {
    var navbar = document.querySelector('.navbar-collapse');
    if (navbar.classList.contains('show')) {
    navbar.classList.remove('show');
    }
}