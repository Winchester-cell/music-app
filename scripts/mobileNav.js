let searchBtn = document.querySelector('.mobileSearchButton')
let searchExitBtn = document.querySelector('.searchExit')
let searchBoxMobile = document.querySelector('.searchBoxMobile')
let navMobileMenu = document.querySelector('.navMobile')
let hamburgerMenu = document.querySelector('.hamburgerMenu')
let exitOverlay = document.querySelector('.exitOverlay')
let exitNavbarBtn = document.querySelector('.exitNavbar')
let main = document.querySelector('main')


searchBtn.addEventListener('click' , ()=>{
    searchBoxMobile.style.bottom = '-47px'
    main.style.marginTop = '7.5rem'
})
searchExitBtn.addEventListener('click' , ()=>{
    searchBoxMobile.style.bottom = '0'
    main.style.marginTop = '6rem'
   
})
hamburgerMenu.addEventListener('click' , ()=>{
    navMobileMenu.style.left = '0'
    exitOverlay.style.display = 'block'
})
exitNavbarBtn.addEventListener('click' , ()=>{
    navMobileMenu.style.left = '-12rem'
    exitOverlay.style.display = 'none'
})
exitOverlay.addEventListener('click' , ()=>{
    navMobileMenu.style.left = '-12rem'
    exitOverlay.style.display = 'none'
})



