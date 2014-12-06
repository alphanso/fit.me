Template.map.rendered = function() {
    var loadScript = function() {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyB8Q3x_NgzZwtXmSxEHEaqMGsgrJCY9Epc'+
        '&callback=initialize';
        document.body.appendChild(script);
    };

    window.initialize = function() {
        var mapOptions = {
            zoom: 8,
            minZoom : 14,
            maxZoom : 18,
            disableDefaultUI: true,
            center: new google.maps.LatLng(21.14985, 79.080598)
        };

        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
        Session.map = map;
    };

    loadScript();
};