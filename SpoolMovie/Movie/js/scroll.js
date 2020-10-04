var pageY_odd = 0;
var pageY_new = 0;

var header = document.querySelector('header');
var header_find_box = document.querySelector('.header-scroll__find');

window.onscroll = function(ev) {
    pageY_new = window.scrollY;
    if(pageY_new > pageY_odd){
        header.classList.add('down');
        header_find_box.classList.remove('active');

    }else if(pageY_new < pageY_odd){
        header.classList.remove('down');
        header_find_box.classList.add('active');
    }

    pageY_odd = pageY_new;
};