Accounts.onCreateUser(function(options, user) {
  var profile, email, verified;
  if(user.services.facebook) {
    var fb = user.services.facebook;
    verified = fb.verified;
    email = fb.email;
    profile = {
      firstName : fb.first_name,
      lastName : fb.last_name,
      gender : fb.gender.toLowerCase(),
      city : fb.city
    };
  } else if(user.services.google) {
    var google = user.services.google;
    profile = {
      firstName : google.given_name,
      lastName : google.family_name,
      gender : google.gender.toLowerCase(),
      city : google.city
    };
    verified = google.verified_email;
    email = google.email;
  }
  user.profile = profile;
  user.emails = user.emails || [];
  user.emails.push({
    address: email,
    verified : verified
  })
  return user;
});