var lstMovieItem = document.querySelectorAll('.movie-tab__content .item');
let popUp_Movie = getEleById('movie-info__popup');
let arowPopUp = getEleById('arow');



lstMovieItem.forEach(function (item, index) {

    if (index < 3) {
        item.addEventListener('mouseover', function () {
            let pageScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            let w = item.offsetWidth;

            let pX = item.offsetLeft + w;
            let pY = item.offsetTop;

            popUp_Movie.classList.add('open');

            if (pageScrollTop > pY) {
                popUp_Movie.style.top = pageScrollTop + 'px';
            } else {
                popUp_Movie.style.top = pY + 'px';
            }
            arowPopUp.className = 'arow-left';
            popUp_Movie.style.left = pX + 'px';


        });
    } else {
        item.addEventListener('mouseover', function () {
            let pageScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            let w = popUp_Movie.offsetWidth;

            let pX = item.offsetLeft - w - 40;
            let pY = item.offsetTop;

            popUp_Movie.classList.add('open');

            if (pageScrollTop > pY) {
                popUp_Movie.style.top = pageScrollTop + 'px';

                range = pageScrollTop - pY;
                if(range > 50){
                    arowPopUp.style.top = range / 2 + 'px';
                }
                

            } else {
                popUp_Movie.style.top = pY + 'px';
                arowPopUp.style.top = 50 + '%';
            }

            arowPopUp.className = 'arow-right';
            popUp_Movie.style.left = pX + 'px';


        });
    }

    item.addEventListener('mouseleave', function () {
        popUp_Movie.classList.remove('open');

        popUp_Movie.addEventListener('mouseover', function () {
            popUp_Movie.classList.add('open');
        });
        popUp_Movie.addEventListener('mouseleave', function () {
            popUp_Movie.classList.remove('open');
            popUp_Movie.style.left = '-1000px';
        });
    });

});