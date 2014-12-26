Template.search.helpers({
  context: function() {
    return {
      parameters: {
        v:'3.exp',
        key:'AIzaSyB8Q3x_NgzZwtXmSxEHEaqMGsgrJCY9Epc'
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
      id: 'map-canvas',
      style: "height:100%;width:100%;"
    };
  }
});
