$(document).ready(function() {
    // Disable normal scrolling
    $('body').css('overflow', 'hidden');

    // Full page scroll behavior
    let sections = $('section');
    let currentIndex = 0;

    $(window).on('wheel', function(e) {
        e.preventDefault();

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

        $('html, body').scrollTop($(sections[currentIndex]).offset().top);
    });
});
