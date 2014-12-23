Template.registerHelper('siteTitle', function(string) {
  return SEO.settings.title;
});

Template.registerHelper('summarize', function(string) {
  var cleanString = _(string).stripTags();
  return _(cleanString).truncate(140);
});

Template.registerHelper('trim', function (value) {
  return value.replace(/^\s*|\s*$/g, '');
});

Template.registerHelper('isNotEmpty', function(valye){
  if (value && value !== ''){
    return true;
  }
  console.log('Please fill in all required fields.');
  return false;
});

Template.registerHelper('isEmail', function(value){
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (filter.test(value)) {
    return true;
  }
  console.log('Please enter a valid email address.');
  return false;
});

Template.registerHelper('isValidPassword', function(password){
  if (password.length < 6) {
    console.log('Your password should be 6 characters or longer.');
    return false;
  }
  return true;
});

Template.registerHelper('areValidPasswords', function(password, confirm){
  if (!isValidPassword(password)) {
    return false;
  }
  if (password !== confirm) {
    console.log('Your two passwords are not equivalent.');
    return false;
  }
  return true;
});

Template.registerHelper('loadAsync', function(url, init){
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyB8Q3x_NgzZwtXmSxEHEaqMGsgrJCY9Epc";
  document.body.appendChild(script);
});