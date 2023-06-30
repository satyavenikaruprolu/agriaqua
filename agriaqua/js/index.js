const dropDownElement = document.getElementById('navbarNavDropdown');

const navLinks = document.querySelectorAll('.nav-link');
const dropdownItems = document.querySelectorAll('.dropdown-item');

navLinks.forEach((link) => {
    if(!link.textContent.includes("Explore More")) {
        link.addEventListener('click', () => {
            dropDownElement.classList.remove('show');
        });
    }
})

dropdownItems.forEach((item) => {
    item.addEventListener('click', () => {
        dropDownElement.classList.remove('show');
    })
})