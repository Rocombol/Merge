'use strict';

var CountryItemView = (function(){

	function CountryItemView (_country, countryList){

		var country = _country,
			itemTr = document.createElement('tr'),
			buttonLike, buttonDislike, buttonDelete;

		this.render = function () {
			var html = '',
				json = country.toJSON();		
			
			html += renderTemplate(countryItemTpl, json);		
			itemTr.innerHTML = html;			      		
			addListeners();				

		return itemTr;
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
			itemTr.remove(itemTr.children);		
		}	
		
		function addListeners () {
			buttonSearch();
			buttonLike.addEventListener('click', like, false);			
			buttonDislike.addEventListener('click', dislike, false);		
			buttonDelete.addEventListener('click', deleteRow, false);		
		}	
		
		function removeListeners () {
			buttonSearch();
			buttonLike.removeEventListener('click', like);			
			buttonDislike.removeEventListener('click', dislike);		
			buttonDelete.removeEventListener('click', deleteRow);				
		}
		
		function buttonSearch (){
			buttonLike = itemTr.querySelector('.likebutton');
			buttonDislike = itemTr.querySelector('.dislike');		
			buttonDelete = itemTr.querySelector('.delete');			
		}	  
	
		return this;
	}
	
	return CountryItemView;
})();