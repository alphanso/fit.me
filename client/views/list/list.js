Template.add.events = {
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

  'click #submit': function (event, template) {
    event.preventDefault();
    event.stopPropagation();
    Leads.insert({
      createdAt: new Date(),
      name: template.find('#fcName'),
      number: template.find('#fcNumber'),
      address: template.find('#fcAddress'),
      area: template.find('#fcArea'),
      city: template.find('#fcCity'),
      type: template.find('#fcType')
    }, function(error, _id){
      $('#addWC').toggle();
      if(error) {
        $('#error').toggle();
        console.log(error);
      } else {
        $('#success').toggle();
      }
    });
  }
};