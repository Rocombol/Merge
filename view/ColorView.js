'use strict';

function ColorView () {
    this.renderColor = function (color) {
        var colorBoxContainer = document.querySelector('#colorarea');
          colorBoxContainer.style.background=color;
    };
}