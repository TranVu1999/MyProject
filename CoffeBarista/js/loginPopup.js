let elmToggleLoginForm = getElmById('toggleLoginForm');
let elmLoginForm = getElmById('login-popup');
let elmCloseLoginPopup = getElmById('btnCloseLoginPopup');

elmToggleLoginForm.addEventListener('click', function(){
    console.log('toggle login form');
    elmLoginForm.classList.add('active');
    return false;
});

elmCloseLoginPopup.addEventListener('click', function(){
    elmLoginForm.classList.remove('active');
})