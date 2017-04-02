'use strict';
var ListItemView = Backbone.View.extend({
	tagName:'tr',
	 
	template:_.template(listItemTpl),
	 
	initialize:function(){
		this.listenTo(this.model, 'change', this.render);
	}, 

	events:{
		'click .showInfo': 'findMore',
		'click .editInfo': 'editInfo'
	},
	
	render: function(){
		
		this.$el.html(this.template(this.model.toJSON()));
		//this.model.save();
		
		return this;
	},
	
	findMore:  function (){
		mediator.pub('infoView', this.model);
	},
	
	editInfo:  function (){
		mediator.pub('editView', this.model);							
	}
});

