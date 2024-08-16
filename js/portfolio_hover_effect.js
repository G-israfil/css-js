

document.addEventListener('DOMContentLoaded', function() {
    const portfolioItems = document.querySelectorAll('.grax_tm_portfolio .list_inner');
    
    portfolioItems.forEach(item => {
        const details = item.querySelector('.details');
        
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left - 10;
            const y = e.clientY - rect.top + 12;
            
            details.style.left = `${x}px`;
            details.style.top = `${y}px`;
            details.style.opacity = 1;
            details.style.visibility = 'visible';
        });
        
        item.addEventListener('mouseleave', () => {
            details.style.opacity = 0;
            details.style.visibility = 'hidden';
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img[data-toggle="modal"]');
    const modalImage = document.getElementById('modalImage');

    images.forEach(img => {
      img.addEventListener('click', () => {
        modalImage.src = img.src;
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.getElementById('dropdownMenuLink');
    var icon = document.getElementById('dropdownIcon');

    dropdown.addEventListener('mouseenter', function() {
        icon.classList.remove('bi-chevron-down');
        icon.classList.add('bi-chevron-up');
    });

    dropdown.addEventListener('mouseleave', function() {
        icon.classList.remove('bi-chevron-up');
        icon.classList.add('bi-chevron-down');
    });
});
