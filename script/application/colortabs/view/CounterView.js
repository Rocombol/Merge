'use strict';
var CounterView = Backbone.View.extend({
	
	tagName:'div',

	initialize: function () {
          this.model.on('change', this.render, this);
    },
	
	render: function () {
		var clickNumbers = this.model.toJSON(),
			html = '',
		    color, 
           counterClick;		
		for (color in clickNumbers) {
            counterClick = clickNumbers[color];

        html += counterViewTpl.replace(/:color/g, color)
                .replace(':counterClick', counterClick);
		}  				
		this.$el.html(html);		
		return this;		
	}		
});























