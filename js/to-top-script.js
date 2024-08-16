document.addEventListener('DOMContentLoaded', function () {
    const toTopButton = document.getElementById('toTopButton');
    const footer = document.querySelector('footer');

    // Hide button initially
    toTopButton.style.display = 'none';

    // Scroll to top when button is clicked
    toTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Show/Hide button based on scroll position and change color near footer
    window.addEventListener('scroll', function () {
        const footerRect = footer.getBoundingClientRect();
        const buttonRect = toTopButton.getBoundingClientRect();

        if (window.scrollY > 100) { // Show button after scrolling down 100px
            toTopButton.style.display = 'block';
        } else {
            toTopButton.style.display = 'none';
        }

        if (footerRect.top <= window.innerHeight && footerRect.bottom >= 0) {
            toTopButton.classList.add('white');
        } else {
            toTopButton.classList.remove('white');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.querySelector('.navbar-toggler');
    const offcanvas = document.querySelector('#offcanvasNavbar');

    offcanvas.addEventListener('show.bs.offcanvas', function () {
        toggler.classList.add('open');
    });

    offcanvas.addEventListener('hide.bs.offcanvas', function () {
        toggler.classList.remove('open');
    });
});