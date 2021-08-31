

if ($('.hero .hero-text h1').length == 1) {
    const typed_strings = $('.hero .hero-text .typed-text').text();
    const typed = new Typed('.hero .hero-text h1', {
        strings: typed_strings.split(', '),
        typeSpeed: 80,
        backSpeed: 20,
        smartBackspace: false,
        loop: false
    });
}