'use strict';
var StudentsList = Backbone.Collection.extend({

    model: Student,
	
	initialize: function () {
		this.fetch();
	},

    /*initialize: function () {
			
       this.add({
		    "name": "Alex",
            "lastname": "Grigoryev",
            "gender": "male",  			
			"skype": "answer_quick",
			"phone":"38078527833",
			"email":"answer_quick@hmail.com"				
		});
				
	    this.add({
		    "name": "Svetlana",
            "lastname": "Ovcharenko",
            "gender": "female",  			
			"skype": "sweetie",
			"phone":"38045785223",
			"email":"sweetie@gmail.com"	
		});
		
	    this.add({
		    "name": "Elena",
            "lastname": "Ryndina",
            "gender": "female",  			
			"skype": "smile",
			"phone":"387575453",
			"email":"smile@hmail.com"	
		});
		
	    this.add({
		    "name": "Vladimir",
            "lastname": "Timofeev",
            "gender": "male",  			
			"skype": "vovanium",
			"phone":"3805454533",
			"email":"vovanium@gmail.com"	
		});

	    this.add({
		    "name": "Polina",
            "lastname": "Zhylyaeva",
            "gender": "female",  			
			"skype": "candy_polya",
			"phone":"38055454533",
			"email":"candy_polya@hmail.com"	
		});			

	    this.add({
		    "name": "Irina",
            "lastname": "Ruban",
            "gender": "female",  			
			"skype": "dn100980rev",
			"phone":"3805457233",
			"email":"kitty@gmail.com"	
		});	
    }*/
	url: '/json',
		
});	    

