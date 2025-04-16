const swiper = new Swiper('.swiper', {
    effect: 'coverflow' ,
    centeredSlides: true ,
    initialSlide: 2,
    preventClicks: true ,
    slidesPerView: 'auto' , 
    speed: 600 ,
    loop: true,
    coverflowEffect:{
        rotate: 0 ,
        stretch: 0 ,
        depth: 100 ,
        modifier: 1 ,
        slideShadows: true ,
    },
    on: {
        click(event){
            swiper.slideTo(this.clickedIndex)

        }
    } ,
  
  

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });