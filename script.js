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
const allH1 = document.querySelectorAll('.links h1');
const allI = document.querySelectorAll('.icons i');

hoverItems.forEach(hoverItem => {
    hoverItem.addEventListener('mouseenter', () => {
        document.getElementById('Vehicles').style.display = "none"
        document.getElementById('Energy').style.display = "none"
        document.getElementById('Charging').style.display = "none"
        document.getElementById('Discover').style.display = "none"
        document.getElementById('Shop').style.display = "none"
        document.getElementById(hoverItem.textContent).style.display = "flex"
        document.body.style.overflowY = 'hidden';
        document.querySelector('.slider-top').style.visibility = 'visible';
        document.querySelector('.slider-top').style.top = '0';
        document.querySelector('.blur').style.display = "block";
    
        const svgPaths = document.querySelectorAll('nav svg path');
        svgPaths.forEach(path => {
            path.style.fill = 'black';
        });
    
        allH1.forEach(h1 => {
            h1.style.color = 'black';
        });
    
        allI.forEach(i => {
            i.style.color = 'black';
        });
    });
    
    hoverItem.addEventListener('mouseleave', () => {
        document.body.style.overflowY = 'auto';
        document.querySelector('.slider-top').style.top = '-100%';
        document.querySelector('.slider-top').style.visibility = 'hidden';
        document.querySelector('.blur').style.display = "none";
        const svgPaths = document.querySelectorAll('nav svg path');
        svgPaths.forEach(path => {
            path.style.fill = 'white';
        });
        allH1.forEach(h1 => {
            h1.style.color = 'white';
        });
        allI.forEach(i => {
            i.style.color = 'white';
        });
    });
});
