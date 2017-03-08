'use strict';

function ControllerColor() {

	var buttonContainer = document.querySelector('#button'),
		colorContainer = document.querySelector('#colorarea'),
		counterContainer = document.querySelector('#counterarea'),	
		counter = new Counter(),
    	colorView = new ColorView(counter),
    	counterView = new CounterView(counter),
    	buttonView = new ButtonView(counter),
		buttonViewRender = buttonView.render(),
		counterViewRender = counterView.render(),
	    colorViewRender = colorView.render();
			
		buttonContainer.appendChild(buttonViewRender);
	
		counterContainer.appendChild(counterViewRender);
		
		colorContainer.appendChild(colorViewRender);
	
	return this;
};