'use strict';
var Counter = Backbone.Model.extend({
	defaults:{
        blue: 0,
        red: 0,
        green: 0  		
	},
	
	increaseCount: function (color) {
		this.set(color, this.get(color)+1);
		this.trigger('change', color);
	}	
});





