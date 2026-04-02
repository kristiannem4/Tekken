(function($, document, window, undefined){

    var lightbox = {
        image: null,
        overlay: null, 
        element: null,
        settings: null,
        

        init: function(e, settings){
            this.element = e ;
            this.overlay = $('#overlay');
            this.settings = settings;

            if (this.overlay.length) 
                this.image = this.overlay.find('img');
            else
                this.createOverlay();

                this.attachHandlers();
        },
        show: function(){
              
            $('body').css('overflow', 'hidden'); 
            this.overlay[this.settings.showEffect](this.settings.speed);

        },
        hide: function(){
            $('body').css('overflow', 'auto'); 
            this.overlay[this.settings.hideEffect](this.settings.speed);
            
          
        },
        createOverlay: function(){
            
            this.overlay = $('<div/>', {id: 'overlay'}).hide();
            this.image = $('<img/>', {src: '', alt: ''}).appendTo( this.overlay );
           $('.champ_text').appendTo(this.overlay);
            this.overlay.appendTo('body');
        },

        attachHandlers: function(){
            //chceme skryt po kliku na overlay
            this.overlay.on('click',function(){
                lightbox.hide();
                lightbox.image.attr('href','');
                 $('.up').show();
               
            });
            //po ESC chceme skryt
            $(document).on('keyup',function(event){
                if (event.which === 27) lightbox.hide();
                $('.up').show();
            });
            
            //chcem zobrazit lightbox po kliku
            this.element.on('click', function(event){
            
                event.preventDefault();

                lightbox.setImage( $(this).attr('href')|| $('.hover_champ_container').find('img').attr('src') );
                lightbox.show();
                 $('.up').hide();
               
                
            });
        },
        setImage: function(url){
            this.image.attr('src', url);
            
        },

      


    };

    

    $.fn.lightbox = function(options)
    {
        
        var settings = $.extend({
            speed: 500,
            showEffect: 'fadeIn',
            hideEffect: 'fadeOut',
            complete: null
        }, options);
    
        return this.each(function(){
            lightbox.init( $(this), settings );
        });
    }
    })(jQuery,document,window);


    