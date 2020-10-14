$(document).ready(function() {
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
    
    $("#header__list").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    
    $(function(){
        $('.home__bottom').click(function(){$('html,body').animate({scrollTop:$('.advantages').offset().top}, 1000);});
        });
});