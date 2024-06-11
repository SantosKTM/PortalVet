// script.js

document.getElementById('menu-icon').addEventListener('click', function() {
    var navOptions = document.getElementById('nav-options');
    if (navOptions.classList.contains('show')) {
        navOptions.classList.remove('show');
    } else {
        navOptions.classList.add('show');
    }
});

