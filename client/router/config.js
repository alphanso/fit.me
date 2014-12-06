Router.configure({
  layoutTemplate: 'mainLayout',
  loadingTemplate: 'loading',

  yieldTemplates: {
    top: {
      to: 'top'
    },
    footer: {
      to: 'footer'
    }
  },

  onAfterAction: function() {
    $(document).scrollTop(0);
  }
});

Router.onBeforeAction('loading');
