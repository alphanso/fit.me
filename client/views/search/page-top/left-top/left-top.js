Template.leftTop.events= {
  'click .gym': function(e, t) {
    var $el = $('.gym');
    $el.toggleClass('selected');
    Places.find({category: 'Gym'}).forEach(function(place,index){
      var marker = new google.maps.Marker({
        draggable: false,
        map: GoogleMaps.map,
        position: {lat: place.loc.coordinates[0], lng: place.loc.coordinates[1]},
        title: place.businessName,
        icon: {
          path: 'M0-165c-27.618 0-50 21.966-50 49.054C-50-88.849 0 0 0 0s50-88.849 50-115.946C50-143.034 27.605-165 0-165z',
          fillColor: '#00385C',
          strokeColor: '#00385C',
          scale: 0.2,
          fillOpacity: 1,
          strokeWeight: 0
        }
      });
    });
  },
  'click .spa': function(e, t) {
    var $el = $('.spa');
    $el.toggleClass('selected');
    Places.find({category: 'Spa'}).forEach(function(place,index){
      var marker = new google.maps.Marker({
        draggable: false,
        map: GoogleMaps.map,
        position: {lat: place.loc.coordinates[0], lng: place.loc.coordinates[1]},
        title: place.businessName,
        icon: {
          path: 'M0-165c-27.618 0-50 21.966-50 49.054C-50-88.849 0 0 0 0s50-88.849 50-115.946C50-143.034 27.605-165 0-165z',
          fillColor: '#81c99c',
          strokeColor: '#81c99c',
          scale: 0.2,
          fillOpacity: 1,
          strokeWeight: 0
        }
      });
    });
  },
  'click .hair-care': function(e, t) {
    var $el = $('.hair-care');
    $el.toggleClass('selected');
    Places.find({category: 'Salons'}).forEach(function(place,index){
      var marker = new google.maps.Marker({
        draggable: false,
        map: GoogleMaps.map,
        position: {lat: place.loc.coordinates[0], lng: place.loc.coordinates[1]},
        title: place.businessName,
        icon: {
          path: 'M0-165c-27.618 0-50 21.966-50 49.054C-50-88.849 0 0 0 0s50-88.849 50-115.946C50-143.034 27.605-165 0-165z',
          fillColor: '#009F4F',
          strokeColor: '#009F4F',
          scale: 0.2,
          fillOpacity: 1,
          strokeWeight: 0
        }
      });
    });
  }
};