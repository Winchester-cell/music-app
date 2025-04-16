let exploreLi = document.querySelector('.exploreLi')
let libraryLi = document.querySelector('.libraryLi')
let sideBar = document.querySelector('.sideBar')
let subExplor = document.getElementById('subExplor')
let subLibrary = document.getElementById('subLibrary')
let exploreArrowIcon = document.getElementById('exploreArrowIcon')
let libArrowIcon = document.getElementById('libArrowIcon')



exploreLi.addEventListener('click' , ()=>{
    if(subExplor.classList.contains('heightZero')){
        subExplor.classList.remove('heightZero')
        subExplor.classList.add('heightAuto')
        subExplor.style.marginBottom = '1rem'   
        exploreArrowIcon.style.transform = 'rotate(360deg)'
    }else{
        subExplor.classList.remove('heightAuto')
        subExplor.classList.add('heightZero')
        exploreArrowIcon.style.transform = 'rotate(270deg)'
        subExplor.style.marginBottom = '0'  
    }
})

libraryLi.addEventListener('click' , ()=>{
    if(subLibrary.classList.contains('heightZero')){
        subLibrary.classList.remove('heightZero')
        subLibrary.classList.add('heightAuto')
        libArrowIcon.style.transform = 'rotate(360deg)'
        subLibrary.style.marginBottom = '1rem'
    }else{
        subLibrary.classList.remove('heightAuto')
        subLibrary.classList.add('heightZero')
        libArrowIcon.style.transform = 'rotate(270deg)'
        subLibrary.style.marginBottom = '0'
    }
})