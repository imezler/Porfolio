var login = (function (){

    var init = function (){
        _setUpListners();
    };

    var _setUpListners = function(){
        $('.wrapper').on('submit', _login);
    };

    var _login = function(e) {
        e.preventDefault();
        console.log('работает');

        var form = $(this),
            url = 'login.php',
            defObj = _ajaxForm(form, url);
            console.log('процесс идет');
    
    };

    var _ajaxForm = function (form, url){
        if (!validation.validateForm(form)) return false;
            data = form.serialize();
    };            

    return {
        init: init
    };
})();

login.init();
