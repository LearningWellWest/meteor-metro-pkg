Package.describe({
  summary: "Metromet - package for creating metro-like-boxes"
});

Package.on_use(function (api) {
  api.add_files([
    'lib/metromet.js',
    'lib/metromet.css',
  ], 'client'
  );
});