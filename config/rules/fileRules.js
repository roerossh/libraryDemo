const { resolve } = require('../utils');

module.exports = [
    {
        test: /\.svg$/,
        loader: '@svgr/webpack',
        include: resolve('web-client'),
    },
    {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/"
            }
          }
        ]
      },
]