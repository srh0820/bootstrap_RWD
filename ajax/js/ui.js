$(function(){
    $(window).on('scroll', function(){  // this 개념 조심하기
        let scrollps = $(this).scrollTop();
        if( scrollps > 80 ){ // 스크롤이 아래로
            $('#hd').addClass("scroll")
        }else{
            $('#hd').removeClass("scroll")
        }
    })
})