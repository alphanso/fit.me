Template.addPlace.events = {
  'click #capture-pos': function (event, template) {
    event.preventDefault();
    event.stopPropagation();
    navigator.geolocation.getCurrentPosition(function (position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      $('#longitude').val(longitude);
      $('#latitude').val(latitude);
    });
  },

  'click #save': function(e, tpl) {
    e.defaultPrevented;
    e.stopPropagation();
    var place = {
      name : $("#name").val(),
      address : {
        line1 : $("#address1").val(),
        line2 : $("#address2").val(),
        city  : $("#city").val(),
        pincode : $("#pincode").val(),
        state : $("#state").val()
      },
      contacts : {
        telephone : $("#phone").val()
      },
      location : {
        type : "point",
        coordinates:[$("#longitude").val(), $("#latitude").val()]
      }
    };
    Places.insert(place);
    $("#addPlaceModal").modal("toggle");
  }
};

