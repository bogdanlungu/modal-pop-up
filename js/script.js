$(function(){
    modalPosition();
    $(window).resize(function(){
        modalPosition();
    });
    $('.open').click(function(){
        $('.modal, .overlay').fadeIn('fast');
    });
    $('.close').click(function(){
        $('.modal, .overlay').fadeOut('fast');
    });
});
function modalPosition() {
    var width = $('.modal').width();
    var pageWidth = $(window).width();
    var x = (pageWidth / 2) - (width / 2);
    $('.modal').css({left: x + "px"});
}
