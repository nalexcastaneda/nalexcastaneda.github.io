const slideNav = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-a');
    const navLinks = document.querySelectorAll('.nav-a li');
    //Toggle navBar
    burger.addEventListener('click', () => {
        nav.classList.toggle('active-nav');
            //Links animation
    navLinks.forEach((link, index) => {
        link.style.animation = `navLinksAnimation 0.5s ease forwards ${index / 7}s`;
        console.log(index / 7 + 1);
    });
    });
}

slideNav();
