$('.user-sidebar-menu__item').click(function(){
    $('.user-sidebar-menu__item').removeClass('active');
    $(this).addClass('active');
    return false;
})