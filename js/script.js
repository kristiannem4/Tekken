(function($, document, window, undefined){

$('.map_container').parallax();
$('#backgr1').parallax();
$('#backgr2').parallax();
$('article').parallax();

$('.row').on('click', function(e){
e.preventDefault();
});
$('table').on('click',function(e){
e.preventDefault();
});

/*Characters*/

$(document).on('mouseenter', 'a', function() {
    var id = $(this).attr('href'),
        $img = $('.hover_champ_container img');

    if (id && id !== '#') {
       $img.attr('src', id);
    }
});

$(document).on('mouseleave', 'a', function() {
    var img = $('.hover_champ_container img')
    img.attr('src', 'img/nothing.png');
});

$('.row .random').on('mouseenter', function() {
    const $this = $(this);

    if ($this.data('running')) return; 
        $this.data('running', true);

    const postavy = [
        'img/xiaoyu.png', 'img/yoshimitsu.png', 
        'img/nina.png', 'img/law.png', 
        'img/hwoarang.webp', 'img/eddy.webp','img/paul.png','img/king.png','img/lei.png','img/jin.png','img/dr.png','img/prototypejack.png','img/devilkazuya.png','img/bigogre.png','img/ogr.png','img/roger.WEBP','img/baek.png','img/julia.png','img/armorking.png','img/gunjack.png','img/anna.png','img/bryan.webp','img/heihachi.png','img/ganryu.png','img/michelle.png','img/jun.png','img/kunimitsu.png','img/kazuya.png','img/bruce.png','img/kuma.png','img/jack.png','img/lee.webp'];
    
    var img = $('.hover_champ_container img'),
        interval = setInterval(function() {

        var nahodnyIndex = Math.floor(Math.random() * postavy.length),
            vybranyObrazok = postavy[nahodnyIndex];
    
        img.attr('src', vybranyObrazok);
    }, 100);

    $this.data('interval', interval);
});

$('.row .random').on('mouseleave', function() {
    var $this = $(this);
    clearInterval($this.data('interval'));
    $this.data('running', false); 
    
    var img = $('.hover_champ_container img')
    return img.attr('src', 'img/nothing.png');
});

$('.champs_select a').lightbox();

$(document).on('click','.row a','.random ',function(event){
     $('.champ_text div').hide();
    var attribute = $(this).attr('href') || $('.hover_champ_container').find('img').attr('src');

    var delenie = attribute.split(/[\/\.]/),
        druheSlovo = delenie[1],
        finalTextClass = '.' + druheSlovo + "_text";
    $(finalTextClass).show();
    event.preventDefault();
   
});


/*MAPS*/

$('.map_container').on('click',function(e){
    e.preventDefault();
});


/*Vytvorenie plnej mapy a nazvu na klik aj s posunom*/
$('.map_container a').on('click', function(event){
    event.preventDefault();
    var attr = $(this).find('img').attr('src');
    $('#fullmap').remove();
    
    $('<div/>', { 
        id: 'fullmap',
        class: 'animation' 
    })      .css('background-image', 'url(' + attr + ')')
            .appendTo('.map_container');
    
    
    var pozicia = $('#fullmap').offset().top,
        vyska = $('#fullmap').height() / 2,
        dolnapozicia = pozicia + vyska,
        prveDelenie = attr.split(/[\/\_\.]/),
        mapNameContent = prveDelenie [2];

    $('<div/>', { 
        class: 'map_name animation_map_name' 
        }).prependTo('.map_container');
        
    const p = document.createElement('p');
    document.querySelector('.map_name').prepend(p);  
    p.textContent = mapNameContent.toUpperCase();
   
    $('.map_container a').fadeOut();        
    
    $('html, body').animate({scrollTop:dolnapozicia},1000);   
});


/*Vypnutie mapy aj nazvu a scrollnutie na zaciatok map*/   
$(document).on('click','.map_container', function(event) {
    
    if (!$(event.target).closest('.map_container a').length) {
        var pozicia = $('.map_container').offset().top;
        
        $('.map_container a').fadeIn();
        $('.map_name').remove();
        $('#fullmap').remove();

        $("html, body").animate({
        scrollTop: pozicia
    }, 1000);

        event.preventDefault();
    }
}); 

$(document).on('keyup',function(event){

    if (event.which === 27) {
        var pozicia = $('.map_container').offset().top;
        $('#fullmap').remove();
        $('.map_name').remove();
        $('.map_container a').fadeIn();
        $("html, body").animate({
        scrollTop: pozicia
    }, 1000);   
        }

});  

    
/*Scrollnutie na zaciatok stranky*/ 
$(document).on('click','.up',function(event){
    
    event.preventDefault();
    $("html, body").animate({
        scrollTop: 0
    }, 1000);

});


/*skrytie sipky v urcitej vyske*/
window.onscroll = function() {
  var myElement = $('.up');
  if (window.scrollY > 1200) {
    myElement.removeClass('hidden');
  } else {
    myElement.addClass('hidden');
  }
};    


/*scrollovanie na kliknutie v headeri*/
$('nav').find('a').on('click',function(event){
     $('html, body').animate({ scrollTop: $(this.hash).offset().top},2000,function() {
        window.location.hash = this.hash;});
     event.preventDefault();
     });    


/*pohyb tlacitka pri vojdeny na neho*/
$('.prank').on('mouseenter mousemove',function(){
   
    var bot = Math.floor(Math.random() * 11),
        right = Math.floor(Math.random() * 29 );
    
    $(this).css({bottom: bot +'em', right: right +'em' });
    
});
    
$('.prank a').on('click',function(event){
    
    event.preventDefault();
    $(this).stopPropagation();
    
});




$('table a').lightbox_table();

/*zobrazenie informacii o championovi v overlayi*/
$(document).on('click','table a',function(event){
     $('.table_champions table').hide();
    var attribute = $(this).attr('href') || $('.hover_champ_container').find('img').attr('src');

    var delenie = attribute.split(/[\/\.]/),
        druheSlovo = delenie[1],
        finalTextClass = '.' + druheSlovo;
    $(finalTextClass).show();
    event.preventDefault();
   
});



})(jQuery,document,window);