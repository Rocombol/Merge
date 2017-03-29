'use strict';

var StudentListView = Backbone.View.extend({
	
	collection: new StudentsList(),
	
	initialize: function () {
		this.collection.fetch();
		this.collection.on('add', this.renderOnce, this);
	},	
	
	tagName: 'table',
	
	template: _.template(listTpl),
		
	render: function (){
				
		this.$el.html(this.template());
				
		this.collection.forEach(this.renderOnce, this);
				
		return this;
	},
	
	renderOnce: function (student){	
    	var listItemView = new ListItemView({model: student});	
        this.$el.append(listItemView.render().el);
	}	
})






