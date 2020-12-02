let elmToggleMenu = document.getElementById('toggle-menu');
elmToggleMenu.addEventListener('click', function() {
    if(elmToggleMenu.classList.contains('active')){
        elmToggleMenu.classList.remove('active');
        $('#toggle-menu .icon-menu').css('display', 'inline');
        $('#toggle-menu .icon-cross').css('display', 'none');
        $('#responsive-menu').css('transform', 'translateX(-100%)');
    }else{
        elmToggleMenu.classList.add('active');
        $('#toggle-menu .icon-menu').css('display', 'none');
        $('#toggle-menu .icon-cross').css('display', 'inline');
        $('#responsive-menu').css('transform', 'translateX(0%)');

    }
    
})



