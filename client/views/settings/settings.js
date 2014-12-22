Template.settings.events = {
  "click #edit-profile-btn" : function(e, t) {
    e.defaultPrevented;
    e.stopPropagation();
    $(".user_settings_tab").hide();
    $(".user-tab").removeClass("active");
    $("#edit-profile-btn").addClass("active");
    $("#edit-profile").show();
  },

  "click #notification-preference-btn" : function(e, t) {
    e.defaultPrevented;
    e.stopPropagation();
    $(".user_settings_tab").hide();
    $(".user-tab").removeClass("active");
    $("#notification-preference-btn").addClass("active");
    $("#notification-preference").show();
  },

  "click #security-btn" : function(e, t) {
    e.defaultPrevented;
    e.stopPropagation();
    $(".user_settings_tab").hide();
    $(".user-tab").removeClass("active");
    $("#security-btn").addClass("active");
    $("#security").show();
  }
};

Template.settings.rendered = function() {
  $(".user_settings_tab").hide();
  $("#edit-profile-btn").addClass("active");
  $("#edit-profile").show();
};

Template.settings.helpers({
  'currentUserProfile': function () {
    console.log(Meteor.user());
    return Meteor.user().profile;
  }
});