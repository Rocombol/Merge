'use strict';

function CountryListView (_countryList) {
	var countryList = _countryList,
		itemTable = document.createElement('table'),
		buttonAll;
	
    this.render = function(continent) {			
		itemTable.innerHTML = countryTpl;
		itemTable.innerHTML += countryButtonTpl;
		addListeners();
		
		var sortedList = countryList.getCountriesByContinent(continent);
		
		sortedList.forEach(function(country){
					
		    var countryItemView = new CountryItemView(country,countryList),
				tr = countryItemView.render(country);
			itemTable.appendChild(tr);
			
		});
		
		return itemTable;							
	};	

	function addListeners () {
		buttonAll = itemTable.querySelectorAll('button');			
		[].forEach.call(buttonAll, function (button) {
			button.addEventListener('click', showList, false);
		})						
	}		

	function showList () { 
		var continent = this.getAttribute('class');	
		mediator.pub('CountryListView', continent);	
	}		

	return this;
}