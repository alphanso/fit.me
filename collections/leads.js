Leads = new Mongo.Collection('leads');

//Users = new Mongo.Collection('users');

Leads.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});