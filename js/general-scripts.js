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


document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to all .read-more divs
    document.querySelectorAll('.read-more-link-button').forEach(a => {
        readMoreDiv.addEventListener('click', function() {
            // Find the <a> tag within the .read-more div
            console.log('israfil clicked')
            const link = this.querySelector('.read-more-link');
            console.log(link)
            if (link) {
                const url = link.getAttribute('href');
                window.location.href = url;  // Redirect to the URL on the same page
            }
        });
    });
});



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

