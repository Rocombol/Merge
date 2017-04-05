'use strict';
var Student = Backbone.Model.extend({
    defaults: {
	    id:'',
        name: '',
        lastname: '',
        gender: '',
        skype: '',
        phone: '',
        email: ''
    },

    urlRoot:'/students'
});





