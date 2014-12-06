Router.map(function() {

  this.route('map', {
    path: '/'
  });

  this.route('add', {
    path: '/business'
  });

  this.route('notFound', {
    path: '*',
    where: 'server',
    action: function() {
      this.response.statusCode = 404;
      this.response.end(Handlebars.templates['404']());
    }
  });

});
