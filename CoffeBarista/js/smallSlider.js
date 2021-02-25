let elmSmallSliderDots = document.querySelectorAll('.small-slider .dot');
let elmFirstSmallSlide = document.querySelector('.small-carousel .item');
const distance = 355;
let oldDotActive = 0;

for(let item of elmSmallSliderDots){
    item.addEventListener('click', function(){
        let currentSlide = parseInt(this.getAttribute("data-current-slide"));
        let pos = distance * currentSlide;
        elmFirstSmallSlide.style.marginTop = -pos + "px";

        elmSmallSliderDots[oldDotActive].classList.remove('active');
        this.classList.add('active');

        oldDotActive = currentSlide;

    })
}