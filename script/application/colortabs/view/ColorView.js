'use strict';

var ColorView = Backbone.View.extend({
	tagName:'div',
	className:'colorDiv',

    initialize: function () {
        this.model.on('change', this.render, this);
    },
	
	render: function (color){
	var html = colorViewTpl.replace(':color', color);
	this.$el.html(html);
	
	return this;
	}
})

