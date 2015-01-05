Template.business.rendered = function() {
  $(".place-form").hide();
  $("#address-btn").addClass("active");
  $("#address-form").show();
};

Template.business.events = {
  "click #address-btn" : function(e, t) {
    e.defaultPrevented;
    e.stopPropagation();
    $(".place-form").hide();
    $(".place-tab").removeClass("active");
    $("#address-btn").addClass("active");
    $("#address-form").show();
  },

  "click #contact-btn" : function(e, t) {
    e.defaultPrevented;
    e.stopPropagation();
    $(".place-form").hide();
    $(".place-tab").removeClass("active");
    $("#contact-btn").addClass("active");
    $("#contact-form").show();
  },

  "click #map-location-btn" : function(e, t) {
    e.defaultPrevented;
    e.stopPropagation();
    $(".place-form").hide();
    $(".place-tab").removeClass("active");
    $("#map-location-btn").addClass("active");
    $("#map-location-form").show();
    google.maps.event.trigger(GoogleMaps.map, 'resize');
  },

  "click #address-next" : function(e, t) {
    e.defaultPrevented;
    e.stopPropagation();
    var fields = ["businessName","location.building", "location.street","location.landmark","location.area","location.city", "location.pinCode"];
    var valid = true;
    for(var f in fields){
      valid = AutoForm.validateField("PlacesForm", fields[f], false) && valid;
    }
    if(valid) {
      $(".place-form").hide();
      $(".place-tab").removeClass("active");
      $("#contact-btn").addClass("active");
      $("#contact-form").show();
    }
  },

  "click #contact-next" : function(e, t) {
    e.defaultPrevented;
    e.stopPropagation();
    var fields = ["contact.contactPerson.salutation","contact.contactPerson.name", "contact.contactPerson.designation","contact.landlineNumber","contact.mobileNumber","contact.faxNumber", "contact.tollFreeNumber", "contact.emailId","contact.website"];
    var valid = true;
    for(var f in fields){
      valid = AutoForm.validateField("PlacesForm", fields[f], false) && valid;
    }
    if(valid) {
      $(".place-form").hide();
      $(".place-tab").removeClass("active");
      $("#map-location-btn").addClass("active");
      $("#map-location-form").show();
      google.maps.event.trigger(GoogleMaps.map, 'resize');
    }
  }
};

Template.business.helpers({
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
          console.log(marker);
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
  }
});

