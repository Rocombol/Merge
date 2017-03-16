'use strict';

var CountryListView = (function(){
	
	function CountryListView (_countryList) {
		var countryList = _countryList,
			$itemTable = $('<table>'),
			$buttonAll;	
				
		this.render = function(continent) {			
			$itemTable.append(countryButtonTpl); 
			addListeners();
			
		var sortedList = countryList.getCountriesByContinent(continent);
			
		sortedList.forEach(function(country){
			var countryItemView = new CountryItemView(country,countryList),
				tr = countryItemView.render(country);
			$itemTable.append(tr);
				
		});
			
			return $itemTable;							
		};	
			
		function addListeners () {
			$buttonAll = $itemTable.find('button');			
		
		
			$buttonAll.each(function(index){				
				$(this).click(function() {
					$('#country').empty();
				});
				$(this).on("click", showList);				
			});
			
		}

		function showList () { 
			var continent = this.getAttribute('class');			
			mediator.pub('CountryListView', continent);		
		}			
		
	    return this;	
	}
		
	return CountryListView;
})();