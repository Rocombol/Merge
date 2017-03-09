'use strict';

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
	
	this.like = function (item){
		item.parentNode.classList.add('like');				
	}
	
	this.dislike = function (item){
		item.parentNode.remove(item.children)
	}
	
    return this;
}

 