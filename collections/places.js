Places = new Mongo.Collection('places');
var PlacesSchema = {};
PlacesSchema.Location = new SimpleSchema({
  building: {
    type: String
  },
  street: {
    type: String
  },
  landmark: {
    type: String
  },
  area: {
    type: String
  },
  city: {
    type: String,
    allowedValues: ['Mumbai', 'Kolkata', 'Chennai', 'Bengaluru', 'Delhi', 'Hyderabad']
  },
  pinCode: {
    type: Number
  },
  state: {
    type: String,
    allowedValues: ["Maharastra", "Karnataka", "Delhi", "Telangana", "Tamil Nadu", "West Bengal"],
    autoValue: function() {
      var city = this.siblingField("city");
      switch (city.value) {
        case 'Mumbai': return "Maharastra";
        case 'Kolkata': return "West Bengal";
        case 'Chennai': return "Tamil Nadu";
        case 'Bengaluru': return "Karnataka";
        case 'Delhi': return "Delhi";
        case 'Hyderabad': return "Telangana";
        default : console.log("error"); break;
      }
    }
  },
  country: {
    type: String,
    allowedValues: ["India"],
    optional:true,
    autoValue: function(){
      return "India";
    }
  }
});

PlacesSchema.GeoJSON = new SimpleSchema({
  type: {
    type: String,
    optional: true
  },
  coordinates: {
    type: [Number],
    decimal:true,
    minCount: 2,
    maxCount: 2
  }
});

PlacesSchema.ContactPerson = new SimpleSchema({
  salutation: {
    type: String,
    allowedValues: ["Mr", "Mrs", "Miss"],
    defaultValue: "Mr",
    optional:true
  },
  name: {
    type:String
  },
  designation: {
    type:String,
    optional:true
  }
});

PlacesSchema.Contact = new SimpleSchema({
  contactPerson: {
    type: PlacesSchema.ContactPerson
  },
  landlineNumber: {
    type: [Number],
    optional: true
  },
  mobileNumber: {
    type: [Number]
  },
  faxNumber: {
    type: Number,
    optional: true
  },
  tollFreeNumber: {
    type: Number,
    optional: true
  },
  emailId: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    optional:true
  },
  website: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    optional:true
  }
});

PlacesSchema.Place = new SimpleSchema({
  businessName: {
    type: String,
    regEx: /^[a-z0-9A-z .]{3,30}$/
  },
  location: {
    type: PlacesSchema.Location
  },
  contact: {
    type: PlacesSchema.Contact
  },
  loc: {
    type: PlacesSchema.GeoJSON
  }
});
PlacesSchema.context = PlacesSchema.Place.newContext();
Places.attachSchema(PlacesSchema.Place);
Places.permit('insert').apply();