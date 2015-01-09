Template.zoom.events = {
    'click #zoomIn' : function(e, template) {
        e.preventDefault();
        e.stopPropagation();
        map.setZoom(map.getZoom()+1);
    },

    'click #zoomOut' : function(e, template) {
        e.preventDefault();
        e.stopPropagation();
        var map = GoogleMaps.map;
        map.setZoom(map.getZoom()-1);
    }
};