let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
        navbar.classList.add('scrolled-up');
    }

    if (scrollTop === 0) {
        navbar.classList.remove('scrolled-up');
        navbar.classList.remove('hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

const hoverItems = document.querySelectorAll('.links h1');

hoverItems.forEach(hoverItem => {
    hoverItem.addEventListener('mouseenter', () => {
        document.body.style.overflowY = 'hidden';
    });

    hoverItem.addEventListener('mouseleave', () => {
        document.body.style.overflowY = 'auto';
    });
});
