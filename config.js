const path = require('path')

const config = {
  // Extend the default Webpack configuration
  webpack: (wpConfig) => {
    // Add resolve path for react-polymer
    wpConfig.module.loaders[0].include.push(
      path.resolve(process.cwd(), './node_modules/react-polymer'),
    )
  },
}

module.exports = config
