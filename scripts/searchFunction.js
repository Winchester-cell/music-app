let searchedWord = new URLSearchParams(location.search).get('searched')

console.log(searchedWord) 

let searchContainer = document.querySelector('.searchContainer')

searchContainer.innerHTML = ''

let searchedList = []

for(let song of songs){
    if(song.name.toLocaleLowerCase().includes(searchedWord)){
        searchedList.push(song)
    }
    else if(song.artist.toLocaleLowerCase().includes(searchedWord)){
        searchedList.push(song)
    }
}

const renderSearchedResult = (list)=>{
    for(let song of list){
        searchContainer.insertAdjacentHTML(`beforeend` , `
            <div onclick="goToSong(${song.id})" class="searchItem">
                    <img src="${song.pic}" alt="">
                    <div>
                        <div class="searchedItemTitle">${song.name}</div>
                        <div class="searchedItemArtist">${song.artist}</div>
                        <div class="searchedItemAlbum">Melody Album</div>
                    </div>
            </div>
            `)
    }
}

renderSearchedResult(searchedList)


const goToSong = (songID)=> {
    location.href = `music.html?music=${songID}`
}



