'use strict';
var CountryList = Backbone.Collection.extend({

	model: Country,
	
	url:'/countries',
	
	removeCountry: function(country){		
			this.remove(country);
			//this.model.destoy();		
	},

	getCountriesByContinent: function (continent){
			var countriesByContinent = this.filter(function(itemCountry){
				return itemCountry.isOwnContinent(continent);	
			});
			return countriesByContinent;			
	}

}); 



