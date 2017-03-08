'use strict';

function ControllerCountries () {
	var container = document.querySelector('#country'),
		countryList = new CountryList(),
    	countryListView = new CountryListView(countryList),
		countryListViewRender;
		
	mediator.sub('CountryListView', function (continent){
		countryListViewRender = countryListView.render(continent);
		container.appendChild(countryListViewRender);
	});
	
	mediator.pub('CountryListView', 'earth');
	
	return this;	
};