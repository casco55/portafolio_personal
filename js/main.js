//Iniciar scrollspy
$('body').scrollspy({target: '#menu-navegacion'});

//Scroll suavizado
/* $('#menu-navegacion a').on('click', function(event){
    if(this.hash != ""){
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    }
}) */
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});