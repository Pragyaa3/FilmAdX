document.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('section.collapsible');

    sections.forEach(function(section) {
        var heading = section.querySelector('h2');
        heading.addEventListener('click', function() {
            section.classList.toggle('active');
        });
    });
});

/* JS for Partner With Us Page*/

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.3}s`;
    });
});



