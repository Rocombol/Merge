'use strict';

var Country = (function(){
	function Country (country, area, population, continent, earth) {
		var values = {
			country: country,
			area: area,
			population: population,
			continent: continent,
			earth: earth 
		};
		
		this.toJSON = function () {
			return values;
		};
					
		this.get = function (key) {
			return values[key];
		};
		
		return this;
	}
	function _like (item){
		item.parentNode.classList.add('like');				
	}
		
	function _dislike (item){
		item.parentNode.remove(item.children)
	}
		
	function _isOwnContinent (continent){
		if(continent=='earth'){
			return	this.get('earth') == continent;
		}
			return this.get('continent') == continent;		
	}
		
	Country.prototype.isOwnContinent = _isOwnContinent;
	Country.prototype.like = _like;
	Country.prototype.dislike = _dislike;
		
	return Country;
		
})();
