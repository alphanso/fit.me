Package.describe({
  name: 'google-maps',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use(["templating"], 'client');
  api.addFiles(['map/map.html'],'client');
  api.addFiles(['map/map.js'], 'client');
  api.export('GoogleMaps');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('google-maps');
  api.addFiles('google-maps-tests.js');
});
