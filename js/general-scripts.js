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




const blogUrl = 'https://fromstracttxml.blogspot.com/feeds/posts/default?alt=json';

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

function populateCarousel(posts) {
    let carouselInner = document.getElementById('corousel-inner-posts');
    carouselInner.innerHTML = ''; // Clear any existing content

    let rowsHTML = '';  // Store all rows of carousel items
    let rowOpen = false;  // Track if a row is open

    posts.forEach((post, index) => {
        let postTitle = post.title.$t;
        let postContent = post.content.$t;
        let postLink = post.link.find(l => l.rel === 'alternate').href;
        let postImage = post.media$thumbnail?.url || 'https://cdn.jsdelivr.net/gh/G-israfil/css-js/img/blog-image.jpeg';  // Use a default image if none provided

        let activeClass = index === 0 ? 'active' : '';

        // Open a new row every 3 posts
        if (index % 3 === 0) {
            if (rowOpen) {
                rowsHTML += `</div></div>`;  // Close the previous row
            }
            rowsHTML += `<div class='carousel-item ${activeClass}'><div class='row mb-5'>`;  // Start a new row
            rowOpen = true;
        }

        // Create the HTML for a single post item
        let postItem = `
            <div class='col-lg-4 col-md-12 mb-4'>
                <div class='img-area'>
                    <img alt='Blog Image' class='img-fluid' src='${postImage}'/>
                </div>
                <div class='d-md-block mt-2'>
                    <h3 class='blog-header pt-3'>${postTitle}</h3>
                    <p>${truncateText(postContent, 150)}</p>
                    <div class='read-more'>
                        <span class='read-more-circle'></span>
                        <a href='${postLink}'>READ MORE</a>
                    </div>
                </div>
            </div>
        `;

        // Append the post to the current row
        rowsHTML += postItem;
    });

    // Close the final row
    if (rowOpen) {
        rowsHTML += `</div></div>`;
    }

    // Append all rows to the carousel
    carouselInner.innerHTML = rowsHTML;
}

// Utility to truncate text for the post previews
function truncateText(text, length) {
    return text.length > length ? text.substring(0, length) + "..." : text;
}

document.addEventListener('DOMContentLoaded', populateCarousel);

function grax_tm_contact_form() {
    var name = jQuery(".contact_form #name").val();
    var email = jQuery(".contact_form #email").val();
    var message = jQuery(".contact_form #message").val();
    var subject = jQuery(".contact_form #subject").val();
    var success = jQuery(".contact_form .returnmessage").data('success');
    console.log('israfil');
    jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
    //checking for blank fields	
    if ( !name || !email || !message) {
        jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
    }
    else {
        // Returns successful data submission message when the entered information is stored in database.
        jQuery.post("modal/contact.php", { ajax_name: name, ajax_email: email, ajax_message: message, ajax_subject: subject }, function (data) {
    
            jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
    
    
            if (jQuery(".contact_form .returnmessage span.contact_error").length) {
                jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);
            } else {
                jQuery(".contact_form .returnmessage").append("<span class='contact_success'>" + success + "</span>");
                jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
            }
    
            if (data === "") {
                jQuery("#contact_form")[0].reset();//To reset form fields on success
            }
    
        });
    }
return false;

}

