'use strict';

function ButtonView (colorCounter) {
    var colorCounter = colorCounter;

    this.renderButtons = function () {
        var containerElement = document.querySelector('#button'),
            colors = colorCounter.toJSON(),
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
            changeColorCounter = (function () {
                return function () {
                    colorCounter.increaseCount(color);
                };
            })();

            inputCollection.addEventListener('click', changeColorCounter, false);           
        });  

    };
}