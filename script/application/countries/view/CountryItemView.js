'use strict';

var CountryItemView = Backbone.View.extend({
		tagName:'tr',
		
		template: _.template(countryItemTpl),
		
		events:{
			'click .likebutton':'like',
			'click .dislike':'dislike',
			'click .delete':'deleteRow'
		},
		
		render: function (){
			
			this.$el.html(this.template(this.model.toJSON()));
			
			return this;
		},
		
		like: function(){
			 this.$el.addClass('like');
		},
		
		dislike: function(){
			this.$el.remove();
		},
		
		deleteRow: function(){			
			this.$el.remove();
			this.collection.removeCountry(this.model);
			this.model.destroy();
		}		
});

















