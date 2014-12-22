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
    }
  }
};