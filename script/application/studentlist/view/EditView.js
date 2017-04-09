'use strict';
var EditView = Backbone.View.extend({
    tagName: 'div',
    className: 'editPanel',

    template: _.template(editViewTpl),

    events: {
        'click .saveInfo': 'changeData',
        'click .closeEdit': 'closeInfo'
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    },

    closeInfo: function() {
        this.$el.remove();
    },

    changeData: function() {

        var newData = {},
            prop;

        _.each(this.$('input'), function(input){
            prop = input.name;           
            newData[prop] = input.value;				
		},this);

        /* pessimistic way of adding model
        this.model.save(editData, {success:function (model, response, options){
            this.collection.add(model);
        }.bind(this)});*/

    // optimistic way of adding model
        if (this.model.isNew()){
            this.collection.add(this.model)
            this.model.save(newData);
            this.closeInfo();
        } else {

        this.model.save(newData);
        
        this.closeInfo();

        mediator.pub('infoView', this.model);    
        
        }


    }
})
