'use strict';
var CountryList = Backbone.Collection.extend({

	model: Country,
	
	/*initialize: function () {
		this.fetch();
	},*/	
	
	url:'/countries',
	
	removeCountry: function(country){		
			this.remove(country);		
	},

	getCountriesByContinent: function (continent){
			var countriesByContinent = this.filter(function(itemCountry){
				return itemCountry.isOwnContinent(continent);	
			});
			return countriesByContinent;			
	}

}); 



