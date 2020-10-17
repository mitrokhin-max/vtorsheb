$(document).ready(function() {
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
    
    /* Плавный переход к блоку */
    $("#header__list").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    
    /* Кнопка вниз */
    $('.home__bottom').click(function(){$('html,body').animate({scrollTop:$('.advantages').offset().top}, 1000);});

    /* Аккордеон */
    $('.faq__question').click(function(event) {
        if ($('.faq__body').hasClass('akkordeon')) {
            $('.faq__question').not($(this)).removeClass('active');
            $('.faq__answer').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 15,
    grabCursor: true,
})