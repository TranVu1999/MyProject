let elmBeforeNav = getElmById('beforeNav');
let elmAccountNavs = getElmByClass('account__nav--item');
let elmMainAccountContainer = getElmByClass('account__container')[0];
let elmAccountSidebar = getElmByClass('account__sidebar')[0];
let elmNavCurrentAcctive = elmAccountNavs[0];
let elmAccountContents = getElmByClass('account-content--box');

elmBeforeNav.addEventListener('click', function(event){
    event.preventDefault();
    elmMainAccountContainer.style.display = 'none';
    elmAccountSidebar.style.display = 'block';
    console.log(this);
});

// Author: Tran Le Anh Vu
// Date: 20/01/2021
// Purpose: close all content of account
const closeAllAccountContent = () =>{
    for(let contentItem of elmAccountContents){
        contentItem.style.display = 'none';
    }
}

// Author: Tran Le Anh Vu
// Date: 20/01/2021
// Purpose: update title page according to attr parameter
const updateTitlePage = (attr) =>{
    let elmTitlePage = getElmById('titlePage');
    attr == 'info' && (elmTitlePage.innerHTML = "My Account");
    attr == 'address' && (elmTitlePage.innerHTML = "Sổ địa chỉ");
    attr == 'my-invoice' && (elmTitlePage.innerHTML = "Đơn hàng của tôi");
    attr == 'my-favorite' && (elmTitlePage.innerHTML = "Sản phẩm ưa thích");
    attr == 'my-readed' && (elmTitlePage.innerHTML = "Sản phẩm đã xem");
    attr == 'save-for-later' && (elmTitlePage.innerHTML = "Sản phẩm mua sau");
    attr == 'my-commented' && (elmTitlePage.innerHTML = "Đánh giá sản phẩm");
}

// When user click into account_nav
// step 1: get width of window
// step 2: get 'data-account-content' value and assign it to 'attr', if attr is different null, go to step 3; else return
// step 3: 
const openAccountContent = navItem =>{
    let windowWidth = window.innerWidth;
    let attr = navItem.getAttribute('data-account-content');

    if(attr){
        
        updateTitlePage(attr);
        // Check on mobile
        if(windowWidth <= 320){
            console.log('open info component');

            closeAllAccountContent();
            getElmById(attr).style.display = 'block';
            elmMainAccountContainer.style.display = 'block';
            elmAccountSidebar.style.display = 'none';
        }else if(windowWidth >= 1024){
            // Check on PC
            elmNavCurrentAcctive.classList.remove('active');
            let oldAttr = elmNavCurrentAcctive.getAttribute('data-account-content');
            getElmById(oldAttr).style.display = 'none';

            navItem.classList.add('active');
            elmNavCurrentAcctive = navItem;
            getElmById(attr).style.display = 'block';
            // {elmTitlePage.innerHTML = 'My Account'} 
        }
    }else{
        console.log('not data');
    }
}

// Add event click into nav account
for(let navItem of elmAccountNavs){
    navItem.addEventListener('click', function(){
        // console.log(this);
        openAccountContent(this);
    })
}

