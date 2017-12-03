


$('#ModalTerritorial').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var territorial = button.data('territorial') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  if (territorial=='pablo') {
    modal.find('#nombre-territorial').text('Pablo Perelló')
    modal.find('#foto-territorial').attr('src','territoriales/pablo.jpg')
    modal.find('#texto-territorial').text('Consejero Territorial por College durante el 2017. Actualmente estudiando psicología.')
    modal.find('#fb-link').attr('href','https://www.facebook.com/pablo.perelloterritorial.1')
  } else if (territorial=='maida') {
    modal.find('#nombre-territorial').text('Magdalena Ruiz-Esquide')
    modal.find('#foto-territorial').attr('src','territoriales/maida.jpg')
    modal.find('#texto-territorial').text('Estudiante de tercer año de Medicina. Consejera Territorial durante el 2017.')
    modal.find('#fb-link').attr('href','https://www.facebook.com/territorialsddmedicina')
  } else if (territorial=='francisco') {
    modal.find('#nombre-territorial').text('Francisco Alessandri')
    modal.find('#foto-territorial').attr('src','territoriales/francisco.jpg')
    modal.find('#texto-territorial').text('Estudiante de cuarto año de Ingeniería Civil, Consejero Territorial durante el 2017.')
    modal.find('#fb-link').attr('href','https://www.facebook.com/territorialsddingenieria')
  } else if (territorial=='cote') {
    modal.find('#nombre-territorial').text('Coté Poncell')
    modal.find('#foto-territorial').attr('src','territoriales/cote.jpg')
    modal.find('#texto-territorial').text('Estudiante de cuarto año de Derecho, Consejera Territorial durante el 2017.')
    modal.find('#fb-link').attr('href','https://www.facebook.com/territorialsddDerecho')
  } else if (territorial=='cristobal') {
    modal.find('#nombre-territorial').text('Crisóbal Quiroz')
    modal.find('#foto-territorial').attr('src','territoriales/cristobal.jpg')
    modal.find('#texto-territorial').text('Estudiante de cuarto año de Agronomía, Consejero Territorial de la Facultad de Agronomía e Ingeniería Forestal durante el 2017.')
    modal.find('#fb-link').attr('href','https://www.facebook.com/territorialsddfaif')
  }
})


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


  $("#fotos-mov").owlCarousel({
    items : 3,
    itemsCustom : false,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,2],
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
      if (scroll >= $('#bienvenido').offset().top-50) {
          $("#menu").addClass("menu-top");
      } else{
        $("#menu").removeClass("menu-top");

      }
}); //missing );
