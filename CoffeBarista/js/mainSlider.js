console.log("main slider");
let navLeft = document.querySelector(".main-carousel__nav .nav-left");
let navRight = document.querySelector(".main-carousel__nav .nav-right");
let elmSlide = document.querySelectorAll(".main-carousel .item");
let elmDot = document.querySelectorAll(".main-carousel__dots .dot");
let pos = 0;
let currentSlide = 0;

navLeft.style.display = "none"; 

navLeft.addEventListener("click", function() {
    elmSlide[currentSlide].classList.remove("active");
    elmSlide[currentSlide].classList.add("leave");

    elmDot[currentSlide].classList.remove("active");

    if(currentSlide > 0){
        currentSlide--;
        pos = currentSlide * 100 
        elmSlide[0].style.marginLeft = -pos + "%";
        navRight.style.display = "block";
        elmSlide[currentSlide].classList.add("active");
        elmSlide[currentSlide].classList.remove("leave");

        elmDot[currentSlide].classList.add("active");
    }

    if(currentSlide === 0){
        navLeft.style.display = "none"; 
    }
   
});

navRight.addEventListener("click", function() {
    elmSlide[currentSlide].classList.remove("active");
    elmSlide[currentSlide].classList.add("leave");

    elmDot[currentSlide].classList.remove("active");

    if(currentSlide <= 2){
        currentSlide++;
        pos = currentSlide * 100 
        elmSlide[0].style.marginLeft = -pos + "%";
        navLeft.style.display = "block";

        elmSlide[currentSlide].classList.add("active");
        elmSlide[currentSlide].classList.remove("leave");

        elmDot[currentSlide].classList.add("active");
    }
    if(currentSlide === 2){
        navRight.style.display = "none";
    }
});

for(let item of elmDot){
    item.addEventListener("click", function(){
        elmDot[currentSlide].classList.remove("active");
        elmSlide[currentSlide].classList.add("leave");

        currentSlide = parseInt(this.getAttribute("data-current-slide"));
        this.classList.add("active");

        pos = currentSlide * 100 
        elmSlide[0].style.marginLeft = -pos + "%";
        elmSlide[currentSlide].classList.add("active");
        elmSlide[currentSlide].classList.remove("leave");

        if(currentSlide === 0){
            navLeft.style.display = "none"; 
        }else{
            navLeft.style.display = "block"; 
        }

        if(currentSlide === 2){
            navRight.style.display = "none";
        }else{
            navRight.style.display = "block"; 
        }
    })
}