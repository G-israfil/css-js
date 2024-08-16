document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.anchor_nav li a');
    const portfolioItems = document.querySelectorAll('.gallery_zoom li');

    filterButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const category = button.textContent.trim();
            filterPortfolioItems(category);
            // Update the current class for the filter buttons
            filterButtons.forEach(btn => btn.parentElement.classList.remove('current'));
            button.parentElement.classList.add('current');
        });
    });

    function filterPortfolioItems(category) {
        portfolioItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            if (category === 'Hepsi' || itemCategory === category) {
                item.style.display = 'block';
                item.classList.remove('fade-out');
                item.classList.add('fade-in');
            } else {
                item.classList.remove('fade-in');
                item.classList.add('fade-out');
                setTimeout(() => {
                    item.style.display = 'none';
                }, 500); // Match the duration with the CSS transition
            }
        });
    }

    // Set initial filter to 'Hepsi'
    filterPortfolioItems('Hepsi');
});


