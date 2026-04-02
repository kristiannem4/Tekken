(function($, document, window, undefined){

    var character = {
        image: null,
        element: null,
        visibility: null,
        settings: null,

        show: function(){
            this.visibility[this.settings.showEffect](this.settings.speed);
        },

        hide: function(){
        this.visibility[this.settings.hideEffect](this.settings.speed);
        },

        attachHandlers: function(){
            this.element.on('mouseleave',function(){
                character.hide();
            });
            
            $(document).on('keyup',function(event){
                if (event.which === 27) character.hide();
            });
            
    
            this.element.on('mouseenter', function(event){
            
                character.setImage( $(this).attr('href'));
                character.show();
                
            });
        },
        
        setImage: function(url){
            this.image.attr('src', url);
        }
};

 $.fn.character = function(options)
    {
        
        var settings = $.extend({
            speed: 250,
            showEffect: 'slideDown',
            hideEffect: 'slideUp',
            complete: null
        }, options);
    
        
    }
 })(jQuery,window,document);
