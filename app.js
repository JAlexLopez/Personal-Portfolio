function toggleMenu() {
    var links = document.getElementById('nav-links'),
        container = document.getElementById('nav-container');

    if (links.style.display === "flex") {
        links.style.display = "none";
        container.style.backgroundColor = 'transparent';
    } else {
        links.style.display = 'flex';
        links.classList.add('active-menu');
        links.classList.add('fade-in');
        container.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
}