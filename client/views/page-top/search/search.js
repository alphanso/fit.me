Template.placeSearch.events = {
    'click .clear-search' : function (event, template) {
        event.preventDefault();
        template.find('input').value = '';
        template.$('.clear-search').hide();
    },

    'keyup input[type=search]' : function(event, template) {
        event.preventDefault();
        var value = template.find('input').value;
        if(value.length > 0) {
            template.$('.clear-search').show();
        } else {
            template.$('.clear-search').hide();
        }
    },

    'click .submit-search' : function(event, template) {
        event.preventDefault();
        console.log(template.find('input').value);
    }
};