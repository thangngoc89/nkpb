const path = require('path')
// const StatsPlugin = require('stats-webpack-plugin')

const config = {
  // Extend the default Webpack configuration
  webpack: (wpConfig) => {
    // Add resolve path for react-polymer
    wpConfig.module.loaders[0].include.push(
      path.resolve(process.cwd(), './node_modules/react-polymer')
    )

    // wpConfig.plugins.push(
    //   new StatsPlugin('stats.json', {
    //     chunkModules: true,
    //     exclude: [/node_modules[\\\/]react/],
    //   })
    // )
  },
}

module.exports = config
