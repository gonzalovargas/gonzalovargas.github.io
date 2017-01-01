$(document).ready(function() {
 
  $("#proyectos-cs").owlCarousel({
    items : 2,
    itemsCustom : false,
    itemsDesktop : [1199,2],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
    itemsScaleUp : false,
    autoHeight: false,
    navigation: true,
    lazyLoad : true,
    autoPlay: false,
    responsive: true,

  });


  $("#proyectos-lista").owlCarousel({
    items : 3,
    itemsCustom : false,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,3],
    itemsTablet: [800,2],
    itemsTabletSmall: false,
    itemsMobile : [767,1],
    singleItem : false,
    itemsScaleUp : false,
    autoHeight: false,
    navigation: true,
    lazyLoad : true,
    autoPlay: false,
    responsive: true,

  });
 
});


$('a[href^="#"]').click(function(){
        var the_id = $(this).attr("href");
            $('html, body').animate({
                scrollTop:$(the_id).offset().top
            }, 'slow');
        return false;});

$(window).scroll(function() {    
      var scroll = $(window).scrollTop();

      //>=, not <=
      if (scroll >= $('#lista').offset().top-50) {
          $("#menu").addClass("menu-top");
      } else{
        $("#menu").removeClass("menu-top");

      }
}); //missing );