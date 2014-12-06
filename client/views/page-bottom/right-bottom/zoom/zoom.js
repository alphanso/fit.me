Template.zoom.events = {
    'click #zoomIn' : function(event, template) {
        var map = Session.map;
        map.setZoom(map.getZoom()+1);
    },

    'click #zoomOut' : function(event, template) {
        var map = Session.map;
        map.setZoom(map.getZoom()-1);
    }
};