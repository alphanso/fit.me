Accounts.onCreateUser(function(options, user) {
  if (options.profile)
    user.profile = options.profile;
  console.log(user);
  console.log(options);
  return user;
});