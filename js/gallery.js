/* const images = [
    'https://via.placeholder.com/300x200',
    'https://via.placeholder.com/300x300',
    'https://via.placeholder.com/300x400',
    'https://via.placeholder.com/300x500',
    'https://via.placeholder.com/300x600',
    'https://via.placeholder.com/400x300',
    'https://via.placeholder.com/500x300',
    'https://via.placeholder.com/600x300',
    'https://via.placeholder.com/700x300',
    'https://via.placeholder.com/800x300',
    'https://via.placeholder.com/900x300',
    'https://via.placeholder.com/1000x300',
];

const imagesPerPage = 5;
let currentPage = 1;

function renderGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    
    const start = (currentPage - 1) * imagesPerPage;
    const end = start + imagesPerPage;
    const imagesToShow = images.slice(start, end);
    
    imagesToShow.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.onload = () => {
            gallery.appendChild(img);
        };
        img.onerror = () => {
            console.error(`Image failed to load: ${src}`);
        };
    });

    renderPagination();
}

function renderPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(images.length / imagesPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.disabled = i === currentPage;
        button.addEventListener('click', () => {
            currentPage = i;
            renderGallery();
        });
        pagination.appendChild(button);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
}); */
// Get the modal
