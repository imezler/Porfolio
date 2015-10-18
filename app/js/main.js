// --------Всплытие Popup--------  
$(document).ready(function() {
    $('.add').click( function(event) {
        event.preventDefault();
        $('.addprojpop').fadeIn(400,
            function(){
            	$('.project')
            		.css('display', 'block')
            		.animate({opacity:1, top: '15%'}, 200);
        });
    });
    /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
    $('btnclose, .addprojpop').click( function(){
      $('.project')
    		.animate({opacity: 0, top: '10%'}, 200,
    		function(){
    			$(this).css('display', 'none');
    			$('.addprojpop').fadeOut(400);
          $('.project').trigger('reset');
    	});
    });
});


//--------placeholder IE8-------------------------
$(document).ready(function() {
    if (!Modernizr.input.placeholder) {
        $('input, textarea').placeholder();
    };
});



