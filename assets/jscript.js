$("#logo").hover(
    function () {
        $(this).stop().css('opacity', '0').html(function (_, oldText) {
            return oldText == 'FIRELINK APLIKACJE WEB' ? 'FIRELINK STRONA GŁÓWNA' : 'FIRELINK APLIKACJE WEB'
        }).animate({
            opacity: 1
        }, 0);
    });