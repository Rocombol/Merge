'use strict';

function ControllerCountries () {
	var $container = $('#country'),
    	countryListView = new CountryListView();
		
	mediator.sub('CountryListView', function (continent){
		$container.append(countryListView.render(continent).el);
	});
	
	mediator.pub('CountryListView', 'earth');
	
	return this;	
};