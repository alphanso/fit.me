Template.search.helpers({
  context: function() {
    return {
      parameters: {
        v:'3.exp',
        key:'AIzaSyB8Q3x_NgzZwtXmSxEHEaqMGsgrJCY9Epc',
        libraries: 'places'
      },
      mapOptions: {
        zoom: 8,
        minZoom : 14,
        maxZoom : 18,
        disableDefaultUI: true,
        center: {
          lat: '21.14985',
          lng: '79.080598'
        }
      },
      callback: function(map) {
        var autocomplete = new google.maps.places.Autocomplete(document.getElementById('placeSearch'), {
          bounds : map.getBounds(),
          types: ['(regions)'],
          componentRestrictions: {
            country: 'in'
          }
        });
        autocomplete.bindTo('bounds', map);
        google.maps.event.addListener(autocomplete, 'place_changed', function(){
          if(autocomplete.getPlace())
            map.setCenter(autocomplete.getPlace().geometry.location);
        });
      },
      id: 'map-canvas',
      style: "height:100%;width:100%;"
    };
  }
});

