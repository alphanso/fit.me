Template.places.helpers({
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
        var marker = new google.maps.Marker({
          map: map,
          position: map.getCenter(),
          draggable: true
        });
        google.maps.event.addListener(marker, 'position_changed', function() {
          $('input#lat').val(marker.getPosition().k);
          $('input#lng').val(marker.getPosition().D);
        });
        google.maps.event.addListener(map, 'center_changed', function() {
          marker.setPosition(map.getCenter());
        });
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
      style: "height:450px;width:100%;"
    };
  },
  fakeData: function() {
    return {
      businessName: Fake.word(),
      category: Fake.fromArray(["Gym", "Spa", "Salons"]),
      location: {
        building: Fake.word(),
        street: Fake.word(),
        landmark: Fake.word(),
        area: Fake.word(),
        city: Fake.fromArray(['Mumbai', 'Kolkata', 'Chennai', 'Bengaluru', 'Delhi', 'Hyderabad']),
        pinCode: 560022
      },
      contact: {
        contactPerson: {
          salutation: "Mr",
          name: 'Fake'
        },
        mobileNumber : [1234567890]
      }
    }
  }
});