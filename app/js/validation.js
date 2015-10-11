var validation = (function () {
	
	var init = function(){
		_setUpListners();
	};

	//Прослушивает события
	var _setUpListners = function (){
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
				event: 'keydown hideTooptip'
			},
			position: position,
			style: {
				classes: 'qtip-mystyle qtip-rounded',
				tip: {
					height: 10,
					width: 16
				}
			}
		}.trigger('show'))
	};

	//Универсальная функция
	var validateForm = function (form) {
		console.log('Модуль валидации');
		var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
		 	valid = true;	
	//Проходит по всем элементам формы	 	
	$.each(elements, function(index, val){
		console.log(index);
		console.log(val);
	});  	

	};

	return{
		init: init,
		validateForm: validateForm
	};
	
})();

validation.init();