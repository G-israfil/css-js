document.addEventListener("DOMContentLoaded", function () {
    var testimonialSlider = document.getElementById('testimonialSlider');
    var interval = 2000; // Interval in milliseconds (5 seconds)

    var carouselItems = testimonialSlider.querySelectorAll('.carousel-item');
    var totalItems = carouselItems.length;
    var currentSlide = 0;

    function showSlide(index) {
        carouselItems[currentSlide].classList.remove('active');
        carouselItems[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        var next = (currentSlide + 1) % totalItems;
        showSlide(next);
    }

    var intervalId = setInterval(nextSlide, interval);

    // Pause on mouse hover
    testimonialSlider.addEventListener('mouseenter', function () {
        clearInterval(intervalId);
    });

    // Resume on mouse leave
    testimonialSlider.addEventListener('mouseleave', function () {
        intervalId = setInterval(nextSlide, interval);
    });

    // Handle carousel indicators click
    var indicators = testimonialSlider.querySelectorAll('.carousel-indicators button');
    indicators.forEach(function (indicator, index) {
        indicator.addEventListener('click', function () {
            showSlide(index);
            clearInterval(intervalId); // Stop interval on indicator click
        });
    });
});
