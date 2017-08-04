const { join } = require('path');
const Merge = require('webpack-merge');

const commonConfig = {
  entry: {
    'app': join(__dirname, 'src', 'main.ts'),
  },
};

module.exports = commonConfig;