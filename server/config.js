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

  ServiceConfiguration.configurations.remove({
    service: "google"
  });
  ServiceConfiguration.configurations.insert({
    service: "google",
    clientId: "769909118063-oomr7vi313bg1f2th0pnlrjp56hetf6h.apps.googleusercontent.com",
    loginStyle: "popup",
    secret: "j_5DTkXlRuk6s_hlWHHhCmkH"
  });
});
