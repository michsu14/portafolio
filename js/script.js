$(document).ready(function(){
     /* abrir y cerrar menu responsive */
     $('#abrir').click(function(){
         $('#menu-responsive').animate({
             right:0
         });
         $('#abrir').hide();
         $('#cerrar').show();
     });
     $('#cerrar').click(function(){
        $('#menu-responsive').animate({
            right:-292
        });
        $('#abrir').show();
        $('#cerrar').hide();
    });
});