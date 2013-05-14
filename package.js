Package.describe({
  summary: "Metromet - package for creating metro-like-boxes"
});

Package.on_use(function (api) {
  api.use(['templating'], 'client');
  api.add_files([
    'lib/metromet.js',
    'lib/metromet.css',
    'lib/metromet.html',
  ], 'client'
  );
});