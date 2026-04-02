;(function($,window,document,undefined){
$.fn.parallax = function (options){
    //zakladne nastavenia
    var settings = $.extend({
        friction: 0.1
    }, options);

    //ulozime si jquery verziu okna
    var $win = $(window);

    //vratime object pre chaining 
    return this.each( function() {
        var element = $(this),
            startingPosition = {
                left: element.css('backgroundPosition').split(' ')[0],
                top: parseInt(element.css('backgroundPosition').split(' ')[1], 10)
            }
            console.log(startingPosition);
        $win.on('scroll', function() {
            var  bgTop = element.offset().top + startingPosition.top,
                winTop = $win.scrollTop();
            var newBgTop = Math.floor( (bgTop - winTop) * settings.friction );

                element.css({backgroundPosition: startingPosition.left + ' ' + newBgTop + 'px'});
        });
    });
}


})(jQuery,window,document);