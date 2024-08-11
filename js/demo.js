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
    });
    
    hoverItem.addEventListener('mouseleave', () => {
        document.body.style.overflowY = 'auto';
        document.querySelector('.slider-top').style.top = '-100%';
        document.querySelector('.slider-top').style.visibility = 'hidden';
        document.querySelector('.blur').style.display = "none";
    });
});
