Router.map(function() {

  this.route('map', {
    path: '/search',
    layoutTemplate: 'mapLayout',
    loadingTemplate: 'loading',

    yieldTemplates: {
      top: {
        to: 'top'
      },
      bottom: {
        to: 'footer'
      }
    },

    onAfterAction: function() {
      $(document).scrollTop(0);
    }
  });

  this.route('settings', {
    path: '/settings',
    layoutTemplate: 'defaultLayout',
    yieldTemplates: {
      header: {
        to: 'header'
      },
      footer: {
        to: 'footer'
      }
    }
  });

  this.route('qlist', {
    path: '/list',
    layoutTemplate: 'defaultLayout',
    yieldTemplates: {
      header: {
        to: 'header'
      },
      footer: {
        to: 'footer'
      }
    }
  });

  this.route('home', {
    path: '/'
  });

  this.route('business', {
    path: '/business',
    layoutTemplate: 'defaultLayout',
    yieldTemplates: {
      header: {
        to: 'header'
      },
      footer: {
        to: 'footer'
      }
    }
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
