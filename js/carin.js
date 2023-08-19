$(()=>{
    // 스와이퍼 
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1, // 화면에 몇장씩 보이게 할거니?
        // spaceBetween: 30, // 사이간격
        autoplay: true, // 자동으로 넘어가게 할거니?
        autoplay : { // 자동으로 넘어가게 할거니?
            delay : 5000, // 몇초 간격으로 넘어가게할거니?
            disableOnInteraction : false // 건들면 안넘어가게 할거니?
        },
        // centeredSlides: true, // 1번 슬라이드가 가운데 보이기
        loop: true, // 반복할거니?
        navigation: {
          nextEl: ".swiper-button-next", // 다음으로 넘어가게 하는 요소
          prevEl: ".swiper-button-prev", // 이전으로 넘어가게 하는 요소
        },
        
      });

    //   whiteback open
    $('.whiteopen')
    .hover(
        function(){
            $('.whiteback').css({
                opacity : 1
            })
            $(this).find('.sub-nav').addClass('on')
        },
        function(){
            $('.whiteback').css({
                opacity : 0
            })
            
            $(this).find('.sub-nav').removeClass('on')
        })








})