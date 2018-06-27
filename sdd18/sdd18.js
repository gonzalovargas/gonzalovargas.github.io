


$("#mostrarvideos").click(function(){
    $("#masvideos").show();
    $("#mostrarvideos").hide();
    //ga('send', {hitType: 'event',eventCategory: 'Videos',eventAction: 'click',eventLabel: 'Mostrar más videos'});
});


$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})


$('#MT').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var territorial = button.data('territorial') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  if (territorial=='matias') {
    modal.find('#nombre-territorial').text('Matías Hermosilla')
    modal.find('#foto-territorial').attr('src','territoriales/matias.jpg')
    modal.find('#texto-territorial').text(`Alumno de tercer año de Ingeniería Forestal, Consejero Territorial en Agronomía e Ingeniería Forestal.
      Delegado de la generación 2015.`)
    modal.find('#fb-link').attr('href','https://www.facebook.com/Mat%C3%ADas-Hermosilla-Territorial-Agro-y-Forestal-Solidaridad-1854073648255761/')
    modal.find('#link-programa').attr('href','http://www.solidaridad.cl/CT/SDD%20-%20AGRONOM%C3%8DA%20-%20Programa%20Mati%20Hermosilla.pdf')
  } else if (territorial=='cristian') {
    modal.find('#nombre-territorial').text('Cristián López')
    modal.find('#foto-territorial').attr('src','territoriales/cristian.jpg')
    modal.find('#texto-territorial').text('Estudiante de Biología Marina, candidato a Consejero Territorial por Ciencias Biológicas.')
    modal.find('#fb-link').attr('href','https://www.facebook.com/Cristián-López-Territorial-Ciencias-Biológicas-Solidaridad-1965110273814281/')
    modal.find('#link-programa').attr('href','http://www.solidaridad.cl/CT/SDD%20-%20CS%20BIOL%C3%93GICAS%20-%20Programa%20Cristi%C3%A1n%20L%C3%B3pez.pdf')
  } else if (territorial=='emilia') {
    modal.find('#nombre-territorial').text('Emilia García')
    modal.find('#foto-territorial').attr('src','territoriales/emilia.jpg')
    modal.find('#texto-territorial').text('Alumna de tercer año de College Ciencias Sociales. Cursando el major de Sociología y el minor en Políticas Públicas, candidata a Consejera Territorial.')
    modal.find('#fb-link').attr('href','https://www.facebook.com/Emilia-Garc%C3%ADa-Territorial-College-Solidaridad-364468163966079/')
    modal.find('#link-programa').attr('href','http://www.solidaridad.cl/CT/SDD%20-%20COLLEGE%20-%20Emilia%20Garc%C3%ADa.pdf')
  } else if (territorial=='manuel') {
    modal.find('#nombre-territorial').text('Manuel Matte')
    modal.find('#foto-territorial').attr('src','territoriales/manuel.jpg')
    modal.find('#texto-territorial').text('Estudiante de 2do año de Ingeniería Comercial, candidato a Consejero Territorial.')
    modal.find('#fb-link').attr('href','https://www.facebook.com/Manuel-Matte-Territorial-Comercial-Solidaridad-398122520602436/')
    modal.find('#link-programa').attr('href','http://www.solidaridad.cl/CT/SDD%20-%20COMERCIAL%20-%20Programa%20Manuel%20Matte.pdf')
  } else if (territorial=='javi') {
    modal.find('#nombre-territorial').text('Javi León')
    modal.find('#foto-territorial').attr('src','territoriales/javi.jpg')
    modal.find('#texto-territorial').text('Estudiante de Periodismo, candidata a Consejera Territorial por Comunicaciones.')
    modal.find('#fb-link').attr('href','https://www.facebook.com/Javi-León-Territorial-Comunicaciones-Solidaridad-249257772267185/')
    modal.find('#link-programa').attr('href','http://www.solidaridad.cl/CT/SDD%20-%20COMUNICACIONES%20-%20Programa%20Javi%20Le%C3%B3n.pdf')
  } else if (territorial=='fran') {
    modal.find('#nombre-territorial').text('Fran Vidal')
    modal.find('#foto-territorial').attr('src','territoriales/fran.jpg')
    modal.find('#texto-territorial').text('Estudiante de segundo año de Construcción Civil, candidata a Consejera Territorial.')
    modal.find('#fb-link').attr('href','https://www.facebook.com/Fran-Vidal-Territorial-Construcción-Civil-Solidaridad-324313431377677/')
    modal.find('#link-programa').attr('href','http://www.solidaridad.cl/CT/SDD%20-%20CONSTRUCCI%C3%93N%20-%20Programa%20Fran%20Vidal.pdf')
  } else if (territorial=='benjamin') {
    modal.find('#nombre-territorial').text('Benjamín Sáenz')
    modal.find('#foto-territorial').attr('src','territoriales/benjamin.jpg')
    modal.find('#texto-territorial').text('Estudiante de Derecho, candidato a Consejero Territorial.')
    modal.find('#fb-link').attr('href','https://www.facebook.com/Benja-Sáenz-Territorial-Derecho-Solidaridad-143905196228372/')
    modal.find('#link-programa').attr('href','http://www.solidaridad.cl/CT/SDD%20-%20DERECHO%20-%20Programa%20Benja%20Saenz.pdf')
  } else if (territorial=='nati') {
    modal.find('#nombre-territorial').text('Natalia Moreno')
    modal.find('#foto-territorial').attr('src','territoriales/nati.jpg')
    modal.find('#texto-territorial').text('Estudiante de Pedagogía Básica , candidata a Consejera Territorial en Educación.')
    modal.find('#fb-link').attr('href','https://www.facebook.com/Nati-Moreno-Territorial-Educación-Solidaridad-112039456223486/')
    modal.find('#link-programa').attr('href','http://www.solidaridad.cl/CT/SDD%20-%20EDUCACI%C3%93N%20-%20Programa%20Nati%20Moreno.pdf')
  } else if (territorial=='agustin') {
    modal.find('#nombre-territorial').text('Agustín Iglesias')
    modal.find('#foto-territorial').attr('src','territoriales/agustin.jpg')
    modal.find('#texto-territorial').text('Alumno de cuarto de Ingeniería, candidato a Consejero Territorial. Vicepresidente Externo CAI 2017.')
    modal.find('#fb-link').attr('href','https://www.facebook.com/Benja-Ram%C3%ADrez-y-Agust%C3%ADn-Iglesias-Territoriales-Ingenier%C3%ADa-Solidaridad-1370178329759814/')
    modal.find('#link-programa').attr('href','http://www.solidaridad.cl/CT/SDD%20-%20INGENIER%C3%8DA%20-%20Programa%20Agust%C3%ADn%20Iglesias.pdf')
  } else if (territorial=='benjar') {
    modal.find('#nombre-territorial').text('Benjamín Ramírez')
    modal.find('#foto-territorial').attr('src','territoriales/benjar.jpg')
    modal.find('#texto-territorial').text('Alumno de tercero de Ingeniería, candidato a Consejero Territorial. Delegado generación 2015.')
    modal.find('#fb-link').attr('href','https://www.facebook.com/Benja-Ram%C3%ADrez-y-Agust%C3%ADn-Iglesias-Territoriales-Ingenier%C3%ADa-Solidaridad-1370178329759814/')
    modal.find('#link-programa').attr('href','http://www.solidaridad.cl/CT/SDD%20-%20INGENIER%C3%8DA%20-%20Programa%20Benja%20Ram%C3%ADrez.pdf')
  } else if (territorial=='joaquin') {
    modal.find('#nombre-territorial').text('Joaquín Carrasco')
    modal.find('#foto-territorial').attr('src','territoriales/joaquin.jpg')
    modal.find('#texto-territorial').text('Estudiante de Arquitectura, candidato a Consejero Territorial en Lo Contador.')
    modal.find('#fb-link').attr('href','https://www.facebook.com/Chino-Carrasco-Territorial-Lo-Contador-Solidaridad-486904855018592/')
    modal.find('#link-programa').attr('href','http://www.solidaridad.cl/CT/SDD%20-%20LO%20CONTADOR%20-%20Programa%20Chino%20Carrasco.pdf')
  } else if (territorial=='renato') {
    modal.find('#nombre-territorial').text('Renato Navarro')
    modal.find('#foto-territorial').attr('src','territoriales/renato.jpg')
    modal.find('#texto-territorial').text('Estudiante de Medicina, candidato a Consejero Territorial. Presidente CEMUC 2017.')
    modal.find('#fb-link').attr('href','https://www.facebook.com/Renato-Navarro-Territorial-Medicina-Solidaridad-368272540270229/')
    modal.find('#link-programa').attr('href','http://www.solidaridad.cl/CT/SDD%20-%20MEDICINA%20-%20Programa%20Renato%20Navarro.pdf')
  } else if (territorial=='tere') {
    modal.find('#nombre-territorial').text('Tere Ubilla')
    modal.find('#foto-territorial').attr('src','territoriales/tere.jpg')
    modal.find('#texto-territorial').text('Estudiante de Odontología, candidata a Consejera Territorial.')
    modal.find('#fb-link').attr('href','https://www.facebook.com/Tere-Ubilla-Territorial-Odontologia-Solidaridad-1498663080168732/')
    modal.find('#link-programa').attr('href','http://www.solidaridad.cl/CT/SDD%20-%20ODONTOLOG%C3%8DA%20-%20Programa%20Tere%20Ubilla.pdf')
  } else if (territorial=='jeli') {
    modal.find('#nombre-territorial').text('Jeliça Sapunar')
    modal.find('#foto-territorial').attr('src','territoriales/jeli.jpg')
    modal.find('#texto-territorial').text('Estudiante de Sociología e Historia, candidata a Consejera Territorial en Sociales. Secretaria General de Solidaridad durante el 2017.')
    modal.find('#fb-link').attr('href','https://www.facebook.com/Jeliça-Sapunar-Territorial-SocialesTeolog%C3%ADa-Solidaridad-247616402429484/')
    modal.find('#link-programa').attr('href','http://www.solidaridad.cl/CT/SDD%20-%20SOCIALES%20-%20Programa%20Jeli%20Sapunar.pdf')
  }
  //ga('send', {hitType: 'event',eventCategory: 'Modal',eventAction: 'click',eventLabel: 'Territorial ' + territorial});
});


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
    modal.find('#fb-link-t').attr('href','https://www.facebook.com/pablo.perelloterritorial.1')
  } else if (territorial=='maida') {
    modal.find('#nombre-territorial').text('Magdalena Ruiz-Esquide')
    modal.find('#foto-territorial').attr('src','territoriales/maida.jpg')
    modal.find('#texto-territorial').text('Estudiante de tercer año de Medicina. Consejera Territorial durante el 2017.')
    modal.find('#fb-link-t').attr('href','https://www.facebook.com/territorialsddmedicina')
  } else if (territorial=='francisco') {
    modal.find('#nombre-territorial').text('Francisco Alessandri')
    modal.find('#foto-territorial').attr('src','territoriales/francisco.jpg')
    modal.find('#texto-territorial').text('Estudiante de cuarto año de Ingeniería Civil, Consejero Territorial durante el 2017.')
    modal.find('#fb-link-t').attr('href','https://www.facebook.com/territorialsddingenieria')
  } else if (territorial=='cote') {
    modal.find('#nombre-territorial').text('Coté Poncell')
    modal.find('#foto-territorial').attr('src','territoriales/cote.jpg')
    modal.find('#texto-territorial').text('Estudiante de cuarto año de Derecho, Consejera Territorial durante el 2017.')
    modal.find('#fb-link-t').attr('href','https://www.facebook.com/territorialsddDerecho')
  } else if (territorial=='cristobal') {
    modal.find('#nombre-territorial').text('Cristóbal Quiroz')
    modal.find('#foto-territorial').attr('src','territoriales/cristobal.jpg')
    modal.find('#texto-territorial').text('Estudiante de tercer año de Agronomía, Consejero Territorial de la Facultad de Agronomía e Ingeniería Forestal durante el 2017.')
    modal.find('#fb-link-t').attr('href','https://www.facebook.com/territorialsddfaif')
  };
  //ga('send', {hitType: 'event',eventCategory: 'Modal',eventAction: 'click',eventLabel: 'Territorial ' + territorial});
});

$('#ModalFeuc').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var territorial = button.data('lista') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  if (territorial=='pablo') {
    modal.find('#nombre-feuc').text('Pablo Perelló')
    modal.find('#foto-feuc').attr('src','lista/pablo.jpg')
    modal.find('#texto-feuc').text('Estudiante de tercer año de College en traspaso a Psicología. Consejero Territorial de College el año 2017.')
  } else if (territorial=='alvaro') {
    modal.find('#nombre-feuc').text('Álvaro Cordero')
    modal.find('#foto-feuc').attr('src','lista/alvaro.jpg')
    modal.find('#texto-feuc').text('Presidente. Alumno de quinto año de la Facultad de Administración y Economía. Consejero Territorial de Administración y Economía el año 2016.')
  } else if (territorial=='mane') {
    modal.find('#nombre-feuc').text('Magdalena Ortega')
    modal.find('#foto-feuc').attr('src','lista/mane.jpg')
    modal.find('#texto-feuc').text('Primera Vicepresidenta. Alumna de quinto año de la Facultad de Derecho. Sub-consejera académica el año 2016 y Coordinadora Interna de Solidaridad el año 2017.')
  } else if (territorial=='tisco') {
    modal.find('#nombre-feuc').text('Francisco Alessandri')
    modal.find('#foto-feuc').attr('src','lista/francisco.jpg')
    modal.find('#texto-feuc').text('Segundo Vicepresidente. Alumno de cuarto año de la Facultad de Ingeniería. Consejero Territorial de Ingeniería el año 2017.')
  } else if (territorial=='maida') {
    modal.find('#nombre-feuc').text('Magdalena Ruiz Esquide')
    modal.find('#foto-feuc').attr('src','lista/maida.jpg')
    modal.find('#texto-feuc').text('Primera Secretaria Ejecutiva.Estudiante de tercer año de la Facultad de Medicina. Consejera Territorial de Medicina el año 2017.')
  } else if (territorial=='cristobal') {
    modal.find('#nombre-feuc').text('Cristóbal Quiroz')
    modal.find('#foto-feuc').attr('src','lista/cristobal.jpg')
    modal.find('#texto-feuc').text('Segundo Secretario Ejecutivo. Estudiante de tercero año de la Facultad de Agronomía e Ingeniería Forestal. Consejero Territorial de Agronomía e Ingeniería Forestal el año 2017.')
  }
  //ga('send', {hitType: 'event',eventCategory: 'Modal',eventAction: 'click',eventLabel: 'Lista ' + territorial});
});


$('#PorEllaModal').on('show.bs.modal', function (event) {
  //ga('send', {hitType: 'event',eventCategory: 'Modal',eventAction: 'click',eventLabel: 'Por Ella'});
});
$('#LaVillaModal').on('show.bs.modal', function (event) {
  //ga('send', {hitType: 'event',eventCategory: 'Modal',eventAction: 'click',eventLabel: 'La Villa'});
});
$('#transparencia').on('show.bs.modal', function (event) {
  //ga('send', {hitType: 'event',eventCategory: 'Modal',eventAction: 'click',eventLabel: 'Transparencia'});
});





$(document).ready(function() {
  $("#owl-cs").owlCarousel({
    items : 1,
    singleItem : true,
    lazyLoad : true,
    navigation : true
  });

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


  /*$("#fotos-mov").owlCarousel({
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
  });*/
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
