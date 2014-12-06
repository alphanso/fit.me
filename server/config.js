Meteor.startup(function() {

  ServiceConfiguration.configurations.remove({
    service: "facebook"
  });
  ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: "553879164747612",
    loginStyle: "popup",
    secret: "79b1fd56ac0bbd1c8c94fb3c0be47345"
  });


});
