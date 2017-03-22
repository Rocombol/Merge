'use strict';

var CountryListView = Backbone.View.extend({
	tagName: 'table',
	
	collection: new CountryList(),
	
	template: _.template(countryTpl),
	
	events:{
		'click .button':'showList',
	},
	
	render: function(continent){		
		this.$el.html(this.template());
		 
	var sortedList = this.collection.getCountriesByContinent(continent);	 
					
		sortedList.forEach(function(country){
			var counrtyItemView = new CountryItemView({
				model: country,
				collection:this.collection
				});
			
			this.$el.append(counrtyItemView.render().el);
		},this)		
		
		return this;
	},
	
	showList: function(){
	
	var continent = event.target.name;
	
		mediator.pub('CountryListView', continent);		
	}
	
})




