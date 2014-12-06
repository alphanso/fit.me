Template.loggedIn.events = {
  'click .avatar' : function(event, template) {
    $(".dropdown").toggleClass('open');
  },

  "click #logout" : function(e, tmpl) {
    Meteor.logout();
  }
};