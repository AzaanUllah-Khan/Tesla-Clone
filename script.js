let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.classList.add('hidden');
    } else {
        // Scrolling up
        navbar.classList.remove('hidden');
        navbar.classList.add('scrolled-up');
    }

    // If the user scrolls back to the top
    if (scrollTop === 0) {
        navbar.classList.remove('scrolled-up');
        navbar.classList.remove('hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Ensure lastScrollTop doesn't go below 0
});
