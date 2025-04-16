let popularSongsList = songs.splice(0 , 5)

let popularSectionContainer = document.getElementById('popular')


const renderPopularSongsTab = (list)=> {
    popularSectionContainer.innerHTML = ''
    for ( let song of list){
        popularSectionContainer.insertAdjacentHTML('beforeend' , `
    
            <div class="swiper-slide">
                <img src="${song.pic}">
                <div class="slideMenu">
                        <div class="optionPlay">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                            </svg>      
                        </div>
                        <div class="optionAddFav">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>                
                    </div>
                    <div class="optionMore">
                            <svg fill="currentColor" viewBox="0 0 92 92" xmlns="http://www.w3.org/2000/svg"><path d="m21 53c-1.8 0-3.7-.8-5-2.1s-2-3.1-2-4.9.8-3.6 2-5c1.3-1.3 3.1-2 5-2 1.8 0 3.6.8 4.9 2 1.3 1.3 2.1 3.1 2.1 5 0 1.8-.8 3.6-2.1 4.9s-3.1 2.1-4.9 2.1zm29.9-2.1c1.3-1.3 2.1-3.1 2.1-4.9s-.8-3.6-2.1-5c-1.3-1.3-3.1-2-4.9-2s-3.7.8-5 2c-1.3 1.3-2 3.1-2 5 0 1.8.8 3.6 2 4.9 1.3 1.3 3.1 2.1 5 2.1 1.8 0 3.6-.8 4.9-2.1zm25 0c1.3-1.3 2.1-3.1 2.1-4.9s-.8-3.6-2.1-5c-1.3-1.3-3.1-2-4.9-2s-3.7.8-5 2c-1.3 1.3-2 3.1-2 5 0 1.8.8 3.6 2 4.9 1.3 1.3 3.1 2.1 5 2.1 1.8 0 3.6-.8 4.9-2.1z"/></svg>
                    </div>
                </div>
            </div>    
    
            `)

    }

}

renderPopularSongsTab(popularSongsList)

let recentTrackList = songs.slice((songs.length - 10) , (songs.length + 1))

let recentTrackCont = document.querySelector('.trackPartBody')

const renderRecentTracksTab = (list)=> {
    recentTrackCont.innerHTML = ''
    for(let song of list){
        recentTrackCont.insertAdjacentHTML(`beforeend` , `

            <div onclick="postClickFunc(${song.id})" class="trackPostCont cPointer hoverScale">
                <img src="${song.pic}" alt="">
                <div class="trackName" >${song.name}</div>
                <div class="artistName" >${song.artist}</div>
                <div class="albumName" >Melody Album</div>
            </div>
            
            `)
    }
}

renderRecentTracksTab(recentTrackList)

const postClickFunc = (musicID)=>{
    location.href = `music.html?music=${musicID}`
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