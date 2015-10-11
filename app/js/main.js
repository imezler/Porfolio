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

    //Инициализирует модуль
    var initInside = function (){
        _setUpListners();
    };
    //Прослушивает события
    var _setUpListners = function (){
        $('.project').on('submit', _addProject);
    };
    //Добавляет проект
    var _addProject = function (e) {
        console.log('добавление проекта');
        e.preventDefault();

        // Объявление переменных для отправки на сервер
        var form = $(this),
            url = 'add_project.php',
            ServerAnswer = _ajaxForm(form, url);

        ServerAnswer.done(function(answer) {
            
            var succexBox = form.find('коробочка успех'),
                errorBox = form.find('коробочка фэйл');

            if (answer.status === 'OK'){
                errorBox.hide();
                succexBox.text(answer.text).show; 
            }else{
                succexBox.hide();
                errorBox.text(answer.text).show;    
                }
        })
    };


    //-----------------Универсальная функция ajax--------------------
    //Используется 
    //@form - форма
    //@url - адрес Php файла, к которому мы обращаемся
    // 1.проверить форму
    // 2.собрать данные из формы
    // 3.вернуть ответ с сервера
    var _ajaxForm = function (form, url){
        //if (!valid) return false;
        data = form.serialize();

        var result = $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json', 
            data: data,
        }).fail( function(answer){
            console.log('Проблемы в PHP');
            form.find('коробочка с сообщением').text('На сервере произошла ошибка').show();
        });
        
        return result;
    };
    //Возвращает публичные методы
    return{
        init: initInside
    };
})();

myModule.init();
