'use strict';

var StudentListView = Backbone.View.extend({
	
	collection: new StudentsList(),
	
	tagName: 'table',
	
	template: _.template(listTpl),
		
	render: function (){
		this.$el.html(this.template());
		
    	this.collection.forEach(function(student) {
    		var listItemView = new ListItemView({model: student});
			
            this.$el.append(listItemView.render().el);
    	}, this);		
		
		return this;
	}
	
})
