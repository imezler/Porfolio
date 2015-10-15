//--------Модульное программирование JS -------
var myModule = (function (){

    //Инициализирует модуль
    var initInside = function (){
        _setUpListners();
    };
    //Прослушивает события
    var _setUpListners = function (){
        $('.project').on('submit', _addProject);
        $('#imageup').on('change', _chooseYourDestiny);
    };

     var _chooseYourDestiny = function(){
        var $this = $(this),
        val = $this.val().slice(12),
        fileNameField = $('.magic');
        fileNameField.text(val);
        if (val !== ""){
            $('.magic').removeClass('empty_error');
            $('.magic').trigger('hideTooltip');
        };
    };

    //Добавляет проект
    var _addProject = function (e) {
        console.log('добавление проекта');
        e.preventDefault();

        // Объявление переменных для отправки на сервер
        var form = $(this),
            url = 'add_project.php',
            defObj = _ajaxForm(form, url);

        if (defObj){ 
            defObj.done(function(answer) {
            
            var succexBox = form.find('success'),
                errorBox = form.find('fail');

            if (answer.status === 'OK'){
                errorBox.hide();
                succexBox.text(answer.text).show; 
            }else{
                succexBox.hide();
                errorBox.text(answer.text).show;    
                }
        })         
        }
    };

   
    //-----------------Универсальная функция ajax--------------------
    //Используется 
    //@form - форма
    //@url - адрес Php файла, к которому мы обращаемся
    // 1.проверить форму
    // 2.собрать данные из формы
    // 3.вернуть ответ с сервера
    var _ajaxForm = function (form, url){
        if (!validation.validateForm(form)) return false;
            data = form.serialize();

            var result = $.ajax({
                url: url,
                type: 'POST',
                dataType: 'json', 
                data: data,
            }).fail( function(answer){
                console.log('Проблемы в PHP');
                form.find('fail').text('На сервере произошла ошибка').show();
            });
        return result;
    };
    //Возвращает публичные методы
    return{
        init: initInside
    };
})();

myModule.init();
