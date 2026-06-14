const path = require('path')

module.exports = {
  output: 'standalone',
  devIndicators: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
