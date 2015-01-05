Qlists = new Mongo.Collection('qlist');

QuickListSchema = new SimpleSchema({
  city: {
    type: String,
    allowedValues: ['Mumbai', 'Kolkata', 'Chennai', 'Bengaluru', 'Delhi', 'Hyderabad']
  },
  businessName : {
    type: String,
    regEx: /^[a-z0-9A-z .]{3,50}$/
  },
  name: {
    type: String,
    regEx: /^[a-zA-Z-]{2,50}$/
  },
  yourNumber: {
    type: String,
    optional:true,
    regEx: /^[0-9]{10}$/
  },
  businessNumber: {
    type: String,
    regEx: /^[0-9]{10}$/
  },
  area: {
    type: String
  }
});

Qlists.attachSchema(QuickListSchema);