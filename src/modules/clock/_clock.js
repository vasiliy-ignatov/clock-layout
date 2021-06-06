$(function () {
	'use strict';
	window.UI = window.UI || {};
	
	window.UI.Clock = {
		element: $('.js-clock'),
		numbers: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
		timerClasses: '',
		init: function() {
			if (this.element.length) {
				this.getClasses();
				this.getCurrentTime();
				this.startTimer();
			}
		},
		getClasses: function() {
			var inst = this;

			this.numbers.forEach(function(item, i){
				inst.timerClasses += (' clock__number_' + item);
			});
		},
		startTimer: function() {
			var inst = this,
				dots = this.element.find('.js-clock__dots');
			
			setInterval(() => {
				inst.getCurrentTime();
				dots.toggleClass('active');
			}, 1000);
		},
		getCurrentTime: function() {
			var inst = this,
				items = this.element.find('.js-clock__item'),
				time = [],
				timeNumbers = [],
				date =  new Date();

			time.push(date.getHours());
			time.push(date.getMinutes());
			time.push(date.getSeconds());

			time.forEach(function(item, i) {
				if (String(item).length == 1) {
					timeNumbers.push(0);
					timeNumbers.push(item);
				} else {
					timeNumbers.push(Number(String(item).charAt(0)));
					timeNumbers.push(Number(String(item).charAt(1)));
				}
			});

			timeNumbers.forEach(function(item, i) {
				$(items[i]).removeClass(inst.timerClasses).addClass('clock__number_' + inst.numbers[item]);
			});
		}
	};

	window.UI.Clock.init();
}());