'use strict';
var EditView = Backbone.View.extend({
	tagName:'div',
	className:'editPanel',
	
	template: _.template(editViewTpl),
	
	events:{
		'click .saveInfo':'changeData',
		'click .closeEdit':'closeInfo'
	},
	
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		
		return this;
	},
	
	closeInfo: function (){
		this.$el.remove();
	},
	
	changeData: function (){
			
		_.each(this.$('input'), function(input){
			if (input.value!==''){
				this.model.set(input.name, input.value);				
			} 				
		},this);

		this.closeInfo();
		this.model.save();
		mediator.pub('infoView', this.model);

	}
})



