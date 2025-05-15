const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
  style: {
    sass: {
      loaderOptions: {
        api: 'modern',
        sassOptions: {
          loadPaths: [path.join(__dirname, 'src', 'styles')],
        },
      },
    },
  },
};
