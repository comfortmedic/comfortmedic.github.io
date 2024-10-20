$(document).ready(function() {
    // Smooth scroll to services section
    $('a[href="#services"]').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
});
