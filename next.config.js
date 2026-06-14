const path = require('path')

module.exports = {
  devIndicators: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
