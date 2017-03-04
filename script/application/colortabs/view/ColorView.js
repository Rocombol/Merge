'use strict';

function ColorView (counter) {
	var counter = counter,
		colorBoxContainer = document.createElement('div');
	
    this.render = function (color) {
    
        var html = colorViewTpl.replace(':color', color);
            
        colorBoxContainer.classList.add('colorDiv');
		
		colorBoxContainer.innerHTML = html;
		
		return colorBoxContainer;
    };

  counter.on('change', this.render);
	
	return this;
}

