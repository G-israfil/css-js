$(document).ready(function () {
    var t, i, a = 2500, n = 660, o = 1500;
    function s(e) {
        var t = function (e) {
            return e.is(":last-child") ? e.parent().children().eq(0) : e.next();
        }(e);
        e.parents(".cd-headline").hasClass("clip") && e.parents(".cd-words-wrapper").animate({
            width: "2px"
        }, n, function () {
            var i;
            i = t,
                e.removeClass("is-visible").addClass("is-hidden"),
                i.removeClass("is-hidden").addClass("is-visible"),
                function (e, t) {
                    e.parents(".cd-headline").hasClass("clip") && e.parents(".cd-words-wrapper").animate({
                        width: e.width() + 10
                    }, n, function () {
                        setTimeout(function () {
                            s(e);
                        }, o);
                    });
                }(t);
        });
    }
    t = $(".cd-headline"),
        i = a,
        t.each(function () {
            var t = $(this);
            if (t.hasClass("clip")) {
                var a = t.find(".cd-words-wrapper"), n = a.width() + 10;
                a.css("width", n);
            }
            setTimeout(function () {
                s(t.find(".is-visible").eq(0));
            }, i);
        });
});

$(document).ready(function () {
    $('.zoom').magnificPopup({
        type: 'inline',
        midClick: true,
        gallery: {
            enabled: false
        },
        callbacks: {
            open: function () {
                var item = this.st.el.closest('.list_inner'); // Get the clicked item
                var title = item.data('title');
                var description = item.data('description');
                var imageSrc = item.data('image');

                // Set the popup content
                $('#popup-title').text(title);
                $('#popup-description').text(description);
                $('#popup-image').attr('src', imageSrc).css({
                    'width': '100%',
                    'height': '20%',
                    'filter': 'grayscale(0) brightness(1)'
                });

                $('.mfp-content').css('overflow', 'hidden'); // Ensure no overflow in the popup
                $('.mfp-close').appendTo('.mfp-content').css({
                    'position': 'absolute',
                    'right': '5%',
                    'top': '0.5rem !important',
                });
            }
        }
    });
});




const blogUrl = 'https://myblogerxbs.blogspot.com/feeds/posts/default?alt=json';

async function fetchPosts() {
    try {
        const response = await fetch(blogUrl);
      console.log(response)
        const data = await response.json();
        return data.feed.entry || [];
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

function createCarouselItem(post, index) {
    return `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <div class="row mb-5">
                <div class="col-lg-6 col-md-12 mb-4">
                    <div class="img-area">
                        <img class="img-fluid" src="${post.images ? post.images[0].url : 'https://via.placeholder.com/500'}" alt="Blog Image">
                    </div>
                    <div class="d-md-block mt-2">
                        <h3 class="blog-header pt-3">${post.title['$t']}</h3>
                        <p>${post.content['$t'].substring(0, 200)}...</p>
                        <div class="read-more">
                            <span class="read-more-circle"></span>
                            <a href="${post.url}">READ MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

async function populateCarousel() {
  console.log('israfil')
    const posts = await fetchPosts();
  console.log(posts)
    const carouselInner = document.getElementById('corousel-inner-posts');
  console.log(carouselInner)
    carouselInner.innerHTML = posts.map((post, index) => createCarouselItem(post, index)).join('');
  console.log(carouselInner)
}

document.addEventListener('DOMContentLoaded', populateCarousel);
