/*
	Capilla País 17

*/


// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


// carousel

$(document).ready(function() {
 
  $("#slider-equipo").owlCarousel({
    items : 6,
    itemsCustom : false,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [980,4],
    itemsTablet: [768,4],
    itemsTabletSmall: false,
    itemsMobile : [479,2],
    singleItem : false,
    itemsScaleUp : false,
    navigation: true,
    lazyLoad : true,
    autoPlay: 3000,
    responsive: true,
  });


  $("#capilla").owlCarousel({
    items : 3,
    itemsCustom : false,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,2],
    itemsTablet: [768,2],
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
  $("#czonas").owlCarousel({
    items : 1,
    itemsCustom : false,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
    itemsScaleUp : false,
    autoHeight: false,
    navigation: true,
    lazyLoad : false,
    autoPlay: false,
    responsive: true,
  });

  var owl = $("#czonas").data('owlCarousel');
  owl.goTo(4);
  document.getElementById("ovalle").onclick = function() {owl.goTo(0)};
  document.getElementById("coquimbo").onclick = function() {owl.goTo(1)};
  document.getElementById("losmolles").onclick = function() {owl.goTo(2)};
  document.getElementById("chincolco").onclick = function() {owl.goTo(3)};
  document.getElementById("valparaiso").onclick = function() {owl.goTo(4)};
  document.getElementById("lagranja").onclick = function() {owl.goTo(5)};
  document.getElementById("sanbernardo").onclick = function() {owl.goTo(6)};
  document.getElementById("alhue").onclick = function() {owl.goTo(7)};
  document.getElementById("rancagua").onclick = function() {owl.goTo(8)};
  document.getElementById("teno").onclick = function() {owl.goTo(9)};
  document.getElementById("sanjavier").onclick = function() {owl.goTo(10)};
  document.getElementById("talca").onclick = function() {owl.goTo(11)};
  document.getElementById("chillan").onclick = function() {owl.goTo(12)};
  document.getElementById("temuco").onclick = function() {owl.goTo(13)};
  document.getElementById("loslagos").onclick = function() {owl.goTo(14)};
  document.getElementById("puertomontt").onclick = function() {owl.goTo(15)}; 
});








$(document).ready(function(){
      $(window).scroll(function() { // check if scroll event happened
        if ($(window).width() >= 768 && $('body').is('.index')){
          if ($(document).scrollTop() > 200) { // check if user scrolled more than 50 from top of the browser window
            $(".navbar-fixed-top").css("background-color", "rgba(0,156,215,0.8)"); // if yes, then change the color of class "navbar-fixed-top"
            $(".navbar-fixed-top").css("border-bottom", "1px solid rgba(0,156,215,0.5)"); // if yes, then change the color of class "navbar-fixed-top"
          } else {
            $(".navbar-fixed-top").css("background-color", "transparent"); // if not, change it back to transparent
            $(".navbar-fixed-top").css("border-bottom", "0px solid rgba(0,156,215,0.5)");
          }
        };
      });

    });







