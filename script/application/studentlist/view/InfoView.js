'use strict';
var InfoView = Backbone.View.extend({
	tagName: 'ul',
	className:'addInfo',
	
	template: _.template(infoViewTpl),
	
	events:{
		'click .closeInfo':'closeInfo'
	},
	
	render: function(){		
		this.model.save();
		this.$el.html(this.template(this.model.toJSON()));
		
		return this;
	},
	
	closeInfo: function(){
		this.$el.remove();
	}	
})
