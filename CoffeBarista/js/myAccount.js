let elmBeforeNav = getElmById('beforeNav');
let elmAccountNavs = getElmByClass('account__nav--item');
let elmMainAccountContainer = getElmByClass('account__container')[0];
let elmAccountSidebar = getElmByClass('account__sidebar')[0];

elmBeforeNav.addEventListener('click', function(event){
    event.preventDefault();

    console.log(this)
});

const openAccountContent = navItem =>{
    let attr = navItem.getAttribute('data-account-content');

    if(attr){
        console.log('open info component');
        getElmById(attr).style.display = 'block';
        elmMainAccountContainer.style.display = 'block';
        elmAccountSidebar.style.display = 'none';
    }else{
        console.log('not data');
    }
}

for(let navItem of elmAccountNavs){
    navItem.addEventListener('click', function(){
        // console.log(this);
        openAccountContent(this);
    })
}

