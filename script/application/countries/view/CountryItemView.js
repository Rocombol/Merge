'use strict';

var CountryItemView = (function(){

	function CountryItemView (_country, countryList){

		var country = _country,
			$itemTr = $('<tr>'),
			buttonLike, buttonDislike, buttonDelete;

		this.render = function () {
			var html = '',
				json = country.toJSON();		
			
			html += renderTemplate(countryItemTpl, json);		
		      		
			$itemTr.append(html);			      		
			addListeners();				

		return $itemTr;
	   };
	   
		function like () {
			var likeItem = this.parentNode;
				country.like(likeItem);
		}
		
		function dislike () {		
			var deleteItem = this.parentNode;
				country.dislike(deleteItem);						
				removeListeners();
		}
		
		function deleteRow () {
			
			removeListeners();		
			countryList.removeCountry(country);		
			$itemTr.empty()		
		}	
		
		function addListeners () {
			buttonSearch();
			buttonLike.on('click', like);			
			buttonDislike.on('click', dislike);		
			buttonDelete.on('click', deleteRow);		
		}	
		
		function removeListeners () {
			buttonSearch();
			buttonLike.off('click', like);			
			buttonDislike.off('click', dislike);		
			buttonDelete.off('click', deleteRow);				
		}
		
		function buttonSearch (){
			buttonLike = $itemTr.find('.likebutton');
			buttonDislike = $itemTr.find('.dislike');		
			buttonDelete = $itemTr.find('.delete');			
		}	  
	
		return this;
	}
	
	return CountryItemView;
})();