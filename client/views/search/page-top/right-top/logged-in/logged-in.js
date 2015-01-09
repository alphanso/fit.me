Template.loggedIn.events = {
  'click .avatar' : function(event, template) {
    $(".dropdown").toggleClass('open');
  },

  "click #logout-btn" : function(e, tmpl) {
    e.defaultPrevented;
    e.stopPropagation();
    Meteor.logout();
  }
};