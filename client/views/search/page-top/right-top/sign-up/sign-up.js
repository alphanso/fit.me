Template.signUp.events = {
  "click #gogle" : function (event, template) {
    event.stopPropagation();
    event.preventDefault();
    $("#signUpModal").modal('toggle');
    Meteor.loginWithGoogle({
      loginStyle: 'popup',
      requestPermissions: ["openid email profile"]
    }, function(error) {
      if(error) {
        Session.set('errorMessage', err.reason || 'Unknown error');
      }
      console.log("logged in with google");
    });
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
      console.log("logged in with facebook");
    });
  }
};