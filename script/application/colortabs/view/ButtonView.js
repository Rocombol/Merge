'use strict';
var ButtonView = Backbone.View.extend({
	
	tagName:'div',
	
	render: function () {
		var colorTitle = Object.keys(this.model.toJSON()),
			htmlString='',
			changeColorCounter,
			inputCollection,
			model = this.model;
		
        colorTitle.forEach(function(color){
            htmlString += inputTpl.replace(/:color/g, color); 
        }, this);  		
				
		this.$el.html(htmlString);
		
        colorTitle.forEach(function(color){
            inputCollection = this.$el.find('input[value="' + color + '"]');
            changeColorCounter = function () {
                     model.increaseCount(color);
                };			
            inputCollection.click(changeColorCounter); 

        }, this);		
		
		return this;
	}	
});












