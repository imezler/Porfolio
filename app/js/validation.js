var validation = (function () {
	
	var init = function(){
		_setUpListners();
	};

	//Прослушивает события
	var _setUpListners = function (){
		$('form').on('keydown', '.empty_error', _removeError);
		$('form').on('reset', _cleanForm);
	};

	var _cleanForm = function(form) {
		var form = $(this);
		form.find('input, textarea').trigger('hideTooltip');
		form.find('.empty_error').removeClass('empty_error');
	};

	var _removeError = function() {
		$(this).removeClass('empty_error'); 
	}; 
	//Создает тултипы
	var _createQtip = function (element, position){
		if (position === 'right') {
			position = {
				my: 'left center',
				at: 'right center'
			}
		}else{
			position = {
				my: 'right center',
				at: 'left center',
				adjust: {
					method: 'shift none'
				}
			}
		}
		//Инициализация тултипа
		element.qtip({
			content: {
				text:function() {
					return $(this).attr('qtip-content');
				}
			},
			show: {
				event: 'show'
			},
			hide: {
				event: 'keydown hideTooltip'
			},
			position: position,
			style: {
				classes: 'qtip-mystyle qtip-rounded',
				tip: {
					height: 10,
					width: 16
				}
			}
		}).trigger('show')
	};

	//Универсальная функция
	var validateForm = function (form) { 
		var elements = form.find('input, textarea').not('input[type="hidden"]'),
		 	valid = true;	
	//Проходит по всем элементам формы	 	
	$.each(elements, function(index, val){
		var element = $(val),
			val = element.val(),
			pos = element.attr('qtip-position');

		if (val.length === 0){
			element.addClass('empty_error');
			element.siblings('.magic').addClass('err');
			_createQtip(element, pos);
			valid = false;
		}
	});  	
	return valid;
	};

	return{
		init: init,
		validateForm: validateForm
	};
	
})();

validation.init();