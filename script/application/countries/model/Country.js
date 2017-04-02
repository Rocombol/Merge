'use strict';
var Country = Backbone.Model.extend({
		defaults: {
			country:'' ,
			area: '',
			population: '',
			continent: '',
			earth: 'earth' 		
		},

		urlRoot:'/countries',

		like: function(item){
			item.parentNode.classList.add('like');				
		},
			
		dislike: function(item){
			item.parentNode.remove(item.children)
		},
			
		isOwnContinent: function (continent){
			if(continent=='earth'){
				return	this.get('earth') == continent;
			}
				return this.get('continent') == continent;		
		}	
})






