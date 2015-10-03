$(document).ready(function() {
    $('#innerlink').click( function(event) {
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
    			});
    });
});
