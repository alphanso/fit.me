Template.signUp.events = {
  "click #register" : function (event, template) {
    $(".signup-options").hide();
    $(".email-register").show();
  },
  "click #facebook" : function(event, template) {
    event.stopPropagation();
    event.preventDefault();
    $("#signUpModal").modal('toggle');
    Meteor.loginWithFacebook({
      loginStyle: 'popup',
      requestPermissions: ["email","public_profile","user_friends"]
    }, function(error) {
      if(error) {
        Session.set('errorMessage', err.reason || 'Unknown error');
      }

    });
  }
};