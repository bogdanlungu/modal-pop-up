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

    $('.drag').on("mousedown", function(){
        $(this).addClass('dragging');
    }).on("mousemove mouseout", function(event){
        if ($(this).hasClass("dragging")) {

            var left = (event.pageX - ($(this).width() / 2));
            if (left > ($(window).width() - $(this).width())) {
                left = ($(window).width() - $(this).width());
            } else if(left <= 0) {
                left = 0;
            }

            var top = (event.pageY - ($(this).height() / 2));
            if (top > ($(window).height() - $(this).height())) {
                top = ($(window).height() - $(this).height());
            } else if (top <= 0) {
                top = 0;
            }

            $(this).css({
                top: top + "px",
                left: left + "px",
                position: "absolute"
            });
        }
    }).on("mouseup", function(){
        $(this).removeClass('dragging');
    });

});
function modalPosition() {
    var width = $('.modal').width();
    var pageWidth = $(window).width();
    var x = (pageWidth / 2) - (width / 2);
    $('.modal').css({left: x + "px"});
}
