'use strict';

function ColorCounter () {
    var counters = {
        blue: 0,
        red: 0,
        green: 0
    };

    this.toJSON = function () {
        var json = {},
            color;

        for (color in counters) {
            json[color] = counters[color];
        }

        return json;
    };


	this.increaseCount = function (color) {
        counters[color]++;
        this.trigger('change', color);
    };


	return this;
}