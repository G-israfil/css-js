document.addEventListener('DOMContentLoaded', function () {
    var dropdown = document.querySelector('.nav-item.dropdown');

    dropdown.addEventListener('mouseover', function () {
        var dropdownMenu = dropdown.querySelector('.dropdown-menu');
        var dropdownIcon = dropdown.querySelector('.dropdown-icon');

        dropdownMenu.classList.add('show');
        dropdownIcon.classList.add('rotate');
    });

    dropdown.addEventListener('mouseout', function () {
        var dropdownMenu = dropdown.querySelector('.dropdown-menu');
        var dropdownIcon = dropdown.querySelector('.dropdown-icon');

        dropdownMenu.classList.remove('show');
        dropdownIcon.classList.remove('rotate');
    });
});