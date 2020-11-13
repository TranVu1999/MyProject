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

$('.owl-carousel.product__carousel').owlCarousel({
    margin: 20,
    nav: true,
    dots: false,
    items: 4,
    slideBy: 1
})

$('.owl-carousel.product-small__carousel').owlCarousel({
    margin: 20,
    nav: true,
    dots: false,
    items: 3,
    slideBy: 1
})

$('.owl-carousel.product-large__carousel').owlCarousel({
    margin: 20,
    nav: true,
    dots: false,
    items: 3,
    slideBy: 1
});

$(".owl-carousel.product-vertical__carousel").owlCarousel({
    margin: 20,
    nav: true,
    dots: false,
    items: 1,
    slideBy: 1
});


// Setting countdown
var countDate = new Date('Jan 1, 2021 00:00:00').getTime();

function newYear() {
    var now = new Date().getTime();
    var gap = countDate - now;

    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var d = Math.floor(gap / (day))
    var h = Math.floor((gap % (day)) / (hour));
    var m = Math.floor((gap % (hour)) / (minute));
    var s = Math.floor((gap % (minute)) / (second));

    document.getElementById('days').innerText = d + ' Days';
    document.getElementById('hours').innerText = h + ' Hours';
    document.getElementById('minutes').innerText = m + ' Minutes';
    document.getElementById('seconds').innerText = s + ' Secs';
}


setInterval(function () {
    newYear();
}, 1000);

