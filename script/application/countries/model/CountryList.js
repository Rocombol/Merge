'use strict';
var CountryList = Backbone.Collection.extend({

	model: Country,
	
	initialize: function (){
	    this.add({
			country:'Ukraine' ,
			area: '603,700',
			population: '45,238,805',
			continent: 'europe',
			earth: 'earth' 
		});		
		this.add({
			country:'USA' ,
			area: '9,826,630',
			population: '320,050,716',
			continent: 'america',
			earth: 'earth' 
		});	
		this.add({
			country:'Japan' ,
			area: '145,882',
			population: '126,475,664',
			continent: 'asia',
			earth: 'earth' 
		});	

		this.add({
			country:'France' ,
			area: '643,427',
			population: '64,291,280',
			continent: 'europe',
			earth: 'earth' 
		});	

		this.add({
			country:'China' ,
			area: '9,596,960',
			population: '1,385,566,537',
			continent: 'asia',
			earth: 'earth' 
		});	

		this.add({
			country:'Canada' ,
			area: '9,984,670',
			population: '35,181,704',
			continent: 'america',
			earth: 'earth' 
		});	

		this.add({
			country:'Zambia' ,
			area: '752,614',
			population: '14,538,640',
			continent: 'africa',
			earth: 'earth' 
		});	

		this.add({
			country:'Egypt' ,
			area: '603,700',
			population: '1,001,450',
			continent: 'africa',
			earth: 'earth' 
		});	

		this.add({
			country:'Ireland' ,
			area: '84,421',
			population: '6,378,000',
			continent: 'europe',
			earth: 'earth' 
		});	
	},
	
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



