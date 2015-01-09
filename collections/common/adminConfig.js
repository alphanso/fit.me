AdminConfig = {
  collections: {
    Places: {
      icon: 'map-marker',
      tableColumns: [
        {label: 'Name', name: 'businessName'},
        {label: 'City', name: 'location.city'},
        {label: 'Area', name: 'location.area'},
        {label: 'Mobile Number', name: 'contact.mobileNumber.0'}
      ],
      templates: {
        new: {
          name: 'places'
        }
      }
    },
    Qlists: {
      icon: 'list',
      tableColumns: [
        {label: 'Name', name: 'businessName'},
        {label: 'City', name: 'city'},
        {label: 'Area', name: 'area'},
        {label: 'Mobile Number', name: 'businessNumber'}
      ],
      auxCollections: []
    }
  }
};