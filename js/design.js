/* JavaScript Document */
$(document).ready(function(){

// Cunado se hace click en el boton de navegación
// Se aumenta la altura del nav según el tamaño del primer ul
// Se retira el atributo style cuando no esta activo el nav

  $('nav a.mobile_menu').on('click', function(){
    var currentNavHeight = $('nav').height();
    if(currentNavHeight < 5){
      var newNavHeight = $('nav > ul').height() + 15;
      $('nav').animate({'height':newNavHeight+'px'},750);
    }else{
      $('nav').animate({'height':'0px'},750,function(){
        $(this).removeAttr('style');
      });
    }
  });
  $(window).resize(function(){
    if( $(this).width() > 625 ){
      $('nav').removeAttr('style');
    }
  })
});
