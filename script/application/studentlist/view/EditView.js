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

        _.each(this.$('input'), function(input){
            if(this.model.get(input.name) !== input.value) {
                this.model.save(input.name, input.value);
            }				
		},this);

       /* _.each(this.$('input'), function(input) {
            if (this.model.get(input.name) !== input.value) {
                this.model.set(input.name, input.value);
                //$.post('/students', this.model.toJSON());

               /* $.ajax({
                  type: "PUT",
                  url: "/students",
                  data: this.model.toJSON(),
                  contentType: "application/json; charset=utf-8"
                });
            }
        }, this);
*/
        this.closeInfo();
        mediator.pub('infoView', this.model);

    }
})
