'use strict';

function ControllerCountries () {
	var $container = $('#country'),
		countryList = new CountryList(),
    	countryListView = new CountryListView(countryList),
		countryListViewRender;
		
	mediator.sub('CountryListView', function (continent){		
		
		countryListViewRender = countryListView.render(continent);		
		$container.append(countryListViewRender);
	});
	
	mediator.pub('CountryListView', 'earth');
	
	return this;	
};