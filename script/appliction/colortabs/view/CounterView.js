'use strict';

function CounterView (colorCounter) {
    var colorCounter = colorCounter;

    this.renderCounters = function () {
        var containerElement = document.querySelector('#counterarea'),
            clickNumbers = colorCounter.toJSON(),
            htmlString = '',
            color, 
            counter;
        
        for (color in clickNumbers) {
            counter = clickNumbers[color];

            htmlString += counterViewTpl.replace(/:color/g, color)
                    .replace(':counter', counter);

        }
        
        containerElement.innerHTML = htmlString;
    };
}