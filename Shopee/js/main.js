// Config main slide carousel
$('.owl-carousel.main-slide__carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    slideBy: 1
})

$('.owl-carousel.brand__carousel').owlCarousel({
    margin: 10,
    nav: true,
    dots: false,
    items: 6,
    slideBy: 1
})

$('.owl-carousel.post__carousel').owlCarousel({
    margin: 10,
    nav: true,
    dots: false,
    items: 4,
    slideBy: 1
})