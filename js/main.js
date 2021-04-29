//Iniciar scrollspy
$('body').scrollspy({target: '#menu-navegacion'});

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});

$(window).on('load', function(){
    $('#bienvenida .titulo').removeClass('oculto');
    $('#bienvenida .titulo').addClass('zoomer visible');
    $('#bienvenida .parrafo').removeClass('oculto');
    $('#bienvenida .parrafo').addClass('slideUp visible');
});
 $(window).on("scroll", function () {
    if($(window).width() < 992) {
      if ($(window).scrollTop() > $("#about").offset().top -200) {
       $('#about .profesional').removeClass('oculto');
      $('#about .profesional').addClass('slideRight visible');
      $('#about .imagen-profesional').removeClass('oculto');
      $('#about .imagen-profesional').addClass('slideLeft visible');
        
    }
  }else{
    if ($(window).scrollTop() > $("#about").offset().top -250) {
      
      $('#about .profesional').removeClass('oculto');
      $('#about .profesional').addClass('slideRight visible');
      $('#about .imagen-profesional').removeClass('oculto');
      $('#about .imagen-profesional').addClass('slideLeft visible');
  }
    }
  }); 
  $(window).on("scroll", function () {
    if($(window).width() < 992) {
      if ($(window).scrollTop() > $("#llamado-accion").offset().top -200) {
      $('#llamado-accion').removeClass('oculto');
      $('#llamado-accion').addClass('slideRight visible');
      
      $('#llamado-accion .accion .titulo').removeClass('oculto');
      $('#llamado-accion .accion .titulo').addClass('zoomer visible');
      setTimeout(function(){ 
        $('#llamado-accion .accion .titulo').removeClass('oculto');
        $('#llamado-accion .accion .titulo').addClass('zoomer visible');
       }, 800);
       setTimeout(function(){ 
        $('#llamado-accion .accion .parrafo').removeClass('oculto');
        $('#llamado-accion .accion .parrafo').addClass('zoomer visible');
       }, 1100);
       setTimeout(function(){ 
        $('#llamado-accion .accion .boton').removeClass('oculto');
        $('#llamado-accion .accion .boton').addClass('slideUp visible');
       }, 1500);
        
    }
  }else{
    if ($(window).scrollTop() > $("#llamado-accion").offset().top -250) {
      
      $('#llamado-accion').removeClass('oculto');
      $('#llamado-accion').addClass('slideRight visible');
      setTimeout(function(){ 
        $('#llamado-accion .accion .titulo').removeClass('oculto');
        $('#llamado-accion .accion .titulo').addClass('zoomer visible');
       }, 800);
       setTimeout(function(){ 
        $('#llamado-accion .accion .parrafo').removeClass('oculto');
        $('#llamado-accion .accion .parrafo').addClass('zoomer visible');
       }, 1100);
       setTimeout(function(){ 
        $('#llamado-accion .accion .boton').removeClass('oculto');
        $('#llamado-accion .accion .boton').addClass('slideUp visible');
       }, 1500);
      
  }
    }
  });

$(window).on("scroll", function () {
    if($(window).width() < 992) {
        if ($(window).scrollTop() > $("#testimonios").offset().top -200) {
            $('#testimonios .testimonios-general .titulo').removeClass('oculto');
            $('#testimonios .testimonios-general .titulo').addClass('fadeIn visible');

            setTimeout(function(){ 
                $('#testimonios .testimonios-general .parrafo').removeClass('oculto');
                $('#testimonios .testimonios-general .parrafo').addClass('fadeIn visible');
            }, 500);
            setTimeout(function(){ 
                $('#testimonios .carousel').removeClass('oculto');
                $('#testimonios .carousel').addClass('bounceIn visible');
            }, 1000);
            
           
        }
    }else{
        if ($(window).scrollTop() > $("#testimonios").offset().top -250) {            
            $('#testimonios .testimonios-general .titulo').removeClass('oculto');
            $('#testimonios .testimonios-general .titulo').addClass('fadeIn visible');
            setTimeout(function(){ 
                $('#testimonios .testimonios-general .parrafo').removeClass('oculto');
                $('#testimonios .testimonios-general .parrafo').addClass('fadeIn visible');
            }, 500);
            setTimeout(function(){ 
                $('#testimonios .carousel').removeClass('oculto');
                $('#testimonios .carousel').addClass('bounceIn visible');
            }, 1000);
           
        }
    }
});

  