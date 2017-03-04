'use strict';

function CounterView (counter) {
    var counter = counter,
	    containerElement = document.createElement('div');
		

    this.render = function () {
   		var clickNumbers = counter.toJSON(),
            html = '',
            color, 
            counterClick;
        
        for (color in clickNumbers) {
            counterClick = clickNumbers[color];

            html += counterViewTpl.replace(/:color/g, color)
                    .replace(':counterClick', counterClick);

        }      
			       
    containerElement.innerHTML = html;
    
	return containerElement;
		
	};

	
    counter.on('change', this.render);
	
	return this;
}

