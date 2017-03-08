'use strict';

function ButtonView (counter) {
    var counter = counter,
		containerElement = document.createElement('div');

    this.render = function () {
		var	colors = counter.toJSON(),
            htmlString = '',
            colorTitle = Object.keys(colors),
            changeColorCounter,
            inputCollection, 
            color;

        colorTitle.forEach(function(color){
            htmlString += inputTpl.replace(/:color/g, color); 
        });  

        containerElement.innerHTML = htmlString;

        colorTitle.forEach(function(color){
            inputCollection = containerElement.querySelector('input[value="' + color + '"]');
            changeColorCounter = function () {
                    counter.increaseCount(color);
                };			
            inputCollection.addEventListener('click', changeColorCounter, false); 
        });
		
	return containerElement;	
		
	};
	
	return this;
}