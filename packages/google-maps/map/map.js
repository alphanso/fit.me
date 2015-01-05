GoogleMaps = {
    loaded : false,
    callback : function() {
        GoogleMaps.loaded = true;
        var center = new google.maps.LatLng(GoogleMaps.context.mapOptions.center.lat, GoogleMaps.context.mapOptions.center.lng);
        GoogleMaps.context.mapOptions.center = center;
        GoogleMaps.map = new google.maps.Map(document.getElementById(GoogleMaps.context.id), GoogleMaps.context.mapOptions);
        if('function'=== typeof GoogleMaps.context.callback)
            GoogleMaps.context.callback(GoogleMaps.map);
    }
};

GoogleMaps.loadScript = function(parameters) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = !0;
    script.src = ("https:" === document.location.protocol ? "https:" : "http:") + '//maps.googleapis.com/maps/api/js';

    if ('undefined' == typeof parameters['sensor']) {
        parameters['sensor'] = false;
    }
    parameters['callback'] = 'GoogleMaps.callback';
    var queryString = "?";
    for (var key in parameters) {
        if (queryString != "?") {
            queryString += "&"
        }
        queryString += key + "=" + String(parameters[key]);
    }
    script.src += queryString;

    document.body.appendChild(script);
};

Template.map.rendered = function() {
    var parameters = this.data.parameters || {};
    this.firstNode.id = this.data.id;
    $("#"+this.data.id).attr('style', this.data.style);
    GoogleMaps.context = this.data;
    if(!GoogleMaps.loaded) {
        GoogleMaps.loadScript(parameters);
    }
};