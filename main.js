
let btn = document.getElementById('burger-btn')
let nav = document.getElementById('header-nav')


btn.onclick = () =>{
    if(nav.className.includes('header-nav-show')){
        nav.className = 'header-nav'
    } else{
        nav.className = 'header-nav header-nav-show'
    }
}

document.querySelectorAll('.header-nav-link').forEach(item =>{
    item.onclick = ()=>{
        if(nav.className.includes('header-nav-show')){
            nav.className = 'header-nav'
        } else{
            nav.className = 'header-nav header-nav-show'
        }
    }
})