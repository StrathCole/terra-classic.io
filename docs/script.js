function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';
}

function toggleMenu() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('menu-visible');
}

function setupMenuLinks() {
    var links = document.querySelectorAll('#nav-menu ul li a');
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            toggleMenu(); // This will close the menu
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    setupMenuLinks();
    checkLocationHash();
});

function checkLocationHash() {
    var heroSection = document.getElementById('hero');
    // Show the hero section only if the hash is '#home' or empty (no hash)
    if (window.location.hash === '#home' || window.location.hash === '') {
        heroSection.style.display = 'block';
    } else {
        heroSection.style.display = 'none';
    }

    // Show the section corresponding to the hash
    if (window.location.hash) {
        showSection(window.location.hash.substr(1));
    } else {
        showSection('home');
    }
}

// Call checkLocationHash on page load and on hash change
window.addEventListener('hashchange', checkLocationHash);