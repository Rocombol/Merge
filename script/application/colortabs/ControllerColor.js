'use strict';

function ControllerColor() {

	var $buttonContainer = $('#button'),
		$colorContainer = $('#colorarea'),
		$counterContainer = $('#counterarea'),	
		counter = new Counter(),
    	colorView = new ColorView({model:counter}),
    	counterView = new CounterView({model:counter}),
    	buttonView = new ButtonView({model:counter});
		
		$buttonContainer.append(buttonView.render().el);
	
		$counterContainer.append(counterView.render().el);
		
		$colorContainer.append(colorView.render().el);
	
	return this;
};