Template.getLocation.events = {
  'click #get-location' : function(event, template) {
    event.preventDefault();
    event.stopPropagation();
    navigator.geolocation.getCurrentPosition(function(position){
      var map = GoogleMaps.map;
      console.log('Set current position as center of map');
      map.setCenter({lat: position.coords.latitude, lng: position.coords.longitude});
    });
  }
};