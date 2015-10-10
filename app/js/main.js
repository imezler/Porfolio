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
    	});
    });
});
//--------Вывод имени загружаемого файла в модалке------
$('#imageup').on('change', function(){
    var _this = $(this),
        val = _this.val().slice(12),
        fileNameField = $('.magic');
        fileNameField.text(val);
        if (val =="") {
            fileNameField.text('Загрузите изображение')
        };    
});     

//--------placeholder IE8------
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

//--------Модульное программирование JS -------
var myModule = (function (){

    var initInside = function (){
        _setUpListners();
    };

    var _setUpListners = function (){
        $('.project').on('submit', _addProject); //Добавляем проект
    };

    var _addProject = function (e) {
        console.log('добавление проекта');
        e.preventDefault();

        // Объявление переменных для отправки на сервер
        var form = $(this),
            url = 'add_project.php',
            data = form.serialize();

        console.log(data);
        //ajax Запрос на сервер
        $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json',
            data: data,
        })
        .done(function(answer) {
            console.log("success");
            if (answer.message === 'OK'){
                form.find('success').text(answer.text);
            }else{
                form.find('fail').text(answer.text);    
                }
             
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });
        
    };

    return{
        init: initInside
    };
})();

myModule.init();
