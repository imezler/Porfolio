var contact = (function () {
	
	var init = function(){
		_setUpListners();
	};

	//Прослушивает события
	var _setUpListners = function (){
		$('#contactMe').on('submit', _submitForm);
	};

	var _submitForm = function(e) {
		e.preventDefault();
		
		var form = $(this),
			url = 'contact.php',
			defObf = _ajaxForm(form, url);

			//что-то будем делать с ответом сервера	
	} 
	var _ajaxForm = function(form, url){
		if (!validation.validateForm(form)) return false;
		//если false, то код ниже не будет выполнен
	};

	return {
		init:init
	};
	
})();

contact.init();