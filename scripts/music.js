let musicSideBar = document.querySelector('.musicSideBar')

const renderNextup = (list)=> {
    for( let song of list){
        musicSideBar.insertAdjacentHTML('beforeend' , `
            <div onclick="musicSelectFunc(${song.id})" class="musicItem flex cPointer">
                    <img src="${song.pic}" alt="">
                    <div class="detail">
                        <div class="songsName">${song.name}</div>
                        <div class="artistsName">${song.artist}</div>
                        <div class="albumsName">Melody Album</div>
                    </div>
            </div>
            `) 
    }
}

renderNextup(songs)

let targetMusicID = new URLSearchParams(location.search).get('music')

let targetSong = songs.find((song)=>{
    return song.id == targetMusicID
})

let musicDetailContainer = document.querySelector('.bottomD')

let music = document.querySelector('audio')
let playBtn = document.getElementById('play')
let pauseBtn = document.getElementById('pause')
let backwardBtn = document.getElementById('backward')
let forwardBtn = document.getElementById('forward')
let progressBar = document.getElementById('cir2')
let handle = document.getElementById('handle')
let progressCircle = document.getElementById('progressCircle')
let durationElem = document.getElementById('durationElem')
let controls = document.getElementById('controlsBar')
music.src = targetSong.src


const renderMusicDetail = (song)=> {
    musicDetailContainer.innerHTML = ''
    musicDetailContainer.insertAdjacentHTML('beforeend' , `
                <div class="musicDetail flexBetween">
                    <img src="${song.pic}" alt="">
                    <div class="Dholder">
                        <div id="songsNameD">${song.name}</div>
                        <div id="artistNameD">${song.artist}</div>
                    </div>
                    <div class="action flex gap05">
                        <div id="addToFavorite">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                              </svg>                          
                        </div>
                        <div id="download">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                              </svg>
                              
                        </div>
                    </div>
                </div>
        `)
}

const musicSelectFunc = (songID)=>{
    location.href = `music.html?music=${songID}`
}


renderMusicDetail(targetSong)

musicIsPlaying = false

playBtn.addEventListener('click' , (e)=>{
    music.play()
    playBtn.style.display = 'none'
    pauseBtn.style.display = 'block'
})

pauseBtn.addEventListener('click' , (e)=>{
    music.pause()
    playBtn.style.display = 'block'
    pauseBtn.style.display = 'none'
})

backwardBtn.addEventListener('click' , (e)=>{
    music.currentTime -= 10
})

forwardBtn.addEventListener('click' , (e)=>{
    music.currentTime += 10
})

let isClicked = false

let musicTimePercent
let degree
let newPercent
let min
let sec


music.addEventListener('timeupdate' , ()=>{
    if(!isClicked){
        musicTimePercent = Math.round(music.currentTime / music.duration * 100)
        degree = Math.round(musicTimePercent / 100 * 360) + 2
        progressBar.style.strokeDashoffset = 3210 - (3210 * musicTimePercent /100)
        handle.style.transform = `rotate(${degree}deg)`
    }
    min = Math.floor (music.currentTime / 60 ) 
    sec = Math.floor( music.currentTime % 60 ) 

    if(sec < 10 && min < 10){
        durationElem.innerHTML = `0${min} : 0${sec}`
    }
    else if( sec < 10){
        durationElem.innerHTML = `${min} : 0${sec}`
    }
    else if( min < 10){
        durationElem.innerHTML = `0${min} : ${sec}`
    }
    else{
        durationElem.innerHTML = `${min} : ${sec}`
    }


})


progressCircle.addEventListener('pointerdown' , (event) =>{
    isClicked = true
})


progressCircle.addEventListener('pointermove' , (event) => {
    let elemWidth = progressCircle.getBoundingClientRect().width
    let x = event.offsetY - elemWidth/2 
    let y = event.offsetX - elemWidth/2 
    let r = Math.abs(Math.atan( x / y ) * 180 / Math.PI)   
    console.log(r);
    
    
    if(isClicked){
        if(x > 0 && y > 0 ){
            handle.style.transform = `rotate(${r}deg)`
        }
        if(x > 0 && y < 0 ){
            r = 180 - r
            handle.style.transform = `rotate(${r}deg)`
        }
        if(x < 0 && y < 0 ){
            r = 180 + r
            handle.style.transform = `rotate(${r}deg)`
        }
        if(x < 0 && y > 0 ){
            r = 360 - r
            handle.style.transform = `rotate(${r}deg)`
        }
    
        
        newPercent = degToPerCent(r) - 1
        
        progressBar.style.strokeDashoffset = 3210 - (3210 * newPercent /100)
    
        music.currentTime = newPercent / 100 * music.duration
    }
    
})

window.addEventListener(`pointerup` , ()=>{
    isClicked = false
})




const degToPerCent = (deg)=> {
    return deg / 360 * 100
}

let searchInput = document.getElementById('searchInput')
let searchInputMobile = document.getElementById('searchInputMobile')

searchInput.addEventListener(`keydown` , (event) =>{
    if(event.key == 'Enter'){
        location.href = `search-result.html?searched=${searchInput.value.toLocaleLowerCase()}`
    }
})
searchInputMobile.addEventListener(`keydown` , (event) =>{
    if(event.key == 'Enter'){
        location.href = `search-result.html?searched=${searchInputMobile.value.toLocaleLowerCase()}`
    }
})