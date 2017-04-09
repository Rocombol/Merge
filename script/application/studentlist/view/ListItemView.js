'use strict';
var ListItemView = Backbone.View.extend({
	tagName:'tr',
	 
	template:_.template(listItemTpl),
	 
	initialize:function(){
		this.listenTo(this.model, 'change', this.render);
	}, 

	events:{
		'click .showInfo': 'findMore',
		'click .editInfo': 'editInfo',
		'click .addStudent': 'addStudent'
	},
	
	render: function(){
		
		this.$el.html(this.template(this.model.toJSON()));
	
		return this;
	},
	
	findMore:  function (){
		mediator.pub('infoView', this.model);
	},
	
	editInfo:  function (){
		mediator.pub('editView', this.model);							
	},	

	addStudent:  function (){
		var newStudent = new Student();
		mediator.pub('editView', newStudent);						
	}
});

