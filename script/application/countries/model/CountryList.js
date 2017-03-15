'use strict';
function CountryList () {
			
       var countryCollection = getCountryArray();
	   			
		this.removeCountry = function (country){
			var deletIndex = countryCollection.indexOf(country);			
			countryCollection.splice(deletIndex,1);
		}
		
		this.getCountriesByContinent = function (continent){							
			var countriesByContinent = countryCollection.filter(function(itemCountry){
				return itemCountry.isOwnContinent(continent);	
			});
			return countriesByContinent;
		}		
		
		function getCountryArray (){
				var ukraine = new Country("Ukraine", "603,700", "45,238,805", "europe", "earth"),
        		usa = new Country("Usa", '9,826,630', "320,050,716", "america", "earth"),
        		france = new Country("France", '643,427', "64,291,280", "europe", "earth"),
        		china = new Country("China", '9,596,960', "1,385,566,537", "asia", "earth"),
        		canada = new Country("Canada", "9,984,670", "35,181,704", "america", "earth"),
        		zambia = new Country("Zambia", "752,614", "14,538,640", "africa", "earth"),
        		egypt = new Country("Egypt", "1,001,450", "82,056,378", "africa", "earth"),
				argentina = new Country("Argentina", "2,780,400", "43,132,000", "america", "earth"),
				kenya = new Country("Kenya", "582,650", "39,002,772", "africa", "earth"), 
				spain = new Country("Spain", "504,782", "45,061,274", "europe", "earth"),
				japan = new Country("Japan", "145,882", "126,475,664", "asia", "earth"),
				mexico = new Country("Mexico", "1,972,550", "121,006,000", "america", "earth"),
				germany = new Country("Germany", "357,021", "83,251,851", "europe", "earth"),
				ireland = new Country("Ireland", "84,421", "6,378,000", "europe", "earth"),
				estonia = new Country("Estonia", "45,339", "1,317,797", "europe", "earth"),
				southkorea = new Country("South korea", "100,210", "50,801,405", "asia", "earth"),
				singapore = new Country("Singapore", "719", "5,610,000", "asia", "earth"),
				prc = new Country("People's Republic of China", "35,581", "23 140 000", "asia", "earth"),
				vietnam = new Country("Vietnam", "332,698", "92,700,000", "asia", "earth");	
			var countryArray = 	[ukraine, usa, france, china, canada, singapore, zambia,
				egypt, argentina, prc, kenya, spain, japan, vietnam, mexico, germany, estonia,southkorea, ireland];
			return countryArray;
		}


		
	return this;
}