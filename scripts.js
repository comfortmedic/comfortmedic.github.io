$(document).ready(function() {
    // Smooth scroll to services section
    $('a[href="#services"]').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    // Full page scroll behavior
    let sections = $('section');
    let currentIndex = 0;

    $(window).on('wheel', function(e) {
        if ($('html, body').is(':animated')) {
            return;
        }

        if (e.originalEvent.deltaY > 0) {
            // Scroll down
            if (currentIndex < sections.length - 1) {
                currentIndex++;
            }
        } else {
            // Scroll up
            if (currentIndex > 0) {
                currentIndex--;
            }
        }

        $('html, body').animate({
            scrollTop: $(sections[currentIndex]).offset().top
        }, 800);
    });
});
