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


//--------placeholder IE8--------------------------------
$('[placeholder]').parents('form').submit(function() {
  $(this).find('[placeholder]').each(function() {
    var input = $(this);
    if (input.val() == input.attr('placeholder')) {
      input.val('');
    }
  })
});

$('[placeholder]').focus(function() {
  var input = $(this);
  if (input.val() == input.attr('placeholder')) {
    input.val('');
    input.removeClass('placeholder');
  }
}).blur(function() {
  var input = $(this);
  if (input.val() == '' || input.val() == input.attr('placeholder')) {
    input.addClass('placeholder');
    input.val(input.attr('placeholder'));
  }
}).blur();

